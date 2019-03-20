import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from "../product.service";
import { Vendor } from '../../vendor/vendor.class';
import { SystemService } from '../../system/system.service';
import { VendorService } from '../../vendor/vendor.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productsrvc: ProductService, private systemsrvc: SystemService,
    private vendorsrc: VendorService, 
    ) { }

  ngOnInit() {
    this.productsrvc.list()
      .subscribe(resp =>{
        console.log(resp);
        this.products = resp;
      }
        )
  }

}
