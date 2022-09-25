import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Cliente } from './cliente';

const API_URL = "http://0.0.0.0:8000/";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes(): Promise<Cliente[]> {
    return lastValueFrom(this.http.get<Cliente[]>(`${API_URL}clientes`));
  }

  getClienteById(id: string): Promise<Cliente> {
    return lastValueFrom(this.http.get<Cliente>(`${API_URL}cliente/${id}`));
  }

  addCliente(cliente: Cliente): Promise<string> {
    return lastValueFrom(this.http.post<string>(`${API_URL}cliente`, cliente));
  }

  updateCliente(id: string, cliente: Cliente): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${API_URL}cliente`, cliente));
  }

  deleteCliente(id: string): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${API_URL}cliente/${id}`));
  }
}
