import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  arrayBookPanier: Array<number>;   // null

  constructor() { }

  ngOnInit() {
    this.arrayBookPanier = new Array<number>(); // []


    // Récupérer la liste des livres 

    // Pour chaque élement de la liste de livres tu met le boolean "ilEstEmprunter" à false
  }

  taFonctionEmprunter(idBook: number) {
    this.arrayBookPanier.push(idBook); // [1]
    // Je parcours la liste des livres "books" et trouver celui qui correspond à mon identifiant "idBook" transmis à ma fonction 
    // Il faut passer l'object Book avec l'attribut "ilEstEmprunter" à true
  }

  taFonctionNePlusEmprunter(idBook: number) {
    // Je parcours la liste des books
    for(let i = 0; i < this.arrayBookPanier.length; i++) {
      // Si mon id transmis est l'ID qui est parcouru dans mon array de Book
      if (idBook === this.arrayBookPanier[i]) {
        this.arrayBookPanier.splice(i, 1);    // Avant j'avais [1,2] après j'ai [2]            
      }
    }

    // Je parcours la liste des livres "books" et trouver celui qui correspond à mon identifiant "idBook" transmis à ma fonction 
    // Il faut passer l'object Book avec l'attribut "ilEstEmprunter" à false
    
  }

  validerLePanier() {
    // Appel du back avec transmission de la liste des bouquins empruntés "arrayBookPanier"
  }

}
