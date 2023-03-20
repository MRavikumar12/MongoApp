import { Component, OnInit } from '@angular/core';
import { Product } from './Models/product';
import { ProductService } from './Services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MongoApp';

  data:any;
  
  prod:Product={
    id:"",
    name:"",
    Price:"",
    description:"",
    rating:"",
    category:""
  };

  currentData:Product={
    id:"",
    name:"",
    Price:"",
    description:"",
    rating:"",
    category:""
  }

  updatedata:any;

  constructor(private Service:ProductService){}
  ngOnInit(): void {
    this.GetAllProducts();
  }

  GetAllProducts()
  {

    this.Service.GetProducts().subscribe(response=>
      {
        console.log(response);
        this.data=response; 
        console.log(response);
      }
    )
  }

  AddNewProduct()
  {
    this.Service.AddNewProducts(this.prod).subscribe(response=>
      {
        console.log(response);
        this.GetAllProducts();
      })
  }

  Delete(id:string)
  {
    this.Service.DeleteProduct(id).subscribe(response=>
      {
        this.GetAllProducts();
      })
  }

  // updateid:any;
  // Update()
  // {
  //   this.prod.id=this.updateid;
  //   this.Service.UpdateProduct(this.prod).subscribe(response=>
  //     {
  //       this.GetAllProducts();
  //     })
  // }

  Update()
  {
    this.Service.UpdateProduct(this.currentData).subscribe((resp)=>
    {
      console.log(resp);
      this.GetAllProducts();
    })
  }

  // onUpdate(id:string){

  //   this.updateid = id;
  //   console.log(id);

  // }

  GetCurrent(data:Product)
  {
    this.Service.GetProductById(data.id).subscribe((resp)=>
    {
      console.log(resp);
      this.updatedata=resp;
      this.currentData=this.updatedata;
    })
  }

}
