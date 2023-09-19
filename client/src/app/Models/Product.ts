export class Product {
    _id?: number;
    product: string;
    category: string;
    location: string;
    price: number;

    constructor(product: string, category: string, location: string, price: number) {
        this.product = product;
        this.category = category;
        this.location = location;
        this.price = price;
    }
}