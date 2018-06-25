import { Component, OnInit, Input,OnChanges, SimpleChanges, }  from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from '../shared/interfaces';
//import { ProductService } from './product.service';
import { NgbdDatepickerBasic } from './datepicker-basic';
//import { Router } from '@angular/router';
//import { DataFilterService } from '../core/data-filter.service';
import { DataService } from '../core/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const now= new Date();
@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
   
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter?:string
    errorMessage: string;
    model?: NgbDateStruct={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    changeLog: string[] = []; 
 //   listFilter?:string;
    day:number;
    month:number;
    year:number;
    products: IProduct[];
    s:boolean=false;
    constructor(private _productService: DataService) {
    }
    
    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
                          
    }
    ngOnChanges(changes: SimpleChanges){
     
    // this.listFilter = (this.model.year.toString()) +"-"+ (this.model.month.toString())+"-"+ (this.model.day.toString());
             
          //   let chng2= changes['listFilter'];
         //    let cur = chng2.currentValue;
         //    let prev = JSON.stringify(chng2.previousValue); // first time is {}; after is integer
        //     this.changeLog.push(`model: currentValue = ${cur}, previousValue = ${prev}`);
      //  this.listFilter2 = now.toISOString().slice(0,10);
    }
    ngDoCheck(){
        if(this.s){
        this.listFilter = (this.model.year.toString()) +"-"+ (this.model.month.toString())+"-"+ (this.model.day.toString());
    }
    else{
        this.listFilter='';
       // this.s=true;
    }

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
    selectToday() {
    // this.listFilter = now.toISOString().slice(0,10);
    }
    toggle(): void {
        this.s=true;
      //  this.listFilter2 = now.toISOString().slice(0,10);
     
       // console.log(this.listFilter2);
    }
   
}
@Component({ 
selector: 'input-calendar',
template: `
<div style="color:black"></div>
`})
export class InputCalendarrComponent implements OnChanges {
    @Input() listFilter2?:string;
    changeLog: string[] = [];
    ngOnChanges(changes: SimpleChanges) {
        
       // A change to `listFilter2` is the only change we care about
      let chng = changes['listFilter2'];
      let cur = chng.currentValue;
      let prev = JSON.stringify(chng.previousValue); // first time is {}; after is integer
      this.changeLog.push(`currentValue = ${cur},previousValue = ${prev}`);
    }
  }

