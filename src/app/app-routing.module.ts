import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NextsaleComponent } from './nextsale/nextsale.component';
import { WhysellComponent } from './whysell/whysell.component';
const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path:'whysell', component:WhysellComponent},
  { path:'nextsales', component:NextsaleComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
