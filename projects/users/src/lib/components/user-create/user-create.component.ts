import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateComponent {}
