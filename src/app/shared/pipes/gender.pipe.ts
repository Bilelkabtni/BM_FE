import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'gender',
})
export class GenderPipe implements PipeTransform {
    transform(value: number): unknown {
        switch (value) {
            case 1:
                return 'Male';
            case 2:
                return 'Female';
            case 3:
                return 'Non-Binary';
            default:
                return '-';
        }
    }
}
