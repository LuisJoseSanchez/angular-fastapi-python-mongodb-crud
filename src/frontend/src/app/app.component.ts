import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) {
    this.cargaClientes();
  }

  async addCliente() {
    const id = await this.clientesService.addCliente({
      dni: '12345',
      nombre: 'Alan Brito',
      direccion: 'Avda de Andalucía',
      telefono: '555 678954'
    });

    console.log(id);

    this.cargaClientes();
  }

  async cargaClientes() {
    this.clientes =  await this.clientesService.getClientes();
  }
}
