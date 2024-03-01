import { Component, OnInit } from '@angular/core';
import { CartProducto } from '../../modelos/cart-producto';
import { ProductosListaComponent } from '../productos-lista/productos-lista.component';
import { CartService } from '../../servicios/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  carrito: any[]=[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void{
    this.cartService.carrito$.subscribe((nuevoCarrito) => {
      this.carrito = nuevoCarrito
    });
  }
}
