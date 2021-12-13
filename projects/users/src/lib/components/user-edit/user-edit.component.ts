import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnSubscriptionComponent } from '@shared/utils/unsubscribe';
import { takeUntil } from 'rxjs/operators';
import { Users } from '../../models/user.model';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent extends UnSubscriptionComponent implements OnInit {
    user: Users;
    constructor(private activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit(): void {
        this.activatedRoute.data.pipe(takeUntil(this.unsubscribe$)).subscribe((data: { user: Users }) => {
            this.user = data.user;
        });
    }
}
