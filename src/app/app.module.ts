import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompteComponent } from './compte/compte.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { GestioncompteComponent } from './gestioncompte/gestioncompte.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { PanierComponent } from './panier/panier.component';
import { ProductsComponent } from './products/products.component';
import { TitreetsoutitreComponent } from './titreetsoutitre/titreetsoutitre.component';
import { BackEndServiceService } from './back-end-service.service';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CompteComponent,
    DeconnexionComponent,
    GestioncompteComponent,
    InscriptionComponent,
    LoginComponent,
    PanierComponent,
    ProductsComponent,
    TitreetsoutitreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BackEndServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
