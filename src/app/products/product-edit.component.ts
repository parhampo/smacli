import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../core/data.service';
import {IProduct, ICustomer, IState } from '../shared/interfaces';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: IProduct = {
    id         : 2,
    productName: '',
    auctype: '',
    description: '',
    releaseDate: '',
    website: '',
    imageUrl:[''],
    Highlights:[''],
    coverimg:'',
    email: '',
    terms:'',
    time: '',
    tel: '',
    shipping:'',
    note: '',
    address:'',
    city: '',
    zip: '',
    state: ''
       
  };
  states: IState[];
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText: string = 'Insert';
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id !== '0') {
      this.operationText = 'Update';
      this.getProduct(id);
    }

   // this.getStates();
  }

  getProduct(id: number) {
      this.dataService.getProduct(id)
        .subscribe((product: IProduct) => {
          this.product = product;
        },
        (err: any) => console.log(err));
  }

 // getStates() {
 //   this.dataService.getStates().subscribe((states: IState[]) => this.states = states);
 // }
  
  submit() {

      if (this.product._id) {

        this.dataService.updateProduct(this.product)
          .subscribe((product: IProduct) => {
            if (product) {
              this.router.navigate(['/products']);
            } else {
              this.errorMessage = 'Unable to save product';
            }
          },
          (err: any) => console.log(err));

      } else {

        this.dataService.insertProduct(this.product)
          .subscribe((product: IProduct) => {
            if (product) {
              this.router.navigate(['/products']);
            }
            else {
              this.errorMessage = 'Unable to add product';
            }
          },
          (err: any) => console.log(err));
          
      }
  }
  
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteProduct(this.product.id)
        .subscribe((status: boolean) => {
          if (status) {
            this.router.navigate(['/products']);
          }
          else {
            this.errorMessage = 'Unable to delete product';
          }
        },
        (err) => console.log(err));
  }

}