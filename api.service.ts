import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postToken(data : any){
    return this.http.post<any>("http://localhost:3000/Token/",data)
  }
  getToken(){
    return this.http.get<any>("http://localhost:3000/Token/")
  }
  completeToken(data : any){
    return this.http.post<any>("http://localhost:3000/completedToken/", data)
  }
  deleteToken(id:number) {
    return this.http.delete<any>("http://localhost:3000/Token/"+id)
  }
}
