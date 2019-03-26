import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';

const url = "http://localhost:53058/api/";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  list(): Observable<Request[]>{
    return this.http.get(`${url}requests/`) as Observable<Request[]>; 
  }

  get(id:string): Observable<Request>{
    return this.http.get(`${url}requests/` + id ) as Observable<Request>; 
  }

  create(request: Request):Observable<any>{
    return this.http.post(`${url}requests/`, request) as Observable<any>;
  }

  update(request: Request):Observable<any>{
    return this.http.put(`${url}requests/${request.id}`, request) as Observable<any>;
  }
  
  delete(request: Request):Observable<any>{
    return this.http.delete(`${url}requests/${request.id}`) as Observable<any>;
  }

  
  getReview(): Observable<Request[]>
  {
    return this.http.get(`${url}requests/review`) as Observable<Request[]>;
  }
  
  review(request: Request): Observable<Request>
  {
    return this.http.put(`${url}requests/review/${request.id}`, request) as Observable<Request>;
  }
  
  approve(request: Request): Observable<Request>
  {
    return this.http.put(`${url}requests/approved/${request.id}`, request) as Observable<Request>; 
  }
  
  reject(request: Request): Observable<Request>
  {
    return this.http.put(`${url}requests/rejected/${request.id}`, request) as Observable<Request>; 
  }

  constructor(private http: HttpClient) { }
}