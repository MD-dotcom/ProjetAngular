import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/HTTP';
import { AppRoutingModule } from './app-routing.module';
import { AuthentificationService } from './authentification.service';
//import { ProduitsService } from './produits.service';
//import { RechercheService } from './recherche.service';
import { AppComponent } from './app.component';
//import { ConnexionComponent } from './connexion/connexion.component';
//import { ProduitsComponent } from './produits/produits.component';
//import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AjouterUserComponent } from './ajouter-user/ajouter-user.component';
import { ProduitsSelectionParCritereComponent } from './produits-selection-par-critere/produits-selection-par-critere.component';
import { ProduitsService } from './produits.service';
import { RechercheService } from './recherche.service';
//import { RechercheComponent } from './recherche/recherche.component';


@NgModule({
  declarations: [
    AppComponent,
    //ConnexionComponent,
    //ProduitsComponent,
    //CategoriesComponent,
    MenuComponent,
    ConnexionComponent,
    ProduitsComponent,
    CategoriesComponent,
    RechercheComponent,
    AjouterUserComponent,
    ProduitsSelectionParCritereComponent,
   // RechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthentificationService,ProduitsService, RechercheService ] ,
  // c'est la ou l'instance est crée pour tt l'appli pour chaque service
  //pour utiliser cette instance dans les composant ou services, il suffit de creer une variable
  //de type service dans le constructeur de composant
  bootstrap: [AppComponent] //bootstrap: [MenuComponent] 
})
export class AppModule { 
}

  