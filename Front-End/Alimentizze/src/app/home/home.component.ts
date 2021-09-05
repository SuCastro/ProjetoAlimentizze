import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioDTO } from '../modelo/UsuarioDTO';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarioDTO: UsuarioDTO = new UsuarioDTO()
  nome = environment.nomeCompleto
  foto = environment.foto
  id = environment.id
  

 

  constructor(
    private auth: AuthService,
    private router: Router

  

  ) { }

  ngOnInit() {
    window.scroll(0,0)

  }

  entrar(){
    console.log(JSON.stringify(this.usuarioDTO))
    this.auth.entrar(this.usuarioDTO).subscribe((resp: UsuarioDTO)=>{
      this.usuarioDTO = resp

      environment.token = this.usuarioDTO.token
      environment.nomeCompleto = this.usuarioDTO.nomeCompleto
      environment.foto =  this.usuarioDTO.foto
      environment.id =  this.usuarioDTO.id
      
      /* 
      VERIFICACAO SE OS ENVIRONMENT FORAM EFETIVADOS
      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.id) */
      


      this.router.navigate(['/inicio'])

    }, erro =>{
      if(erro.status == 400){
        alert('Usuário ou senha esão incorretos!')
      }
    })


  }

}
