import { Component, OnInit } from '@angular/core';
import { Vendor } from "../vendor.class";
import { VendorService } from "../vendor.service";
import { Router, ActivatedRoute } from "@angular/router";
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor;


  save(): void{
    this.vendorsrvc.update(this.vendor)
    .subscribe(resp=> {
      console.log(resp)
      this.router.navigateByUrl('vendor/list');
    },
    err =>{console.error('Save Error', err);})

  }

  constructor(private vendorsrvc: VendorService, private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
      this.vendorsrvc.get(id)
        .subscribe(resp =>{
        console.log(resp);
        this.vendor = resp;
    },
    err => {
      console.error(err)
    }) 
  }

}
