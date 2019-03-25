import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../requestLine.class';
import { RequestLineService } from '../request-line.service';
import { Product } from '../../product/product.class';
import { Vendor } from '../../vendor/vendor.class';
import { SystemService } from '../../system/system.service';
import { Request } from '../../request//request.class';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user/user.class';
import { RequestService } from '../../request/request.service';



@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit {

  requestLines: RequestLine;
  requests: Request;
  user: User;
  product: Product[];
  vendor: Vendor[];
  

  constructor( private syssvc: SystemService, private route: ActivatedRoute,
     private requestsrvc: RequestService, ) { }

  ngOnInit() {
    let rid = this.route.snapshot.params.id;
    this.requestsrvc.get(rid) 
    .subscribe(resp =>{
      console.log(resp);
      this.requests = resp;
    }); 
    
 }
}
