import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { IProduct } from '../shared/interfaces';
import { DataService } from '../core/data.service';
declare var google: any;

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    listFilter2: string;
    errorMessage: string;
    products: IProduct[];
    private sub: Subscription;
    
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: DataService) {
    }

    ngOnInit(): void {
    //    let id = this.route.snapshot.params['id'];
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
                });
		
		this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
                           this.listFilter2=this._route.snapshot.queryParams['filterBy'] || ''; 
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
      //  getCustomer(id: string) {
      //      this.dataService.getCustomer(id)
      //        .subscribe((customer: ICustomer) => {
      //          this.customer = customer;
      //        },
      //        (err: any) => console.log(err));
      //  }
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
           }
     
   onBack(): void {
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}

