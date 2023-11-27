import { Component, OnInit } from "@angular/core";
import { Detalle, Factura } from "../factura";
import { RestService } from "../rest.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ListFacturacionService } from "../list-facturacion.service";

@Component({
  selector: "ef-listar-factura",
  templateUrl: "./listar-factura.component.html",
  styleUrls: ["./listar-factura.component.css"],
})
export class ListarFacturaComponent implements OnInit{

  arrayFactura: Factura[] = [];
  arrayDetalle:Detalle[] = [];
  formDetalle!: FormGroup
  facturaID: string | null = null;


  verDetails(facturaId: string): void {
    this.facturaID = this.facturaID === facturaId ? null : facturaId;
    console.log(this.facturaID);
    
  }

  constructor(private rest: RestService,
    private fb:FormBuilder, private listFactura:ListFacturacionService) {
      this.formDetalle = fb.group({
        productName: ['', [Validators.required, Validators.minLength(15)]],
        amount: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
        price: ['', [Validators.required, Validators.min(1)]]
      });
    }

  
 
  toggleAccordion(facturaId: string): void {
    this.facturaID =
      this.facturaID === facturaId ? null : facturaId;
  } 



  getFactura() {
    this.rest.getFactura().subscribe((info: any) => {
      this.arrayFactura = info;
    });
    console.log(this.arrayFactura);
  }

  totalFactura(factura: any): number {
    let total = 0;
    factura.details.forEach((detalle: any) => {
      total += detalle.amount * detalle.price;
    });
    return total;
  }


  guardarDetalle() {
    let nuevoDetalle: Detalle = {
        id:"",
        productName:this.formDetalle.value.productName,
        amount:this.formDetalle.value.amount,
        price:this.formDetalle.value.price
    };

    let facturaIndex = this.arrayFactura.findIndex((factura) => factura.id === this.facturaID)

    if (facturaIndex !== -1) {
      this.arrayFactura[facturaIndex].details.push(nuevoDetalle);
      this.rest.agregarDetalle(this.arrayFactura[facturaIndex]).subscribe(
        (facturaActualizada) => {
          this.formDetalle.reset();
          console.log('Factura actualizada en el servidor:', facturaActualizada);
        },
        (error) => {
          console.error('Error al actualizar la factura:', error);
        }
      );
    } else {
      console.error('No se encontrÃ³ la factura con ID ${this.facturaID}');
    }
  }

  identificador(facturaId: string) {
    this.facturaID = facturaId;
  }

  
  ngOnInit(): void {
    this.listFactura.factura$.subscribe((factura) => {
      this.arrayFactura = factura;
      this.getFactura();
    });
  }

}

