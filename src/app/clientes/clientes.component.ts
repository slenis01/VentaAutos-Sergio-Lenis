import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  tituloPagina = "Registro del Cliente";
  cliente = { nombre: "", password: "", telefono: "", email: ""};
  quiereContacto: boolean = false;

  constructor(private _router: Router,) { }

  ngOnInit(): void {
  }

  goInicio(): void {
    this._router.navigate(['/inicio'])
  }

  registra(): void {
    alert( "En construccion");
    this._router.navigate(["/autos"]);
  }

}