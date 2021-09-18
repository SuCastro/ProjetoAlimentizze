import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nomeCompleto = environment.nomeCompleto
  id = environment.id
  houverItemHome = false;
  houverItemOng = false;
  houverItemSalvo= false;
  houverItemMenu= false;
  houverItemNoti= false;
  houverItemChat= false;

  constructor(
    public auth: AuthService,
    private router: Router,
    private alertas: AlertasService


  ) { }

  ngOnInit() {

    if (environment.token == "") {
      //this.alertas.showAlertInfo('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }
    
  }
  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nomeCompleto = ''
    environment.foto = ''
    environment.id = 0
    environment.email = ''
  
  
  
  }

  sobreNos(){
    this.router.navigate(['/sobre-nos'])
  
  }
}


