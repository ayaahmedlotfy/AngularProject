import { Component } from '@angular/core';
 import { Product } from './_models/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';
 // addedProduct:Product[]=[];
//   onItemAdded(product:Product){
//      var found =  this.addedProduct.find(function (element) {
//         return element.id == product.id ;
//     });

//     if(!found){ this.addedProduct.push(product);
//       product.numOfItem++}
// else{


//   for(var i =0; i<this.addedProduct.length;i++){

//     if(  this.addedProduct[i].id==product.id )
//   //  this.num++

//     product.numOfItem++
//     }
//   }
// }


}
