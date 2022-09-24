import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://0.0.0.0:8000/";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  
  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(`${API_URL}/clientes`);
  }
}
