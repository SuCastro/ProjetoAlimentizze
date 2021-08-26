import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  
  
  {path: 'home', component: HomeComponent},
  {path: 'sobre-nos', component: SobreNosComponent },
  {path: 'contatos', component: ContatosComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


