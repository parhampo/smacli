import {  PipeTransform, Pipe } from '@angular/core';
import {IProduct} from '../shared/interfaces';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[], filterBy: string,filterTo: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        filterTo = filterTo ? filterTo.toLocaleLowerCase() : null;
        return (filterBy || filterTo) ? value.filter((product: IProduct) =>
            ((product.releaseDate.toLocaleLowerCase().indexOf(filterBy) !== -1)||(product.city.toLocaleLowerCase().indexOf(filterTo) !== -1))) : value;
        
    }
}
