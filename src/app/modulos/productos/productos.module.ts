import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosListaComponent } from '../../componentes/productos-lista/productos-lista.component';
import { ProductoComponent } from '../../componentes/producto/producto.component';
import { ModprimengModule } from '../../modprimeng.module';
import { CartComponent } from '../../componentes/cart/cart.component';
import { DialogService } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    ProductosListaComponent,
    ProductoComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ModprimengModule,
    
  ],
  exports: [
    ProductoComponent,
    ProductosListaComponent
  ]
})
export class ProductosModule {}

