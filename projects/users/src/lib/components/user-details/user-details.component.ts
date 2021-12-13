import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
    user$: Observable<any>;
    constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.user$ = this.activatedRoute.data;
    }

    editUser(id: string): void {
        this.router.navigate([`/users/${id}/edit`]);
    }
}
