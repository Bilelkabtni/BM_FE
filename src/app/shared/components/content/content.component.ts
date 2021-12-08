import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
    constructor(public tokenStorageService: TokenStorageService) {
        console.log(this.tokenStorageService.isAuthenticated());
    }
}
