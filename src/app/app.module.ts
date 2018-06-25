import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NextsaleComponent } from './nextsale/nextsale.component';
import { WhysellComponent } from './whysell/whysell.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    ProductModule,
    NgbModule.forRoot(), 
    BrowserModule,
    AppRoutingModule
         
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NextsaleComponent,
    WhysellComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
