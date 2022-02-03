import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product/product.service';
import { Product } from 'src/app/_models/product.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentTypeService } from 'src/app/_services/product/payment-type.service';
import { PaymentType } from 'src/app/_models/Payment-Type.model';
import { Category } from 'src/app/_models/category.model';
import { CategoryService } from 'src/app/_services/product/category.service';
import { Tag } from 'src/app/_models/tags.model';
import { TagService } from 'src/app/_services/product/tag.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  paymentTypes:PaymentType[]=[]
  categoryArray:Category[]=[]
  tagArray!:Tag[]
  product={} as Product
  editMode = false;
  products:Product[]=[]


  constructor(private productService:ProductService , private router :Router,private paymentTypeService :PaymentTypeService , private categoryService :CategoryService ,private tagService :TagService , private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    console.log('params',this.activatedRoute.snapshot.params)
    console.log('url',this.activatedRoute.snapshot.url)
    if(this.activatedRoute.snapshot.url[0].path == 'edit'){
     this.editMode = true;
    }
    if(this.editMode)
    {
    //  this.getProductById();
    }

    this.getAllProductTypes()
    this.getAllCategories()
    this.getAllTags()
  }
// getProductById(){
//   // + to make casting(id) to number
//   const id=+this.activatedRoute.snapshot.params['productId'];
//   this.product=this.productService.getProductById(id)!;
//   console.log(this.product)
// }



  getAllProductTypes(){
    this.paymentTypes=this.paymentTypeService.getAllPaymentTypes()
  }
  getAllCategories(){
    this.categoryService.getAllCategories().subscribe((res)=>{
      console.log(res,"categoryyyyyyyyy")
     this.categoryArray=res
    });


  }

  getAllTags(){
    this.tagArray=this.tagService.getAllTags()
  }

  onCheckBoxChange(index:number){
    //flag to handle if remove check does not add this payment to array
    var flag:number=0;
    // lw mwgoda hatha w zawd 3leha elly akhtarto
    if(this.product.paymentTypes){
      console.log(this.product.paymentTypes)
  //    console.log(this.paymentTypes[index])

  for(let i =0 ; i<this.product.paymentTypes.length;i++){
if(this.paymentTypes[index] ==this.product.paymentTypes[i] ){flag=1;
  //to remove payment type from array when click on it double
  this.product.paymentTypes.splice(this.product.paymentTypes.indexOf(this.paymentTypes[index]), 1);}
   }
  if(flag==0){
this.product.paymentTypes=[...this.product.paymentTypes,this.paymentTypes[index]]

  }}
    else{this.product.paymentTypes=[this.paymentTypes[index]]}
//console.log(this.paymentTypes[index]);
  }

  onAddProduct(form: any){
    console.log(form);
  //  const product:Product=form.value
  //   this.productService.addProduct(product)
  //  this.router.navigateByUrl('home')

  }

  delete(tag:Tag){
    this.tagArray.splice(this.tagArray.indexOf(tag), 1);

  }
}
