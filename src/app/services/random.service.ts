import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  generateRandomForMinMax(min:number,max:number){
   return Math.round(Math.random() * (max - min) + min) 
  }
}
