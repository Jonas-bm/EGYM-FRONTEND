import { CitaNutricionista } from "./citaNutricionista";

export class RecetaAsignada
{
  idRecetaAsignada?:number=0;
  citaNutricionista:CitaNutricionista=new CitaNutricionista();
  nombreReceta:string="";
  descripcion:string="";
}
