import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsers } from '@services/home.service';
import { HomeService } from 'projects/home/src/public-api';
import { Observable } from 'rxjs';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
    users$: Observable<IUsers[]>;
    tableData: any[] = [];
    head = ['First name', 'Last name', 'Gender', 'email'];
    page = 1;

    constructor(private homeService: HomeService, private router: Router, private userService: UserService) {}

    ngOnInit(): void {
        this.users$ = this.homeService.getUsers();
    }

    showUserDetails(id: number): void {
        this.router.navigate(['/users', id]);
    }

    deleteUser(userId: number): void {
        const deleteConfirmed = confirm('Are you sure you want to delete this user?');
        if (!deleteConfirmed) {
            return;
        }

        this.userService.deleteUser(userId).subscribe((_) => {
            this.users$ = this.homeService.getUsers();
        });
    }
}
