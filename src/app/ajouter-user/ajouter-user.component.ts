
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AjouterUserService } from '../ajouter-user.service';

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent  {
  nom: String;
  prenom: String;
  email: String;
  password: String;
  confirmationPassword: String;


  msgVisible: boolean =false;
  msg:String;
  //dataService=[];

  constructor(private authservice: AuthentificationService,private userService : AjouterUserService, private router: Router) { }

  ngOnInit() {
    /*this.userService.getMembre().subscribe(
      res =>{
       this.dataService.push(res); 
       //La méthode push ajoute un ou plusieurs éléments 
       //à la fin d'un tableau et retourne la nouvelle taille du tableau
       
      }
    );*/ 
  }

  valider()
  {
    this.msg="";
    this.msgVisible=false;
    console.log ("saisis : " + this.nom + " - " + this.prenom + " - " +this.email +" - " +this.password);
    this.check(this.email, this.password, this.confirmationPassword);
    
    if (!this.msgVisible)
    {
      console.log("le compte peut être crée");
      this.userService.addMembre(this.nom, this.prenom, this.email, this.password).subscribe();
      
      //this.router.navigate(['/ajouter-user', this.email]);
    }

  }

  //insertion dans la bdd
  /*insertion(nom, prenom, email, password)
  {
      console.log ("membre: "+ email);
      console.log ("mdp : " + password); 
      this.userService.addMembre(nom, prenom, password, email).subscribe();
      console.log("fin de l'ajout");
      
  }*/

  check(email, password, confirmationPassword)
  {
    var msg : String ="";
    var error: boolean =false;

    if (email ==undefined || password==undefined || confirmationPassword == undefined )
    {
      error =true;
      msg += "Attention ces champs doivent être remplis ! ";
      console.log("erreur de remplissage des champs");
    }
    
    else
    { 
              //Verification Mot de passe conforme 
      if (password.length<6)
      {
        msg += "Le mot de passe doit contenir au moins 6 caractères,  \n";
        error= true;
        this.password="";
        this.confirmationPassword="";
        console.log("mot de passe trop court");
      }

     
    //Affiche Message
    if (error)
    {
      this.msgVisible=true;
      this.msg=msg;
      console.log ("msg : " + msg);
    }
  }

  

} 

}
 
