import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product : Product;
  vendorId : number;
  vendors: Vendor[];
  
  save(): void{
    this.productsrvc.update(this.product)
    .subscribe( resp =>{
      console.log(resp);
      this.router.navigateByUrl('product/list');
    },
    err => {console.error(err);}
      );
  }


  constructor(private productsrvc: ProductService, private route: ActivatedRoute, 
    private syssvc: SystemService, private router: Router, private vendorsrvc: VendorService) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.productsrvc.get(id)
      .subscribe(resp => {
        console.log(resp);
        this.product = resp;
      })

     this.vendorsrvc.list()
       .subscribe(resp => {
         console.log(resp);
         this.vendors = resp;
     });
  }

}
