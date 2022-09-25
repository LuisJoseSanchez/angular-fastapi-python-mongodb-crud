import { Component } from '@angular/core';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  clientes$ = this.clientesService.getClientes();

  constructor(private clientesService: ClientesService) {}

  addCliente() {
    this.clientesService.addCliente({
      dni: '12345',
      nombre: 'Alan Brito',
      direccion: 'Avda de Andalucía',
      telefono: '555 678954'
    });
  }
}
