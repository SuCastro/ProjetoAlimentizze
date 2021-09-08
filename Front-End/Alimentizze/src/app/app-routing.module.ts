import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatosComponent } from './contatos/contatos.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';


const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},


  {path: 'home', component: HomeComponent},
  {path: 'sobre-nos', component: SobreNosComponent },
  {path: 'contatos', component: ContatosComponent },
  {path: 'tema', component: TemaComponent},

  {path: 'entrar', component: EntrarComponent },
  {path: 'cadastrar', component: CadastrarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


