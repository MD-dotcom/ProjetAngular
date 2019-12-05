import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/Forms';
import { ProduitsComponent } from './produits/produits.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AjouterUserComponent } from './ajouter-user/ajouter-user.component';
import { ProduitsSelectionParCritereComponent } from './produits-selection-par-critere/produits-selection-par-critere.component';
//import { AjouterUserComponent } from './ajouter-user/ajouter-user.component';
//ici on crée les routes
const routes: Routes = [
{path: 'membres/connexion',
component: ConnexionComponent
},
{ path: 'categories',
component: CategoriesComponent
},
{ path: 'produits/:categorie',

component: ProduitsComponent
},

{path: 'produits',
component: ProduitsComponent
},
{path: 'recherche',
component: RechercheComponent
},

{path: 'ajouter-user',
component: AjouterUserComponent
},

/*{path: '',
component: AppComponent   // ici si on accede au localhost 4200, l'appli sear dirigée vers appComponent auto
}
,*/
{path: 'produits/keywords?terms',
component: RechercheComponent
}
];
// on integre les routes dans l'appli
@NgModule({
imports: [RouterModule.forRoot(routes), //ici on dit au module router d'angular que toute les routes
                                        //  que tu va enregisterer se trouve dans la constante routes
          BrowserModule, FormsModule],
exports: [RouterModule]
})
export class AppRoutingModule { }