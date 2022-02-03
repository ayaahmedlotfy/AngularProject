import { Category } from "./category.model";
//import{AllCategoryResponse} from "./category.model";
import { PaymentType } from "./Payment-Type.model";
import { ProductLang } from "./product-lang.model";
import { Tag } from "./tags.model";
export interface Product{
  id?:number;
  _id:string;
  data:ProductLang[];
  price:number;
  discount?: number;
  imageUrl?:string;
  numOfItem: number;
  __v: number;
   category:Category;
   categoryId:string;
  //category:AllCategoryResponse;
  tags:Tag[];
  paymentTypes:PaymentType[]
}
export interface AllProductResponse{
  product:Product[],
  numberOfProducts:number
}
