import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  constructor(private _productService: ProductService, private toastr: ToastrService) { }
  listProducts: Product[] = [];
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      console.log(data);
      this.listProducts = data;
    }, error => {
      console.error(error)
    });
  }

  deleteProduct(id: any) {
    this._productService.deleteProduct(id).subscribe(res => { 
      this.toastr.error(`The ${id} product was deleted`, 'Product deleted')
    }, error => {
      console.error(error)
    });
  }
}
