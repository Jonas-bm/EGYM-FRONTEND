import { Alumno } from "./alumno";
import { VideoRutinario } from "./videorutinario";

export class Visualizaciones
{
  idVisualizaciones?:number=0;
  alumno:Alumno=new Alumno();
  videosRutinario:VideoRutinario=new VideoRutinario();
  comentario:string="";
}
