import { inject, Injectable } from '@angular/core';
import { IProduct } from '../data/product.interface';
import { RandomService } from './random.service';
import { DESCRIPTIONS, PRICES, PRODUCTS_NAME } from '../mock-constants/mock-constans';


@Injectable({
  providedIn: 'root'
})
export class MockProductService {

  constructor (private randomService:RandomService) { }
  generateMockProduct():IProduct[]{
    return Array.from({length:20},(_, i)=> {
      return {
        id:i + 1,
        name: PRODUCTS_NAME[this.randomService.generateRandomForMinMax(0, PRODUCTS_NAME.length - 1)],
        description: DESCRIPTIONS[this.randomService.generateRandomForMinMax(0,DESCRIPTIONS.length - 1)],
        price: PRICES[this.randomService.generateRandomForMinMax(0,PRICES.length - 1)],
        imageUrl: '',
        isFavorite:false
      }
    })
    
  }

}

     