import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'sbmfe';
    constructor(public tokenStorageService: TokenStorageService) {}
}
