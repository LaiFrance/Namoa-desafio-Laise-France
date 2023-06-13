import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIProductsRoot } from './api-services/products.service.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(tipoDeProduto: string) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'https://dummyjson.com/products/category';

  constructor(private http: HttpClient) { }

  getProductByType(productType: string): Observable<APIProductsRoot> {
    return this.http.get<APIProductsRoot>(`${this.baseUrl}/${productType}`);
  }
}
