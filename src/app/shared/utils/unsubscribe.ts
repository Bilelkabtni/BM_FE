import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    template: '',
})
export class UnSubscriptionComponent implements OnDestroy {
    unsubscribe$: Subject<boolean> = new Subject<boolean>();

    ngOnDestroy(): void {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
