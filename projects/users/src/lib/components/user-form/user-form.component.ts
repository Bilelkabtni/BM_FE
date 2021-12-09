import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IGenders, UserService } from 'projects/users/src/lib/user.service';
import { Observable } from 'rxjs';
import { EMAIL_REGEX } from 'src/app/auth/login/email-regex';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
    userForm: FormGroup = this.formBuilder.group({
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

    genders$: Observable<IGenders[]>;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

    ngOnInit(): void {
        this.genders$ = this.userService.getGender();
    }

    createUser() {
        this.userService.createUser(this.userForm.value).subscribe((_) => {
            this.router.navigate(['/users']);
        });
    }
}
