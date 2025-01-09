import { Component, Input } from '@angular/core';
import {Product} from '../model/Product';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-cartview',
  standalone: true,
  imports: [CommonModule,CartComponent],
  templateUrl: './cartview.component.html',
  styleUrl: './cartview.component.css'
})

export class CartviewComponent {
 @Input('productList')
 productList:Array<Product>=[];
}
