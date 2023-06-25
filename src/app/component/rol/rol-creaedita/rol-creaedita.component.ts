import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Role } from 'src/app/model/role';
import { Users } from 'src/app/model/users';
import { RolService } from 'src/app/service/rol.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-rol-creaedita',
  templateUrl: './rol-creaedita.component.html',
  styleUrls: ['./rol-creaedita.component.css']
})
export class RolCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  rol: Role=new Role();
  mensaje: string = ""
  listaU: Users[] = [];
  idUsuarioSeleccionado: number = 0;


  constructor(private rS: RolService,
    private router: Router,
    private route: ActivatedRoute, private uS:UsuarioService) {
  }

  ngOnInit(): void {
    this.uS.list().subscribe(data => { this.listaU = data });


    this.form = new FormGroup({
      idCita: new FormControl(),
      rol: new FormControl(),
      usuario: new FormControl(),

    });
  }
  aceptar(): void {
    this.rol.id = this.form.value['id'];
    this.rol.rol = this.form.value['rol'];
    this.rol.user.id = this.form.value['user.id'];

    if (this.idUsuarioSeleccionado>0) {
      let u = new Users();
      u.id = this.idUsuarioSeleccionado;
      this.rol.user=u;
      this.rS.insert(this.rol).subscribe(() => {
      this.rS.list().subscribe(data => {
            this.rS.setList(data);
          })
        })

      this.router.navigate(['/egym/roles']);
  }
}
}
