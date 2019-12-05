import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RechercheService } from '../recherche.service';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-produits-selection-par-critere',
  templateUrl: './produits-selection-par-critere.component.html',
  styleUrls: ['./produits-selection-par-critere.component.css']
})
export class ProduitsSelectionParCritereComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  //private selectors: Object[];
  items: any;

  

  constructor( ) { }

 
    //this.recherche.getProduits("selectors")
             //     .subscribe(res =>this.selectors = res);
    //this.route.params.subscribe(params =>{ this.recherche.getJSON("type/"+params['type'])
                                                        
                  //                                      });
  

  }
