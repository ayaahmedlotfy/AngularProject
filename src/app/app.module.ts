import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyheaderComponent } from './components/myheader/myheader.component';
import { SideComponent } from './components/side/side.component';
import { CardsComponent } from './components/cards/cards.component';
import { ItemsComponent } from './components/items/items.component';
import { TestComponent } from './components/test/test.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
// import {RatingModule} from 'ng-starrating';
import { FormsModule } from '@angular/forms';
//import { ProductService } from './_services/product/product.service';
// import { Product } from './_models/product.model';

// import { NgModel } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './shared/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    SideComponent,
    CardsComponent,
    ItemsComponent,
    TestComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    NotFoundComponent,
    LoginComponent
    // Product

  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    // RatingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
