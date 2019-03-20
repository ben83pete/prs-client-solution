import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

const url = "http://localhost:53058/api/";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  list(): Observable<Vendor[]>{
    return this.http.get(`${url}Vendors/`) as Observable<Vendor[]>;
  }
  get(id: string): Observable<Vendor>{
    return this.http.get(`${url}Vendors/${id}`) as Observable<any>;
  }
  create(vendor: Vendor): Observable<any>{
    return this.http.post(`${url}Vendors/`, vendor) as Observable<any>;
  }
  update(vendor: Vendor): Observable<any>{
    return this.http.put(`${url}Vendors/${vendor.id}`, vendor) as Observable<any>;
  }
  delete(vendor: Vendor): Observable<any>{
    return this.http.delete(`${url}Vendors/${vendor.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
