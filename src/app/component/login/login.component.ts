import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  loading=false

  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar, private router:Router){
    this.form=this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit():void{

  }

  ingresar():void{
    const usuario=this.form.value.usuario;
    const password=this.form.value.password;


    console.log(usuario);
    console.log(password)

    if(usuario=="grupo4" && password=="grupo4")
    {
      this.router.navigate(['home'])
      this.loginFalso();
    }
    else
    {
      this.error();
      this.form.reset();
    }

  }

  error():void{
    this._snackbar.open("El usuario o contraseña ingresado son inválidos",'',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  loginFalso():void{
    this.loading=true;
    setTimeout(() => {
      this.loading=false;
    }, 1500);
  }


}
