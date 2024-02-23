import { Component, Input } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { CartProducto } from '../../modelos/cart-producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  @Input() producto?: Producto;
  cart: CartProducto[] = []

  constructor(){
    
  }
  get nombre(){
    return this.producto?.nombre
  }
  add(){
    console.log("Estoy comprando " + this.producto?.nombre)

    this.cart = JSON.parse(localStorage.getItem('cart') || '[]')

    const existente = this.cart.find(elem => elem.id === this.producto?.id);

    if (existente) {
     existente.cantidad += 1;
    }else {
      this.cart.push({id: this.producto?.id as number,
        nombre: this.producto?.nombre as string,
        descripcion: this.producto?.descripcion as string,
        precio: this.producto?.precio as number,
        imagen: this.producto?.imagen as string,
        cantidad: 1
      });
      
    }
    localStorage.setItem('cart', JSON.stringify(this.cart))

    
  }
}
