import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product={} as Product;
relatedProducts!:Product[];
products:Product[]=[]

  constructor(private activatedRoute:ActivatedRoute , private productService:ProductService) { }

  ngOnInit(): void {
   console.log('params',this.activatedRoute.snapshot.params['productId'])
 this.getProductById();
this.getRelatedProducts();
  }

  getProductById(){
    // + to make casting(id) to number
    this.activatedRoute.params.subscribe(
      (params)=>{
        const id=params['productId'];
            this.productService.getAllProducts().subscribe((res)=>{
              console.log(id,"theid");
              console.log( res.product,"resproductt")
            this.products=  res.product.filter(prod=> prod._id == params['productId'])
        console.log(this.products,"mydetaaaaaaails")

          });
      },
    )

  }
  getRelatedProducts(){
 //  this.relatedProducts= this.productService.getAllProducts().slice(0,4);
 this.productService.getAllProducts().subscribe((res)=>{
this.relatedProducts=  res.product.slice(0,4)


});

  }

  }
