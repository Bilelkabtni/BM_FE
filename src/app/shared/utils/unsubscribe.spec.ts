import { UnSubscriptionComponent } from './unsubscribe';

describe('UnSubscriptionComponent', () => {
    const directive = new UnSubscriptionComponent();

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });
    it('should call observable next method on ngOnDestroy', () => {
        spyOn(directive.unsubscribe$, 'next');
        directive.ngOnDestroy();
        expect(directive.unsubscribe$.next).toHaveBeenCalled();
    });
    it('should emit true on ngOnDestroy', () => {
        directive.ngOnDestroy();
        directive.unsubscribe$.subscribe((isEmitted) => {
            expect(isEmitted).toBeTruthy();
        });
    });
});
