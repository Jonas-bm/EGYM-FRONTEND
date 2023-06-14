import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaNutricionista } from 'src/app/model/citaNutricionista';
import { RecetaAsignada } from 'src/app/model/resetaasignada';
import { CitaEntrenadorService } from 'src/app/service/cita-entrenador.service';
import { CitaNutricionistaService } from 'src/app/service/cita-nutricionista.service';
import { ResetaasignadaService } from 'src/app/service/resetaasignada.service';

@Component({
  selector: 'app-resetaasignada-creaedita',
  templateUrl: './resetaasignada-creaedita.component.html',
  styleUrls: ['./resetaasignada-creaedita.component.css']
})
export class ResetaasignadaCreaeditaComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  receta: RecetaAsignada=new RecetaAsignada();
  mensaje: string = ""
  listaCN: CitaNutricionista[] = [];
  idCitaNutricionistaSeleccionado: number = 0;

  constructor(private raS: ResetaasignadaService,
    private router: Router,
    private route: ActivatedRoute, private cnS:CitaNutricionistaService) {
  }

  ngOnInit(): void {
    this.cnS.list().subscribe(data => { this.listaCN = data });

    this.form = new FormGroup({
      idRecetaAsignada: new FormControl(),
      citaNutricionista: new FormControl(),
      nombreReceta:new FormControl(),
      descripcion: new FormControl(),

    });
  }
  aceptar(): void {
    this.receta.idRecetaAsignada = this.form.value['idRecetaAsignada'];
    this.receta.citaNutricionista.nutricionista= this.form.value['citaNutricionista.nutricionista.nombreNutricionista'];
    this.receta.nombreReceta = this.form.value['nombreReceta'];
    this.receta.descripcion = this.form.value['descripcion'];

    if (this.idCitaNutricionistaSeleccionado>0) {
      let cn = new CitaNutricionista();
      cn.idCitaNutricionista=this.idCitaNutricionistaSeleccionado;
      this.receta.citaNutricionista=cn;
      this.raS.insert(this.receta).subscribe(() => {
      this.raS.list().subscribe(data => {
            this.raS.setList(data);
          })
        })

      this.router.navigate(['recetasAsignadas']);
  }
}

}
