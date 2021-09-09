import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../modelo/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-minhas-postagens',
  templateUrl: './minhas-postagens.component.html',
  styleUrls: ['./minhas-postagens.component.css']
})
export class MinhasPostagensComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[] 

  constructor(
    private router: Router,
    private postagemservice: PostagemService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      /* alert('Sua sessão expirou, faça login novamente!!!')*/
       this.router.navigate(['/entrar'])
     }

     this.findAllPostagem()
      
  }
  findAllPostagem(){
    this.postagemservice.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagem = resp
    }
    )
  

  }

}
