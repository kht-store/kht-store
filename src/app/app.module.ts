import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModprimengModule } from './modprimeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Footer, Header, MessageService } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './componentes/plantillas/footer/footer.component';
import { HeaderComponent } from './componentes/plantillas/header/header.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ProductosModule } from './modulos/productos/productos.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModprimengModule,
    HttpClientModule,
    ToolbarModule,
    SidebarModule,
    BrowserAnimationsModule,
    ProductosModule,



  ],
  providers: [
    MessageService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }