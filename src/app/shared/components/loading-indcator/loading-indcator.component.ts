import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-loading-indicator',
    templateUrl: './loading-indcator.component.html',
    styleUrls: ['./loading-indcator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingIndicatorComponent {}
