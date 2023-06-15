import { Alumno } from "./alumno";
export class Suscripcion{
  idSusripcion?:number=0;
  alumno:Alumno=new Alumno();
  pago:string="";
  tipoSuscripcion:string="";
  precio:number=0;
  fechaSuscripcion:Date= new Date(Date.now());
  fechaExpiracion:Date= new Date(Date.now());
}
