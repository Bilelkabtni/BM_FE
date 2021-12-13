import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IGenders, UserService } from 'projects/users/src/lib/user.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { EMAIL_REGEX } from 'src/app/auth/login/email-regex';
import { Users } from '../../models/user.model';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
    @Input() user: Users;
    @Input() isEdit: boolean = false;

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
    showError = false;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

    ngOnInit(): void {
        this.genders$ = this.userService.getGender();
        this.setupForm();
    }

    setupForm(): void {
        if (!this.user) {
            return;
        }

        const {
            id = null,
            first_name = null,
            last_name = null,
            email = null,
            password = null,
            gender_id = null,
            language = null,
        } = this.user;

        this.userForm.patchValue({
            id: id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            gender_id: gender_id,
            language: language,
        });
    }

    submit() {
        this.showError = false;
        if (!this.isEdit) {
            this.userService
                .createUser(this.userForm.value)
                .pipe(
                    first(),
                    catchError((_) => {
                        this.showError = true;
                        return EMPTY;
                    })
                )
                .subscribe((_) => {
                    this.router.navigate(['/users']);
                    this.userService.refreshed$.next(true);
                });
        } else {
            this.userService
                .updateUser(this.userForm.value, this.user.id)
                .pipe(
                    first(),
                    catchError((_) => {
                        this.showError = true;
                        return EMPTY;
                    })
                )
                .subscribe((_) => {
                    this.router.navigate(['/users']);
                    this.userService.refreshed$.next(true);
                });
        }
    }
}
