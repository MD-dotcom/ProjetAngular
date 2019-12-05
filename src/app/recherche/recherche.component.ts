import { Component, OnInit } from '@angular/core';
import { RechercheService } from '../recherche.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent  {
  private produits: Object[]; //liste des pts à afficher
  private subscribe :any;

  constructor(private recherche: RechercheService, private route: ActivatedRoute){};

  ngOnInit() {
    this.route.params.subscribe((params: Params) => { //params est un observable 
      //recoit de nouvelles valeurs et l'abonnement se fait avec subscibe
      //qui permet d'acceder a la methode getProduits de service
      //qui accède aux produits renvoyé par nodejs
      let subroute= "keywords?"+params["terms"].split("").join("&");
      
      this.recherche.getProduits(subroute).subscribe(res => this.produits = res);
    });
    

  }
  
}
