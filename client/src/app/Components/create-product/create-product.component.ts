import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  productForm: FormGroup;
  title = 'Create Product';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _productService: ProductService, private aRoute: ActivatedRoute) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editProduct();
  }

  createProduct() {
    console.log(this.productForm);

    console.log(this.productForm.get('product')?.value);

    const PRODUCT: Product = {
      product: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      location: this.productForm.get('location')?.value,
      price: Number(this.productForm.get('price')?.value)
    }

    if (this.id !== null) {
      this._productService.editProduct(this.id, PRODUCT).subscribe(data => {
        this.toastr.info('The Product was updated successfully', 'Product updated!');
        this.router.navigate(['/']);
      })
    } else {
      console.log(PRODUCT);

      this._productService.createProduct(PRODUCT).subscribe(data => {
        this.toastr.success('The Product was created successfully', 'Product Created!');
        this.router.navigate(['/']);
      }, error => {
        console.error(error);
        this.productForm.reset();
      })
    }

   
  }

  editProduct() {
    if (this.id !== null) {
      this.title = 'Edit Product';
      this._productService.getProductById(this.id).subscribe(data => {
        this.productForm.setValue({
          product: data.product,
          category: data.category,
          location: data.location,
          price: data.price
        })
      })
    }
  }
}
