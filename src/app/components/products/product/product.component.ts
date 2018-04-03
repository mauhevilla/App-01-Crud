import { Component, OnInit } from '@angular/core';
// import Service
import { ProductService} from '../../../services/product.service';
// impor ngForm
import { NgForm} from '@angular/forms';
// import la clases product
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm : NgForm){
    this.productService.insertProduct(productForm.value);
    this.resetForm(productForm);
  }
  resetForm(productForm ?: NgForm){
      if(productForm != null)
      productForm.reset();
      this.productService.selectedProduct=new Product();
  }
  
 

}
