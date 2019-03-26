import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  requests: Request[];
  

  constructor(private requestsrv: RequestService, private syssrv: SystemService) { }

  ngOnInit() 
  {
    this.requestsrv.list()
      .subscribe( resp => 
        {
          console.log(resp);
          this.requests = resp;
        });

    
  }

}