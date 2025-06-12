import { inject, Injectable } from '@angular/core';
import { MockProductService } from './mock-product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  mockProduct:MockProductService = inject(MockProductService)
}
