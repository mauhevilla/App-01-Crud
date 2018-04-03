import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//importar el modulo de form
import { FormsModule }   from '@angular/forms';

//firebase
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';

// componentes
import { ProductsComponent} from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';

//servicios
import { ProductService} from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,   
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
