import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product-service.service';
import { APIProductsRoot } from 'src/app/api-services/products.service.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  smartphones: APIProductsRoot;
  laptops: APIProductsRoot;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductByType('smartphones').subscribe((data) => {
      this.smartphones = data;
      this.smartphones.products.forEach((item) => {
        item.rating = Math.round(item.rating);
      });
    });

    this.productService.getProductByType('laptops').subscribe((data) => {
      this.laptops = data;
      this.laptops.products.forEach((item) => {
        item.rating = Math.round(item.rating);
      });
    });
  }
}
