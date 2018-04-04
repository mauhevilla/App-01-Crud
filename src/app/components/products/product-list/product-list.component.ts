import { Component, OnInit } from '@angular/core';
// traer la clase o modelo 
import{ Product} from '../../../models/product';

// traer el servicio
import { ProductService} from '../../../services/product.service';

// impor toaster para memsajes
import { ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[];

  constructor(private productService : ProductService,
              private toast : ToastrService) {  
  }

  ngOnInit() {
    return this.productService.getProducts()
    .snapshotChanges()
    .subscribe(item => {
      this.productList=[];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"]=element.key;
        this.productList.push(x as Product);
      });
    });
  }

  onEdit(product : Product){
    this.productService.selectedProduct = Object.assign({},product) ;
  }

  onDelete($key:string){
    if(confirm('Esta seguro de querer Eliminarlo ?')){
      this.productService.deletProduct($key);
      this.toast.success('Successfull Operation','Producto Elimnado ...');
    }
    
  }
}
