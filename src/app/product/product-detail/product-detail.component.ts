import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from "../product.service";
import { Router } from '@angular/router';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { SystemService } from '../../system/system.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  // vendors: Vendor[];
  verify: boolean = false;

  verifyDelete(): void{
    this.verify = true;
  }

  delete(): void{
    this.productsrvc.delete(this.product)
    .subscribe( resp => {
      console.log("Product Deleted", resp);
      this.router.navigateByUrl('/product/list');
    })
  }


  constructor(private productsrvc: ProductService, private route: ActivatedRoute, 
    private syssvc: SystemService, private router: Router)
    // private vendor: Vendor,
    //  private vendorsrvc: VendorService,  
    { }

  ngOnInit() {
    // this.vendorsrvc.list()
    //   .subscribe(resp => {
    //     console.log(resp);
    //     this.vendors = resp;
    // });
      
    let id = this.route.snapshot.params.id;
      this.productsrvc.get(id)
        .subscribe(resp => {
          console.log(resp);
          this.product = resp;
        })
  }

}
