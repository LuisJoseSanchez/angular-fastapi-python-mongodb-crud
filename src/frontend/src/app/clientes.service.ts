import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

const API_URL = "http://0.0.0.0:8000/";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_URL}clientes`);
  }

  getClienteById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_URL}cliente/${id}`);
  }

  addCliente(cliente: Cliente) {
    this.http.post(`${API_URL}cliente`, cliente).subscribe(
      resp => console.log(resp)
    );
  }

  updateCliente(id: string, cliente: Cliente) {
    this.http.put(`${API_URL}cliente`, cliente);
  }

  deleteCliente(id: string) {
    this.http.delete(`${API_URL}cliente/${id}`);
  }
}
