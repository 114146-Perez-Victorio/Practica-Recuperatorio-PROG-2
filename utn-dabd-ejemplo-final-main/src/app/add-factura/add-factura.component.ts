import { Component } from "@angular/core";
import { RestService } from "../rest.service";
import { Factura } from "../factura";
import { NgForm } from "@angular/forms";
import { FacturacionService } from "../facturacion.service";

@Component({
  selector: "ef-add-factura",
  templateUrl: "./add-factura.component.html",
  styleUrls: ["./add-factura.component.css"],
})
export class AddFacturaComponent {
  factura: Factura = new Factura();
  constructor(private rest: RestService,private facturacion:FacturacionService) {}



  guardarFactura(form: NgForm) {
    if (form.valid) {
      this.rest.postFactura(this.factura).subscribe(
        (response) => {
          console.log(response);
          console.log("factura guardada");
          /* Aca abajo es para la comunicacion entre la factura y el detalle */

          /* Asigna el id de la factura creada para la comunicacion entre el detalle y la factura */
          this.factura.id = response.id

          /* Enviamos la factura a traves del servicio para que se conecten */
          this.facturacion.enviarFacturaCreada(this.factura)

        },
        (error) => {
          console.log(error);
        }
      );
    } else console.log("Faltan datos por cargar en el formulario");
    
  } 
}
