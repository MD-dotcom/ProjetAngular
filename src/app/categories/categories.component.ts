import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { Observable } from 'rxjs';
import { RechercheService } from '../recherche.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private user: Observable<string>;
  private categories: String[] = new Array();

  constructor(private router: Router, private recherche: RechercheService, private authService: AuthentificationService,
              private produitsService: ProduitsService ) {
        this.user = this.authService.getUser();
               }

  ngOnInit() {
    this.produitsService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    
  }
  produitsParCategorie(categorie) {
  this.router.navigate(['/produits', categorie]);
}

}