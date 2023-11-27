export class Factura {
    id:string = "";
    createdDate:Date | null = null;
    clientName:string = "";
    tpe:string = "";
    details: Detalle[] = []
}

export class Detalle{
    id:string = "";
    productName = "";
    amount = 0;
    price = 0;
}