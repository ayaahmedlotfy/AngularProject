import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product/product.service';
@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.scss']
})
export class MyheaderComponent implements OnInit {

addedProduct :Product[]=[];
dropdownOpened= false

onItemAdded(product:Product){
  console.log(product)
  this.addedProduct.push(product);
}
// productService= new ProductService()
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
this.productService.cartHasBeenChanged.subscribe(
  (res)=>{this.addedProduct=res},
  (err)=>{},
  ()=>{}


)

  }
  // deleted item from cart
  delete(myproduct:Product){

   this.addedProduct.splice(this.addedProduct.indexOf(myproduct), 1);
  //  make it with 0 because when add it to cart start counter again from 0
   myproduct.__v=0
           }
}
