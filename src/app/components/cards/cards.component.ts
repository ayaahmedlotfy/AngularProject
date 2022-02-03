import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/_services/product/product.service';
import { ActivatedRoute } from '@angular/router';
// import{MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
   number : number = 1;
   productArr: Product[]=[]
p:any;


@Output()
itemAdded: EventEmitter<Product> =new EventEmitter<Product>();


// productService=new ProductService();
  constructor(private productService: ProductService , private route:ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (res)=>{console.log(res)
      this.productArr=res.product});
    this.route.params.subscribe(params=>{
      if(params['searchTerm']){
        this.productService.getAllProducts().subscribe((res)=>{
          this.productArr= res.product.filter(prod=> prod.data[0]?.name.toLocaleLowerCase().includes(params['searchTerm'].toLowerCase()))}) ;
      console.log(this.productArr,"searched")
      }
      else if(params['categoryId']){

       this.productService.getAllProducts().subscribe((res)=>{
        console.log(res.product,'my proooooddddddddduuuuuuctsssss')

        this.productArr=res.product.filter(prod=> prod.categoryId == params['categoryId']) });
      console.log(this.productArr)
      }
       //else{ this.productArr=this.productService.getAllProducts()}
    })



  }
  // onItemAddedToCart(product :Product){
  //    this.itemAdded.emit(product)
  //   console.log("onItemAddedToCart")
  // }

}
