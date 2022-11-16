import { Component } from '@angular/core';
import { Facturas } from './models/factura';
import { Cliente } from './models/cliente';
import { Producto } from './models/producto';
import { Sucursal } from './models/sucursal';
import { FacturasService } from './services/mascota.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  factura:Facturas = new Facturas();
  cliente:Cliente = new Cliente();
  producto:Producto = new Producto();
  sucursal:Sucursal = new Sucursal();
  datatable:any = [];
  datatable2:any = [];
  datatable3:any = [];
  datatable4:any = [];

  constructor(private FacturasService:FacturasService){

  }

  ngOnInit(): void {
    this.onDataTable();
    this.onDataTable2();
    this.onDataTable3();
    this.onDataTable4();
  }
// tablesData
  onDataTable(){
    this.FacturasService.getFactura().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }
  onDataTable2(){
    this.FacturasService.getClientes().subscribe(res => {
      this.datatable2 = res;
      console.log(res);
    });
  }
  onDataTable3(){
    this.FacturasService.getProducto().subscribe(res => {
      this.datatable3 = res;
      console.log(res);
    });
  }
  onDataTable4(){
    this.FacturasService.getSucursal().subscribe(res => {
      this.datatable4 = res;
      console.log(res);
    });
  }

// tablesData
// ADD 

  onAddFactura(factura:Facturas):void{
    this.FacturasService.addFactura(factura).subscribe(res => {
      if(res){
        alert(` se ha registrado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }

  onAddCliente(cliente:Cliente):void{
    this.FacturasService.addClientes(cliente).subscribe(res => {
      if(res){
        alert(` se ha registrado con exito!`);
        this.clear();
        this.onDataTable2();
      } else {
        alert('Error! :(')
      }
    });
  }
  onAddProducto(producto:Producto):void{
    this.FacturasService.addProducto(producto).subscribe(res => {
      if(res){
        alert(` se ha registrado con exito!`);
        this.clear();
        this.onDataTable3();
      } else {
        alert('Error! :(')
      }
    });
  }
  onAddSucursal(sucursal:Sucursal):void{
    this.FacturasService.addSucursal(sucursal).subscribe(res => {
      if(res){
        alert(` se ha registrado con exito!`);
        this.clear();
        this.onDataTable4();
      } else {
        alert('Error! :(')
      }
    });
  }

// ADD 

// Update
  onUpdateFactura(factura:Facturas):void{
    this.FacturasService.updateFactura(factura.IDFACTURA, factura).subscribe(res => {
      if(res){
        alert(`se ha modificado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }

  onUpdateCliente(cliente:Cliente):void{
    this.FacturasService.updateClientes(cliente.IDCLIENTE, cliente).subscribe(res => {
      if(res){
        alert(`se ha modificado con exito!`);
        this.clear();
        this.onDataTable2();
      } else {
        alert('Error! :(')
      }
    });
  }
  onUpdateProducto(producto:Producto):void{
    this.FacturasService.updateProducto(producto.IDPRODUCTO, producto).subscribe(res => {
      if(res){
        alert(`se ha modificado con exito!`);
        this.clear();
        this.onDataTable3();
      } else {
        alert('Error! :(')
      }
    });
  }

  onUpdateSucursal(sucursal:Sucursal):void{
    this.FacturasService.updateSucursal(sucursal.IDSUCURSAL, sucursal).subscribe(res => {
      if(res){
        alert(`se ha modificado con exito!`);
        this.clear();
        this.onDataTable4();
      } else {
        alert('Error! :(')
      }
    });
  }

// Update

// Delete
  onDeleteFactura(id:number):void{
    this.FacturasService.deleteFactura(id).subscribe(res => {
      if(res){
        alert(` se ha eliminado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }
  onDeleteCliente(id:number):void{
    this.FacturasService.deleteClientes(id).subscribe(res => {
      if(res){
        alert(` se ha eliminado con exito!`);
        this.clear();
        this.onDataTable2();
      } else {
        alert('Error! :(')
      }
    });
  }
  onDeleteProducto(id:number):void{
    this.FacturasService.deleteProducto(id).subscribe(res => {
      if(res){
        alert(` se ha eliminado con exito!`);
        this.clear();
        this.onDataTable3();
      } else {
        alert('Error! :(')
      }
    });
  }
  onDeleteSucursal(id:number):void{
    this.FacturasService.deleteSucursal(id).subscribe(res => {
      if(res){
        alert(` se ha eliminado con exito!`);
        this.clear();
        this.onDataTable4();
      } else {
        alert('Error! :(')
      }
    });
  }


// Delete
// Bin data
  onSetData(select:any){

    this.factura.IDFACTURA = select.IDFACTURA;
    this.factura.IDSUCURSAL = select.IDSUCURSAL;
    this.factura.IDCLIENTE = select.IDCLIENTE;
    this.factura.IDPRODUCTO = select.IDPRODUCTO;
    this.factura.MONTO = select.MONTO;
  }
  onSetData2(select:any){

    this.cliente.IDCLIENTE = select.IDCLIENTE;
    this.cliente.NOMBRECLI = select.NOMBRECLI;
    this.cliente.EDAD = select.EDAD;

  }
  onSetData3(select:any){

    this.producto.IDPRODUCTO = select.IDPRODUCTO;
    this.producto.NOMBREPRODUCTO = select.NOMBREPRODUCTO;
    this.producto.PRECIOPRODUCTO = select.PRECIOPRODUCTO;

  }
  onSetData4(select:any){

    this.sucursal.IDSUCURSAL = select.IDSUCURSAL;
    this.sucursal.ADDRESSUC = select.ADDRESSUC;
    this.sucursal.NOMBRESUCURSAL = select.NOMBRESUCURSAL;

  }

// Bin data
  clear(){
    this.factura.IDFACTURA =0;
    this.factura.IDSUCURSAL = 0;
    this.factura.IDCLIENTE = 0;
    this.factura.IDPRODUCTO = 0;
    this.factura.MONTO = 0;
  }
}
