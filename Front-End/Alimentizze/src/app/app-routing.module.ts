import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { MinhasPostagensComponent } from './minhas-postagens/minhas-postagens.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';


const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},


  {path: 'home', component: HomeComponent},
  {path: 'sobre-nos', component: SobreNosComponent },
  {path: 'contatos', component: ContatosComponent },
  {path: 'tema', component: TemaComponent},

  {path: 'entrar', component: EntrarComponent },
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  {path: 'minhas-postagens', component: MinhasPostagensComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


