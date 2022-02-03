import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Category } from 'src/app/_models/category.model';
import { CategoryService } from 'src/app/_services/product/category.service';
@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
searchTerm:string="";
categoryList:Category[]=[]
  constructor(private route:ActivatedRoute ,private router:Router ,private category:CategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
    this.searchTerm=params['searchTerm'];
    })
  //  this.categoryList=this.category.getAllCategories();
  this.category.getAllCategories().subscribe((res)=>{
    console.log(res,"categoryyyyyyyyy")
   this.categoryList=res
  });
  }

  search():void{this.router.navigateByUrl('/product/search/'+this.searchTerm)}

}
