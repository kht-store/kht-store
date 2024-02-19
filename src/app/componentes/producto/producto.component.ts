import { Component, Input } from '@angular/core';
import { Producto } from '../../modelos/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  @Input() producto?: Producto;
  constructor(){
    
  }
}
