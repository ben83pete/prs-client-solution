import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';


@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;
  verify: boolean = false;

  verifyDelete(): void{
    this.verify = true;
  }

  delete(): void{
    this.vendorsrvc.delete(this.vendor)
    .subscribe(resp => {
      console.log('Vendor Deleted', resp)
      this.router.navigateByUrl("/vendor/list")
    },
    err => {
      console.error('Vendor Delete Error', err);
    })
  }

  constructor(private route: ActivatedRoute, private vendorsrvc: VendorService,
    private router: Router, private syssvc: SystemService) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
      this.vendorsrvc.get(id)
        .subscribe(resp =>{
          console.log(resp);
          this.vendor = resp;
        });
  }
}
