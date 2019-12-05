import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  private user: Observable<string>; //elle est recuperée
  private produits: Object[] =new Array();

constructor(private route: ActivatedRoute, private authService: AuthentificationService,
                           private produitsService: ProduitsService) {
      this.user=this.authService.getUser(); //cette valeur va prendre la valeur qui est dans le service
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log("Dans produits.component.ts avec "+params["categorie"]);
      if (params["categorie"] !== undefined ){
        console.log("/produits/"+params['categorie']);
        this.produitsService.getProduitsParCategorie(params["categorie"]).subscribe(produits =>{
          this.produits = produits;
        });
      }
      else {
        this.produitsService.getProduits().subscribe(produits => {
          this.produits = produits;
        });
      }
    });
  }

  

}

