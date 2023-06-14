import { Alumno } from "./alumno";
import { Entrenador } from "./entrenador";

export class CitaEntrenador
{
  idCita?:number=0;
  fechaCita:Date= new Date(Date.now());
  descripcion:string=""
  alumno:Alumno=new Alumno();
  entrenador:Entrenador=new Entrenador();

}
