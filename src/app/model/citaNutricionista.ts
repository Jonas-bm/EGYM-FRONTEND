import { Alumno } from "./alumno";
import { ClassNutricionista } from "./nutricionista";


export class CitaNutricionista
{
  idCitaNutricionista?:number=0;
  alumno:Alumno=new Alumno();
  nutricionista:ClassNutricionista=new ClassNutricionista();
  fecha:Date= new Date(Date.now());
  descripcion:string="";

}
