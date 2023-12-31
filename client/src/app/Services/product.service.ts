import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:4000/api/products/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.url}${id}`);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.url, product);
  }

  getProductById(id: string | null): Observable<any> {
    return this.http.get(`${this.url}${id}`)
  }

  editProduct(id: string | null, product: Product): Observable<any> {
    return this.http.put(`${this.url}${id}`, product)
  }
}
