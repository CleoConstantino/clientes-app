import {Component, OnInit} from '@angular/core';
import {ClientesService} from 'src/app/clientes/clientes.service';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html'
})
export class ClientesListaComponent implements OnInit {

  nome: string;
  clientes: Cliente[];
  mensagem: string;
  erro: string;

  constructor(private clientesService: ClientesService) {
  }

  ngOnInit(): void {
    this.clientesService
      .getClientes()
      .subscribe(resposta => {
        this.clientes = resposta;
      });
  }

  deletar(cliente) {
    this.clientesService
      .deletar(cliente)
      .subscribe(
        resposta => {
          this.mensagem = 'Cliente deletado com sucesso.';
          this.erro = null;
          this.ngOnInit();
        },
        erro => {
          this.mensagem = null;
          this.erro = 'Ocorreu um erro ao deletar o cliente.';
        }
      );
  }

}
