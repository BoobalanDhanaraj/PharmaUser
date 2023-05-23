import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Product } from '../models/products-dashboard.model';
import { OrderDetail } from '../models/order-detail';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product>('https://localhost:7027/api/Products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getProductDetails(id: any) {
    return this.http.get('https://localhost:7027/api/Products/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  AddToCart(data: any) {
    return this.http
      .put<any>('https://localhost:7027/api/Methods/' + data.productId, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
