import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { Product } from '../product';
import { RegistrationService } from '../registration.service';
import{CartService} from '../cart.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product=new Product();
  msg:String;
  category=new Category();
    constructor(private service:RegistrationService,private router:Router,  private cartService: CartService) { }
  
    ngOnInit() {
    }
    Product()
    {
      this.service.addproduct(this.product).subscribe(
        data=>{console.log("Response Received")
        this.msg="Product Added Success"
      
      },
        error =>{ console.log("Exception occured")
    }
      )
  
    }
   
    
  
  }
  