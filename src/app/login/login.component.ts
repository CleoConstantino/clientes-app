import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  meuUsuario: string;
  minhaSenha: string;
  erroDeLogin: boolean;
  cadastrando: boolean;

  constructor(private minhaRota: Router) { }

  validarUsuario(){
      this.minhaRota.navigate(["/home"]);
  }

  preparaParaCadastrar(event){
      event.preventDefault();
      this.cadastrando = true;
  }

  cancelaCadastro(){
      this.cadastrando = false;
  }


}
