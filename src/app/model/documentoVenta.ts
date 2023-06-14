import { Alumno } from "./alumno";

export class DocumentoVenta
{
  idDocumentoventa?:number=0;
  montoTotal:number=0;
  fecha:Date= new Date(Date.now());
  alumno:Alumno=new Alumno();
}
