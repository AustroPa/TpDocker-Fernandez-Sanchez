import { Injectable } from '@angular/core';
import { conductor } from '../conductor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TraerConductoresService {
  private url = "http://localhost:3000/conductor/"
    constructor(private http: HttpClient) { }
  
    protected listaConductores: conductor[] = [
  
    ]
  
    getAllConductores(){
      return this.http.get(this.url)
    }

    getOneConductor(id:number){
      return this.http.get(this.url + id);
    }
    
    addConductor(body:any) {
      return this.http.post(this.url, body); 
    }
  
    deleteConductor(id: number) {
      return this.http.delete(this.url + id);
    }
  
    updateConductor(id:number, body:any) {
      return this.http.put(this.url + id, body);
    }
  
}
