import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class RechercheService {
 
    constructor(private http: HttpClient) { }
    

    getProduits(parametres :string) : Observable<any> {
        /*let headers = new HttpHeaders({
            'Content-Type': 'application/json'});
         let options = {
            headers: headers
         }
        let url :string ="http://localhost:8888/produits/"+parametres;
        let observable :Observable<any> = this.http.get(url).pipe(map((res:Response) => res.json()));
         //res.json()cela ne fonctionnera pas dans le nouveau HttpClient d'Angular . 
         //Le resest déjà un objet json analysé.   
        // return observable; */
        let url :string ="http://localhost:8888/produits/"+parametres;
        let observable :Observable<any> = this.http.get(url).pipe(map((res:Response) => res.json()));
         //res.json()cela ne fonctionnera pas dans le nouveau HttpClient d'Angular . 
         //Le resest déjà un objet json analysé.   
         return observable; 
     }
    
    
}
