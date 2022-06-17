import { IProduct } from './../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}
  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}`);
  }
  addProduct(product: any): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}`, product);
  }
  removeProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`);
  }
  updateProduct(product: any): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/${product.id}`, product);
  }
}
