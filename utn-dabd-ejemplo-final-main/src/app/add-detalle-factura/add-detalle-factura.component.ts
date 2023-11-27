import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Factura } from '../factura';
import { FacturacionService } from '../facturacion.service';

@Component({
  selector: 'ef-add-detalle-factura',
  templateUrl: './add-detalle-factura.component.html',
  styleUrls: ['./add-detalle-factura.component.css']
})
export class AddDetalleFacturaComponent implements OnInit{
  formDetalle!:FormGroup;
  facturaCreada!:Factura


  constructor(private rest:RestService, private fb:FormBuilder, private facturacion:FacturacionService){
    this.formDetalle = this.fb.group({
      productName: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
    })
  }

  guardarDetalle(){
    if(this.facturaCreada && this.facturaCreada.id){
      let nuevoDetalle = {
        id:"",
        productName: this.formDetalle.value.productName,
        amount: this.formDetalle.value.amount,
        price: this.formDetalle.value.price,
      };

      this.facturaCreada.details.push(nuevoDetalle)

      this.rest.agregarDetalle(this.facturaCreada).subscribe(
        (response) =>{
          console.log("Factura actualizada", response);
        },
        (error) =>{
          console.log(error);
        }
      );
      this.formDetalle.reset()
    } else {
      console.log("No se recibio la informacion valida");     
    }
  }

  ngOnInit(): void {
      this.facturacion.facturaCreada$.subscribe( (factura) =>{
        this.facturaCreada = factura
        console.log("Factura cargada",factura);
      })
  }

}
