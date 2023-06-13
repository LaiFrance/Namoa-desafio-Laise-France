import { Component, OnInit, Input } from '@angular/core';
import { APIProductsRoot } from 'src/app/api-services/products.service.interface';

@Component({
	selector: 'products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
	@Input() products: APIProductsRoot;
	@Input() title: string;

	ngOnInit(): void {
		this.products.products.forEach((item) => {
			item.rating = Math.round(item.rating);
		});
	}
}
