import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ClientesService} from 'src/app/clientes/clientes.service';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html'
})
export class ClientesFormComponent implements OnInit {

  id: number;
  cliente: Cliente;
  sucesso = false;
  errosApi: [];

  constructor(
    private servicoClientes: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    const params: Observable<Params> = this.activatedRoute.params;

    params
      .subscribe(paramsUrl => {
        this.id = paramsUrl.id;
        if (this.id) {
          this.servicoClientes
            .getClienteById(this.id)
            .subscribe(resposta => {
              this.cliente = resposta;
            }, erro => {
              this.cliente = new Cliente();
            });
        }
      });
  }

  deletarTelefone(index, telefone) {
    if (telefone.id) {
      this.servicoClientes
        .deletarTelefone(telefone.id)
        .subscribe(resposta => {
          this.sucesso = true;
          this.cliente.telefones.splice(index, 1);
        }, erro => {
          this.sucesso = false;
          this.errosApi = erro.error.erros;
        });
    } else {
      this.cliente.telefones.splice(index, 1);
    }
  }

  salvarCliente() {
    if (this.id) {
      this.servicoClientes
        .atualizar(this.cliente)
        .subscribe(resposta => {
          this.sucesso = true;
          this.errosApi = null;
          this.cliente = resposta;

          this.router.navigate(['/clientes/listar']);
        }, erro => {
          this.sucesso = false;
          this.errosApi = erro.error.erros;
        });
    } else {
      this.servicoClientes
        .salvar(this.cliente)
        .subscribe(resposta => {
          this.sucesso = true;
          this.errosApi = null;
          this.cliente = resposta;

          this.router.navigate(['/clientes/listar']);
        }, erro => {
          this.sucesso = false;
          this.errosApi = erro.error.erros;
        });
    }
  }

}
