import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { EMAIL_REGEX } from 'src/app/auth/login/email-regex';
import { IGenders, UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
    userForm: FormGroup = this.formBuilder.group({
        // id: null,
        email: [null, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
        first_name: [null, Validators.required],
        password: [null, Validators.required],
        last_name: [null, Validators.required],
        gender_id: null,
        language: this.formBuilder.group({
            main: [null, [Validators.required]],
            secondary: null,
        }),
    });

    genders$: Observable<IGenders[]> = of([]);

    constructor(private formBuilder: FormBuilder, private userService: UserService) {}

    ngOnInit(): void {
        this.genders$ = this.userService.getGender();
    }

    createUser() {
        this.userService.createUser(this.userForm.value).subscribe((data) => {
            console.log('data', data);
        });
    }
}

// {
//   "email": "amazing@admin.com",
//   "password": "$2a$10$n.gWinss3EGJNlBsYJf4/.SSSMk5/pwwCOL4ASQqA72vfbQgK1hAS",
//   "id": 1,
//   "first_name": "Amazing",
//   "last_name": "Admin",
//   "gender_id": 1,
//   "company": "Harvey LLC",
//   "language": {
//       "main": "Ndebele",
//       "secondary": null
//   },
//   "created_at": "2021-04-23T05:39:36Z",
//   "updated_at": "2021-04-23T06:39:36Z"
// },

// Email (input, required)
// First Name (input, required)
// Last Name (input, required)
// Gender (select)
// Company (input)
// Language Main (input, required)
// Language Secondary (input)
