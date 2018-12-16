import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
    transform(data: Object) {
        const keys: any[] = [];
        for (const key in data) {
            if (key) {
                keys.push(data[key]);
            }
        }
        return keys;
    }
}
