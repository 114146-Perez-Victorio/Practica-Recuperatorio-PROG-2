import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarFacturaComponent } from './listar-factura/listar-factura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFacturaComponent } from './add-factura/add-factura.component';
import { AddDetalleFacturaComponent } from './add-detalle-factura/add-detalle-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarFacturaComponent,
    AddFacturaComponent,
    AddDetalleFacturaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
