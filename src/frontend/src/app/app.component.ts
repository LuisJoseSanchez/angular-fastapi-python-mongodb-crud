import { Component } from '@angular/core';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  clientes$ = this.clientesservice.getClientes();

  constructor(private clientesservice: ClientesService) {}
}
