import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../requestLine.class';
import { RequestLineService } from '../request-line.service';
import { Product } from '../../product/product.class';
import { SystemService } from '../../system/system.service';
import { Request } from '../../request//request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../request/request.service';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  requestLine: RequestLine = new RequestLine(0,0,1);
  request: Request;
  products: Product[];
  productId: number;
  rqId: number;


  add(): void{
    this.requestLine.requestId = this.rqId;
    console.log(this.requestLine)

    this.requestLinesrvc.create(this.requestLine)
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
      this.rqId = id;
    });
    
    this.productsrvc.list()
      .subscribe(resp => {
        console.log(resp);
        this.products = resp;
    });
  }
}
