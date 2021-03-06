import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];

  constructor(private vendorsrvc: VendorService, private syssvc: SystemService) { }

  ngOnInit() {
    this.vendorsrvc.list()
    .subscribe(resp =>{
      console.log(resp);
      this.vendors = resp;
    })
  }

}
