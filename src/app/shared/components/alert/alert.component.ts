import { Component, Input, OnInit } from '@angular/core';

type AlertType = 'danger' | 'warning' | 'light' | 'info' | 'dark' | 'success';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
    @Input() alertType: AlertType = 'light';

    constructor() {}

    ngOnInit(): void {}
}
