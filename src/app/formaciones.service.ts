import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormacionesService {
url:string="http://localhost:9500/formaciones"
  constructor(private http:HttpClient) { }
  formaciones(){
    return this.http.get<Formacion[]>(this.url)
  }
}
export class Formacion{
  duracion:number
  turno:string
  denominacion:string
  tematica:string
}
