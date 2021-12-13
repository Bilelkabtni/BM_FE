import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoadingService } from '@services/loading.service';
import { UnSubscriptionComponent } from '@shared/utils/unsubscribe';
import { HomeService } from 'projects/home/src/public-api';
import { UserService } from 'projects/users/src/lib/user.service';
import { Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent extends UnSubscriptionComponent implements OnInit {
    usersCount = null;
    loading$: Observable<boolean> = of(true);
    constructor(
        private homeService: HomeService,
        private loaderService: LoadingService,
        private userService: UserService
    ) {
        super();
    }

    ngOnInit(): void {
        this.loading$ = this.loaderService.loading$;
        this.userService.refreshed$.pipe(takeUntil(this.unsubscribe$)).subscribe((_) => {
            this.getAllUsers();
        });
    }

    private getAllUsers(): void {
        this.homeService
            .getUsers()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((users) => {
                this.usersCount = users.length;
            });
    }
}
