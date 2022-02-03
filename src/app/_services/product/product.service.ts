import { EventEmitter } from '@angular/core';
import { AllProductResponse, Product } from 'src/app/_models/product.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService{
  numOfItem:number=0
   productArr: Product[]=[
  //   { id:1 ,data:[{name:"Photocamera",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/300",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:2 ,data:[{name:"cola",description:"desc",lang:{name:"eng"}}],price:325,imageUrl:"https://picsum.photos/200/301",numOfItem:0,category:{name:"food"},tags:[{id:2, name:"food"}],paymentTypes:[{name:"COD"}]},
  //   { id:3 ,data:[{name:"laptop",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/302",numOfItem:0,category:{id:1,name:"Arts&Crafts"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:4 ,data:[{name:"pc",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/340",numOfItem:0,category:{id:1,name:"Arts&Crafts"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:5 ,data:[{name:"xbox",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/350",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:6 ,data:[{name:"vr",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/360",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:7 ,data:[{name:"iphone",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/370",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:8 ,data:[{name:"TV",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/380",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:9 ,data:[{name:"TV",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/380",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:10 ,data:[{name:"TV",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/380",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:11 ,data:[{name:"TV",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/380",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:12 ,data:[{name:"TV",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/380",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:13 ,data:[{name:"TV",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/380",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:14 ,data:[{name:"TV",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/380",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},
  //   { id:15 ,data:[{name:"TV",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/380",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]},

  //   { id:16 ,data:[{name:"TV",description:"desc",lang:{name:"eng"}}],price:325,discount:26,imageUrl:"https://picsum.photos/200/380",numOfItem:0,category:{id:5,name:"Electronics"},tags:[{name:"electronics"}],paymentTypes:[{name:"COD"}]}

   ]
myproducts:AllProductResponse[]=[]
  cartHasBeenChanged : EventEmitter<Product[]>=new EventEmitter<Product[]>();
  private cartArray:Product[]=[]


  constructor(private httpClient: HttpClient){}

  getAllProducts():Observable<AllProductResponse> {
    // return this.productArr
    const headers=new HttpHeaders(
      {authorization: sessionStorage.getItem('token')!}
    )
    return this.httpClient.get<AllProductResponse>(environment.baseUrl + 'product',{headers: headers});
  }
  getProductById(id: number){
    return this.productArr.find(product => product.id === id);
  }

  //to add product in form
  addProduct(product:Product){ this.productArr.push(product)}

  updateProduct(){}

  // to delete prod from backend
  // deleteProduct(myId:string){
  //   return this.httpClient.delete(environment.baseUrl + 'product/'+myId);
  // }

 addProductToCart(product:Product){
    var found =  this.cartArray.find(function (element) {
      return element._id == product._id ;
  });

  if(!found){ this.cartArray.push(product);
    this.cartHasBeenChanged.emit(this.cartArray)
    product.__v++}
else{
for(var i =0; i<this.cartArray.length;i++){
  if(  this.cartArray[i]._id==product._id )
  product.__v++
  }
}
  }
}
