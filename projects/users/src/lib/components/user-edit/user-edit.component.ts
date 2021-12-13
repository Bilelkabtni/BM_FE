import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../../models/user.model';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
    user: Users;
    constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe((data: { user: Users }) => {
            this.user = data.user;
        });
    }
}
