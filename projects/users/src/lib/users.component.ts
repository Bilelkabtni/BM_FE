import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'lib-users',
    template: `
        <app-nav></app-nav>
        <app-content>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </app-content>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {}
