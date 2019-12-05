import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
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
export class AjouterUserService {
  [x: string]: any;
nom: String;
prenom: String;
email: String;
password: String;

private baseURL: string = "http://localhost:8888";

constructor(private http: HttpClient, private userService: AjouterUserService, route: Router) { }

/*getMembre(): Observable<any> {
  let url = "http://localhost:8888"
  let observable: Observable<any> = this.http.get(url+'/membres');
   return observable;
}*/
//ajouter un membre 
addMembre(nom, prenom, password, email ): Observable<any>{
    /*let headers=new HttpHeaders({'Content-Type':'Application/json'});
   // let options=new RequestOptions ({headers: headers});
    console.log("ok" +email+""+password);
    let observable: Observable<any>;
    let url="http://localhost:8888/membres";*/
    let body= {nom,prenom,password,email}
     //return this.http.post(this.baseURL+'ajouter-user',JSON.stringify(body),httpOptions) /*.pipe(map((res:Response) => res.json()))*/;
     return this.http.post(this.baseURL+'/ajouter-user',JSON.stringify(body),httpOptions);
  }
  //observable = this.http.post(url,JSON.stringify(body), options).map((res:Response)=>  res.json());
      

}