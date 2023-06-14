import { DocumentoVenta } from "./documentoVenta";
import { Product } from "./product";

export class DetalleVenta
{
  idDetalleVenta?:number=0;
  producto:Product=new Product();
  montoTotal:number=0;
  fechaVenta:Date= new Date(Date.now());
  documentoVenta:DocumentoVenta=new DocumentoVenta();
}
