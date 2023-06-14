import { CitaEntrenador } from "./citaEntrenador";

export class RutinaAsignada
{
  idRutinaAsignada?:number=0;
  nombreRutina:string="";
  descripcion:string="";
  repeticiones:string="";
  tiempoRutina:string="";
  citaEntrenador:CitaEntrenador=new CitaEntrenador();
}
