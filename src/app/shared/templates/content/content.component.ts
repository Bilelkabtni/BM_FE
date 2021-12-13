import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@services/loading.service';
import { HomeService } from 'projects/home/src/public-api';
import { UserService } from 'projects/users/src/lib/user.service';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
    usersCount = null;
    loading$: Observable<boolean> = of(true);
    constructor(
        private homeService: HomeService,
        private loaderService: LoadingService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.loading$ = this.loaderService.loading$;
        this.userService.refreshed$.subscribe((_) => {
            this.getAllUsers();
        });
    }

    private getAllUsers(): void {
        this.homeService.getUsers().subscribe((users) => {
            this.usersCount = users.length;
        });
    }
}
