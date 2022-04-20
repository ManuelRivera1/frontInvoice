export class Invoice {
  Id:string = "";
  codigofactura: string = "P-0000";
  cliente:string = "";
  ciudad:string = "";
  nit:string = "";
  totalfactura:number = 0;
  subtotal:number = 0;
  iva:number = 0;
  retencion:number = 0;
  fechacreacion:string|Date = "";
  estado:string = "";
  pagado:boolean = true;
  fechapago:string|Date = "";
  correo:string = "";
}
