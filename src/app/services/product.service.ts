import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Product} from '../models/product';

@Injectable()
export class ProductService {
     producList:AngularFireList<any>;
     selectedProduct : Product = new Product();

  constructor(private firebase:AngularFireDatabase ) { 

  }

  getProducts(){
    return this.producList=this.firebase.list('product');
  }


  insertProduct(product :Product){
    this.producList.push({
      name :product.name,
      category:product.category,
      location:product.location,
      price:product.price
    });
  }
  updateProduct(product :Product){
    this.producList.update(product.$keys,{
      name :product.name,
      category:product.category,
      location:product.location,
      price:product.price
    });   
  }
  deletProduct($key:string){
    this.producList.remove($key);
  }
}
