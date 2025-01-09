import { Component } from '@angular/core';
import { CartviewComponent } from '../cartview/cartview.component';
import {Product} from '../model/Product';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CartviewComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productList:Array<Product> = [{
    id:1,
    name:'realme c3',
    price:15000
  },
  {
    id:2,
    name:'redme c65',
    price:12000
  },
  {
    id:3,
    name:'iphone',
    price:90000
  }
]

addProduct(id:string, name:string,price:string){ 
  let product = new Product(parseInt(id), name,parseInt(price));
  this.productList.push(product);
  this.productList.forEach(product => console.log(product));
  
}

deleteproduct(id:number){
  confirm('Are you sure you want to delete this task?');
  const index = this.productList.findIndex(product => product.id == id);
  if(index !== -1){
    this.productList.splice(index,1);
  }
}


}
