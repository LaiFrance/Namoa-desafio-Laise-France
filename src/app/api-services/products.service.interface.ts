export interface APIProductsRoot {
	products: APIProductsItem[];
	total: number;
	skip: number;
	limit: number;
}

interface APIProductsItem {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}
