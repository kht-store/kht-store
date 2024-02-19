import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.scss'
})
export class ProductosListaComponent {
  productos: Producto[] = [];

  constructor(private servProductos: ProductosService) {

    this.servProductos.getProductos().subscribe(
      response => {
        this.productos = response;
      }
    )
  }
}
