import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { Input ,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/_services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
@Input()
productItem ! :Product;
@Output()
itemAddedToCart:EventEmitter<Product>=new EventEmitter<Product>();
products:Product[]=[]

//productService=new ProductService()
  constructor(private productService:ProductService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   console.log('params',this.activatedRoute.snapshot.params['productId'])

    // this.deleteProduct()
  }
onItemAdded(){
 // console.log(this.productItem)
   // this.itemAddedToCart.emit(this.productItem)
 this.productService.addProductToCart(this.productItem)
}

removeItem(){
 // this.products=this.productService.getAllProducts();
 // this.products.splice(this.products.indexOf(this.productItem), 1);


}
// to delete product from backend
// deleteProduct(){
//   // + to make casting(id) to number
//   this.activatedRoute.params.subscribe(
//     (params)=>{
//       const id=params['productId'];
//       console.log(params['productId'],"ideeeeeeeeeeeee")
//           this.productService.deleteProduct(id).subscribe((res)=>{
//             console.log("deleted",res)
//         });
//     },
//   )

// }

}
