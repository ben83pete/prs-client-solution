import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../requestLine.class';
import { RequestLineService } from '../request-line.service';
import { Product } from '../../product/product.class';
import { SystemService } from '../../system/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product/product.service';
import { RequestService } from '../../request/request.service';

@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {

  requestLine: RequestLine;
  products: Product[];
  productId: number;
  rlId: number;

  edit(): void{
    this.requestLine.id = this.rlId;
    this.requestLinesrvc.update(this.requestLine)
    .subscribe( resp =>{
      console.log(resp);
      this.router.navigateByUrl(`/request_lines/list/${this.requestLine.requestId}`)
    },

    err => {console.error(err);}
      )};

  delete(): void{
    this.requestLinesrvc.delete(this.requestLine)
    .subscribe( resp => {
      console.log("Product Deleted", resp);
      this.router.navigateByUrl(`/request_lines/list/${this.requestLine.requestId}`)
    })
  }


  constructor(private syssvc: SystemService, private productsrvc: ProductService,
    private route: ActivatedRoute, private requestsrvc: RequestService,
     private requestLinesrvc: RequestLineService, private router: Router, ) { }


  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.requestLinesrvc.get(id)
      .subscribe(resp => {
        console.log(resp);
        this.requestLine = resp;
        this.rlId = id;
      })
       
    
    this.productsrvc.list()
      .subscribe(resp => {
        console.log(resp);
        this.products = resp;
    });
  }
}