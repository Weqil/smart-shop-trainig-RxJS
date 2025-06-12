import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smart-shop-trainig-RxJS';
  productService:ProductService = inject(ProductService)
  constructor(){
    console.log(this.productService.getProducts())
  }
}
