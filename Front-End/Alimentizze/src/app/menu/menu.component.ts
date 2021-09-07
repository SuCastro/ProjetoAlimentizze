import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nomeCompleto = environment.nomeCompleto
  id = environment.id
  constructor(
    private router: Router


  ) { }

  ngOnInit() {

    if (environment.token == "") {
      alert('Sua seção expirou, faça o login novamente.')
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
}


