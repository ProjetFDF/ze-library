import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CompteComponent } from './compte/compte.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [

  { path: 'compte', component: CompteComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'panier', component: PanierComponent },
  { path: '**', component: PagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }