import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'ngbd-datepicker-basic',
  templateUrl: 'app/products/datepicker-basic.html'
})
export class NgbdDatepickerBasic {

  model: NgbDateStruct= {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  listFilter2= {year:now.getFullYear(), month:now.getMonth() + 1, day:now.getDate()};
   selectToday() {
    this.listFilter2 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
