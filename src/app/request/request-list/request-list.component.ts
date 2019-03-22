import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { SystemService } from '../../system/system.service';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[];

  constructor(private requestsrvc: RequestService) { }

  ngOnInit() {
    this.requestsrvc.list()
      .subscribe(resp => {
        console.log(resp);
        this.requests = resp;
      })
  }

}
