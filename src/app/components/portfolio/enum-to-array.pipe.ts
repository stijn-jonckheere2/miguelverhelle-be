import { Pipe, PipeTransform } from '@angular/core';
import 'es7-object-polyfill';

@Pipe({
    name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
    transform(data: Object) {
        const keys = Object.values(data);
        return keys;
    }
}
