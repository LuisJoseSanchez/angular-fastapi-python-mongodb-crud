import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  clientes: Cliente[] = [];
  muestraFormulario = false;

  formularioCliente = new FormGroup({
    dni: new FormControl(''),
    nombre: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl('')
  });

  constructor(private clientesService: ClientesService) {
    this.cargaClientes();
  }

  async nuevoCliente() {
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

  editaCliente() {

  }

  async borraCliente(id: string) {
    await this.clientesService.deleteCliente(id);
    this.cargaClientes();
  }

  async submitCliente() {
    await this.clientesService.addCliente(<Cliente>this.formularioCliente.value);
    this.muestraFormulario = false;
    this.formularioCliente.reset();
    this.cargaClientes();
  }
}
