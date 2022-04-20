import { Component, OnInit } from '@angular/core';
import { Invoice } from './models/invoice';
import { InvoiceService } from './services/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clientefilter: string= "";
  invoice:Invoice = new Invoice();
  dataTable:any = [];
  estados:any = [
  { title: "Primer Recordatorio", value: 'Primer Recordatorio' },
  { title: "Segundo Recordatorio", value: 'Segundo Recordatorio'},
  { title: "Finalizado", value: 'Finalizado'}]
  constructor(private invoiceService: InvoiceService){

  }
  ngOnInit(): void {
    this.onInvoice();
  }
  onInvoice(){
     this.invoiceService.getInvoice().subscribe(res => {
       this.dataTable = res;
     })

     
  }
  onSetData(select:any){
    this.invoice.Id = select.id;
    this.invoice.codigofactura = select.codigofactura;
    this.invoice.cliente = select.cliente;
    this.invoice.ciudad = select.ciudad;
    this.invoice.nit = select.nit;
    this.invoice.totalfactura = select.totalfactura;
    this.invoice.subtotal= select.subtotal;
    this.invoice.iva = select.iva;
    this.invoice.retencion = select.retencion;
    this.invoice.fechacreacion = new Date(select.fechacreacion);
    this.invoice.estado = select.estado;
    this.invoice.pagado = select.pagado;
    this.invoice.fechapago = new Date(select.fechapago);
    this.invoice.correo = select.correo;
    console.log(this.invoice.fechapago);

  }
  onAddInvoice(invoice: Invoice):void{
    this.invoiceService.addInvoice(invoice).subscribe(res => {
      if(res){
        alert(`El cliente ${invoice.cliente} se ha registrado con exito!`);
        this.clear();
        this.onInvoice();
      } else {
        alert('Error! :(')
      }
    });
  }
  onUpdateInvoice(invoice: Invoice):void{
    this.invoiceService.updateInvoice(invoice.Id, invoice).subscribe(res => {
        alert(`el cliente con número de factura ${invoice.codigofactura} se ha modificado con exito!`);
        this.clear();
        this.onInvoice();

    });
  }

  onDeleteInvoice(id:string):void{
    this.invoiceService.deleteInvoice(id).subscribe(() => {
        alert(`el cliente con id ${id} se ha eliminado con exito!`);
        this.clear();
        this.onInvoice();
    });
  }
  onFilterInvoice(clientefilter:any):void{
    this.invoiceService.filterInvoice(clientefilter).subscribe(res => {
        this.dataTable = res;
    });
  }
  ValidateInput(e:any):void{
    if(e.target.value.length === 0){
      this.onInvoice();
    }else{

    }
    console.log(e.target.value.length);
  }
  clear(){
    this.invoice.Id = "";
    this.invoice.codigofactura ="";
    this.invoice.cliente = "";
    this.invoice.ciudad = "";
    this.invoice.nit = "";
    this.invoice.totalfactura = 0;
    this.invoice.subtotal= 0;
    this.invoice.iva = 0;
    this.invoice.retencion = 0;
    this.invoice.fechacreacion = "";
    this.invoice.estado = "";
    this.invoice.pagado = true;
    this.invoice.fechapago ="";
    this.invoice.correo = "";
  }
}
