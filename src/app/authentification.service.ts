import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
headers: new HttpHeaders({
  "Access-Control-Allow-Methods": "GET,POST",
  "Access-Control-Allow-Headers": "Content-type",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
})
};

@Injectable({
providedIn: 'root'
})
export class AuthentificationService {
  [x: string]: any;
private user: Subject<string> = new BehaviorSubject<string>(undefined);// ici on dit que la donnée
//recuperée dans observable est un string, c'est ici que le user prend une valeur (mail) et il va dire a tous
//les composant qui utilise ce service que voila le user qui est connécté 
private baseURL: string = "http://localhost:8888/";

constructor(private http: HttpClient) { }

getUser() {return this.user;}

connect(data: string) { this.user.next(data);}

disconnect() { this.user.next(null);}

verificationConnexion(identifiants): Observable<any> {
  return this.http.post(this.baseURL+'membres/connexion', JSON.stringify(identifiants), httpOptions);
}


}