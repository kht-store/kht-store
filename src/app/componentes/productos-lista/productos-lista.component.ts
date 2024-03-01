import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { ProductosService } from '../../servicios/productos.service';
import { CartProducto } from '../../modelos/cart-producto';
import { CartService } from '../../servicios/cart.service';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.scss'
})
export class ProductosListaComponent {
  productos: Producto[] = [];
  cart: CartProducto[] = []

  constructor(private servProductos: ProductosService, private cartService: CartService) {

    this.servProductos.getProductos().subscribe(
      response => {
        this.productos = response;
      }
    )
  }

  add(producto:Producto){
    
    console.log("Add metodo")
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]')

    const existente = this.cart.find(elem => elem.id === producto?.id);

    if (existente) {
     existente.cantidad += 1;
    }else {
      this.cart.push({id: producto?.id as number,
        nombre: producto?.nombre as string,
        descripcion: producto?.descripcion as string,
        precio: producto?.precio as number,
        imagen: producto?.imagen as string,
        cantidad: 1
      });
      
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartService.actualizarCarrito(this.cart);

  }
}
