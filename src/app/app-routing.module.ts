import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
const routes: Routes = [
  {path:'', component: CardsComponent},
  {path:'home',redirectTo:'', pathMatch:'full'},
  {path:'product',children:[
    {path:'listing',redirectTo:'', pathMatch:'full'},
    {path:'search/:searchTerm',component: CardsComponent},
    {path:'category/:categoryId',component: CardsComponent},
    {path:'details/:productId', component:ProductDetailsComponent},
    {path:'add', component:ProductFormComponent},
    {path:'edit/:productId', component:ProductFormComponent},
    {path:':productId', component:CardsComponent},

  ]},
  {path:'login', component:LoginComponent},
  {path:'**', component:NotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
