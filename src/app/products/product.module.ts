import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
//import { DefaultauctionComponent} from './defaultauction.component';
import { InputCalendarrComponent} from './product-list.component';
//import { ProductDetailGuard } from './product-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { ProductFilterPipe } from './product-filter.pipe';
//import { DataService }   from '../core/data.service';
import { CoreModule }   from '../core/core.module';
import { Observable, of } from 'rxjs';
//import { IRouting } from '../shared/interfaces';

@NgModule({
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,CoreModule,
     JsonpModule,
     NgbModule,
     RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'products/:id', component:ProductEditComponent }
  //    {path: 'defaultauction/:id', component:DefaultauctionComponent}
    ])
  ],
  declarations: [
   // DefaultauctionComponent,
    ProductListComponent,
    InputCalendarrComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductFilterPipe
   
  ],
  providers: [
 //   DataService
//    ProductDetailGuard
  ]
  
})
export class ProductModule {}
