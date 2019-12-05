
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent  {
  
  private utilisateur = { "email":"", "password": ""};
  private message: string ="";

  constructor(private authService: AuthentificationService, private router: Router) { } 
  //ici on injecte des router lors de la connexion

  onSubmit(){ /* ici on va ajouter un botton pour se connecter qui va declencher la methode 
  verificationConnexion de service*/
    this.authService.verificationConnexion(this.utilisateur).subscribe(response => {
       this.message = response['message'];
       if (response['resultat']) {
         this.authService.connect(this.utilisateur.email); //mettre a jour le statut de l'utilisateur
         this.router.navigate(['/categories']); // naviguer sur cette route
       }
       setTimeout( () => { this.router.navigate(['/categories']); }, 1000); //connexion au bout de 1 seconde
      })
  }

  

}
