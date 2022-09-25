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
    _id: new FormControl(''),
    dni: new FormControl(''),
    nombre: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl('')
  });

  constructor(private clientesService: ClientesService) {
    this.cargaClientes();
  }

  async cargaClientes() {
    this.clientes =  await this.clientesService.getClientes();
  }

  editaCliente(cliente: Cliente) {
    this.formularioCliente.patchValue(cliente);
    this.muestraFormulario = true;
  }

  async borraCliente(id: string) {
    await this.clientesService.deleteCliente(id);
    this.cargaClientes();
  }

  async submitCliente() {
    const cliente = <Cliente>this.formularioCliente.value;

    if (cliente["_id"] === '') {
      await this.clientesService.addCliente(cliente);
    } else {
      await this.clientesService.updateCliente(<string>cliente["_id"], cliente);
    }

    this.muestraFormulario = false;
    this.formularioCliente.reset();
    this.cargaClientes();
  }
}
