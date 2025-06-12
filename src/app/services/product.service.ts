import { inject, Injectable } from '@angular/core';
import { MockProductService } from './mock-product.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  mockProducts:MockProductService = inject(MockProductService)

  getProducts(){
    console.log(this.mockProducts.generateMockProduct())
  }
}
