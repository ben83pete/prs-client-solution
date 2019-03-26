import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { RequestLineService } from '../../requestLine/request-line.service'; 
import { RequestLine } from '../../requestLine/requestLine.class';


@Component({
  selector: 'app-review-lines',
  templateUrl: './review-lines.component.html',
  styleUrls: ['./review-lines.component.css']
})

export class ReviewLinesComponent implements OnInit {

  request: Request;
  requestLine: RequestLine;
  
 
  approve(request: Request): void
  {
    this.requestsrv.approve(this.request)
      .subscribe
      (
        resp => 
        {
          console.log("Request Approval Successful" , resp);
          this.router.navigateByUrl("/request/review");
        },
        err => 
        {
          console.error("Request Approval Failed", err);
        }
      );
  }
  reject(request: Request): void
  {
    this.requestsrv.reject(this.request)
      .subscribe
      (
        resp => 
        {
          console.log("Request Rejection Successful" , resp);
          this.router.navigateByUrl("/request/review");
        },
        err => 
        {
          console.error("Request Rejection Failed", err);
        }
      );
  }


  constructor
  ( private requestsrv: RequestService, private syssrv: SystemService,
    private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() 
  {let id = this.route.snapshot.params.id;

    this.requestsrv.get(id)
      .subscribe(
        resp => {
          console.log(resp)
          this.request = resp;
        });
  }
  }