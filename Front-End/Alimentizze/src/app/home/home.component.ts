import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../modelo/Usuario';

import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: Usuario = new Usuario()

  nome = environment.nomeCompleto
  foto = environment.foto
  id = environment.id
  tipo:string;
  

 

  constructor(
    private auth: AuthService,
    private router: Router

  

  ) { }

  ngOnInit() {
    window.scroll(0,0)
this.tipo = environment.tipoDeUsuario
    if (environment.token == "") {
      alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }
    console.log("~foto "+this.foto)
    console.log("~tipo "+this.tipo)
  }

  

}
