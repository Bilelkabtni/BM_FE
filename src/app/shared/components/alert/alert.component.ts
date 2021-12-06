import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type AlertType = 'danger' | 'warning' | 'light' | 'info' | 'dark' | 'success';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
    @Input() alertType: AlertType = 'light';

    constructor() {}
}
