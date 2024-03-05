import { Component, OnInit } from '@angular/core';
import { CartProducto } from '../../modelos/cart-producto';
import { ProductosListaComponent } from '../productos-lista/productos-lista.component';
import { CartService } from '../../servicios/cart.service';

interface Colum {
  field: string;
  header: string;
}

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

  calcularTotal(): number{
    return this.carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }
}
