import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  vendors: Vendor[];
  vendorId: number;
  product: Product = new Product('','','','',0.00,0);
  
  save(): void{
    this.productsrvc.create(this.product)
    .subscribe( resp =>{
      console.log(resp);
      this.router.navigateByUrl('product/list');
    },
    err => {console.error(err);}
      );
  }

  constructor(private productsrvc: ProductService, private router: Router, 
    private vendorsrvc: VendorService) { }

  ngOnInit() {
    this.vendorsrvc.list()
      .subscribe(resp => {
        console.log(resp);
        this.vendors = resp;
    });

  }

}
