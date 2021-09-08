import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/Usuario';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario

  confirmarSenha: string

  tipoDeUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

  }

  selecionarRadio(select: string){
    this.tipoDeUsuario = select;
    alert("~select usuario "+this.tipoDeUsuario);
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }


  tipoUser(event: any) {
    this.tipoDeUsuario = event.target.value
  }

  cadastrar() {
   
    this.usuario.tipoDeUsuario = this.tipoDeUsuario
    
    
    if (this.usuario.senha != this.confirmarSenha) {
      alert("A senha está incorreta.")
    }
    else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        console.log(JSON.stringify(resp))
        this.router.navigate(["/entrar"])
        alert("Usuário cadastrado com sucesso!")
      })
    }

  }

}

