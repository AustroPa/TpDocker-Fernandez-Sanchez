import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { IShow } from '../show';
import { Observable, catchError } from 'rxjs';
import { NgModule } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class TraerShowsService {
  private url = "http://localhost:3000/show/"

  constructor(private http: HttpClient) { }
  
  protected listaShows: IShow[] = [

  ]

  getAllShow(){
    return this.http.get(this.url);
  }

  getOneShow(id:number){
    return this.http.get(this.url + id);
  }
  

  addShow(body:any) {
    return this.http.post(this.url, body); 
  }

  deleteShow(id: number) {
    return this.http.delete(this.url + id);
  }

  updateShow(id : number, body:any) {
    return this.http.put<void>(this.url + id, body);
  }
  
}
