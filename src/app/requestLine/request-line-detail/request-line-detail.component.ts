import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../requestLine.class';
import { RequestLineService } from '../request-line.service';
import { Product } from '../../product/product.class';
import { Vendor } from '../../vendor/vendor.class';
import { SystemService } from '../../system/system.service';
import { Request } from '../../request//request.class';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../../user/user.class';
import { RequestService } from '../../request/request.service';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-request-line-detail',
  templateUrl: './request-line-detail.component.html',
  styleUrls: ['./request-line-detail.component.css']
})
export class RequestLineDetailComponent implements OnInit {

  requestLines: RequestLine;
  request: Request;
  products: Product[];
  vendors: Vendor[];
  rid: number;


  add(): void{
    this.request.id = this.rid;
    this.requestLinesrvc.update(this.requestLines)
    .subscribe( resp =>{
      console.log(resp);
    },
    err => {console.error(err);}
      )};

  constructor(private syssvc: SystemService, private productsrvc: ProductService,
    private route: ActivatedRoute, private requestsrvc: RequestService,
     private requestLinesrvc: RequestLineService, private router: Router, ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestsrvc.get(id) 
    .subscribe(resp =>{
      console.log(resp);
      this.request = resp;
      this.rid = id;
    });
    
    this.productsrvc.list()
      .subscribe(resp => {
        console.log(resp);
        this.products = resp;
    });
  }
}
