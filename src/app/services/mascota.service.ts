import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Facturas } from '../models/factura';
import { Cliente } from '../models/cliente';
import { Producto } from '../models/producto';
import { Sucursal } from '../models/sucursal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class  FacturasService  {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:44327/api/Factura";

  getFactura(){
    return this.http.get(this.url);
  }

  addFactura(Factura:Facturas):Observable<Facturas>{
    return this.http.post<Facturas>(this.url, Factura);
  }

  updateFactura(id:number, Factura:Facturas):Observable<Facturas>{
    return this.http.put<Facturas>(this.url + `/${id}`, Factura);
  }

  deleteFactura(id:number){
    return this.http.delete(this.url + `/${id}`);
  }

  url2:string = "https://localhost:44327/api/Cliente";

  getClientes(){
    return this.http.get(this.url2);
  }

  addClientes(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url2, cliente);
  }

  updateClientes(id:number, cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url2 + `/${id}`, cliente);
  }

  deleteClientes(id:number){
    return this.http.delete(this.url2 + `/${id}`);
  }

  url3:string = "https://localhost:44327/api/Producto";

  getProducto(){
    return this.http.get(this.url3);
  }

  addProducto(Producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.url3, Producto);
  }

  updateProducto(id:number, Producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(this.url3 + `/${id}`, Producto);
  }

  deleteProducto(id:number){
    return this.http.delete(this.url3 + `/${id}`);
  }

  url4:string = "https://localhost:44327/api/Sucursales";

  getSucursal(){
    return this.http.get(this.url4);
  }

  addSucursal(Sucursal:Sucursal):Observable<Sucursal>{
    return this.http.post<Sucursal>(this.url4, Sucursal);
  }

  updateSucursal(id:number, Sucursal:Sucursal):Observable<Sucursal>{
    return this.http.put<Sucursal>(this.url4 + `/${id}`, Sucursal);
  }

  deleteSucursal(id:number){
    return this.http.delete(this.url4 + `/${id}`);
  }
}





