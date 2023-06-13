import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/product-service.service';
import { APIProductsRoot } from 'src/app/api-services/products.service.interface';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: APIProductsRoot[];
  @Input() title: string;

  smartphones: APIProductsRoot = {
    products: [],
    total: 0,
    skip: 0,
    limit: 0
  };
  
  laptops: APIProductsRoot = {
    products: [],
    total: 0,
    skip: 0,
    limit: 0
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductByType('smartphones').pipe(
      concatMap((data) => {
        this.smartphones = data;
        this.smartphones.products.forEach((item) => {
          item.rating = Math.round(item.rating);
        });

        return this.productService.getProductByType('laptops');
      })
    ).subscribe((data) => {
      this.laptops = data;
      this.laptops.products.forEach((item) => {
        item.rating = Math.round(item.rating);
      });
    });
  }
}
