import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../modelo/Postagem';
import { Tema } from '../modelo/Tema';
import { Usuario } from '../modelo/Usuario';
import { AlertasService } from '../service/alertas.service';

import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPost: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  categoriaTema: string


  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  nome = environment.nomeCompleto
  foto = environment.foto
  id = environment.id
  tipo: string;

  key = 'data'
  reverse = true




  constructor(
    public auth: AuthService,
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private alertas: AlertasService



  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.tipo = environment.tipoDeUsuario
    if (environment.token == "") {
      //this.alertas.showAlertInfo('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }
    
   


    console.log("~foto " + this.foto)
    console.log("~tipo " + this.tipo)
    this.getAllPostagens()
    this.getAllTemas()

  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp

    })



  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp


    })

  }


  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
      console.log("~lista postagem " + JSON.stringify(this.listaPostagens))
    })

  }

  publicar() {
    this.tema = new Tema();
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario
    console.log("a ser cadastrada postagem " + JSON.stringify(this.postagem))
    console.log("tema " + JSON.stringify(this.tema))
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess("Postagem realizada com sucesso!")
      this.postagem = new Postagem()
      this.getAllPostagens()

    })


  }


  findByTituloPostagem(){

    if(this.tituloPost == ''){
      this.getAllPostagens()
    } 
    else {
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })

    }


    
  }


  findByCategoriaTema(){
    if(this.categoriaTema == ''){
      this.getAllTemas()
    } 
    else {
      this.temaService.getByCategoriaTema(this.categoriaTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })

    }

  }



}
