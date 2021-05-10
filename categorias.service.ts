import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  _url = 'https://localhost:44319/api/Categories'
  constructor(private http: HttpClient) { 
    console.log('servicio persona')
  }

  getCategorias(){
    let header = new HttpHeaders().set('Type-content','aplication/json')
    return this.http.get(this._url,{headers: header });
    }

    eliminarCategoria(){

    }

    ingresarCategoria(){
      
    }

  }





