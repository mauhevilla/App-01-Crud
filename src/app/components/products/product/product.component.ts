import { Component, OnInit } from '@angular/core';
// import Service
import { ProductService} from '../../../services/product.service';
// impor ngForm
import { NgForm} from '@angular/forms';
// import la clases product
import { Product } from '../../../models/product';
// impor toaster 
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
             private toast : ToastrService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm : NgForm){
    if(productForm.value.$key == null){
      this.productService.insertProduct(productForm.value)  ;
      this.toast.success('Operacion Agregar','Producto Actualizado');
    }     
    else{
      this.productService.updateProduct(productForm.value);
      this.toast.success('Operacion Modificar','Producto Actualizado');
    }     
    
    this.resetForm(productForm);
    
  }

  resetForm(productForm ?: NgForm){
      if(productForm != null)
      productForm.reset();
      this.productService.selectedProduct=new Product();
  }
  
 

}
