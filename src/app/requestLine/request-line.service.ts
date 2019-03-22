import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLine } from './requestLine.class';
import { Request } from '../request/request.class';

const url = "http://localhost:53058/api/";

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {

  // request: Request[];

  list(id: number): Observable<RequestLine[]>{
    return this.http.get(`${url}request_Lines/list/${id}`) as Observable<RequestLine[]>;
  }
  get(id: string): Observable<any>{
    return this.http.get(`${url}request_lines/${id}`) as Observable<any>;
  }
  create(requestLine: RequestLine): Observable<any>{
    return this.http.post(`${url}request_lines/`, requestLine) as Observable<any>;
  }
  update(requestLine: RequestLine): Observable<any>{
    return this.http.put(`${url}request_lines/${requestLine.id}`, requestLine) as Observable<any>;
  }  
  delete(requestLine: RequestLine): Observable<any>{
    return this.http.delete(`${url}request_lines/${requestLine.id}`) as Observable<any>;
  }
  constructor(private http: HttpClient) { }
}
