import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Cliente} from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiClientes: string = environment.apiURLBase + '/api/clientes';
  apiTelefones: string = environment.apiURLBase + '/api/telefones';
  apiEnderecos: string = environment.apiURLBase + '/api/enderecos';

  constructor(private http: HttpClient) {
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiClientes);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.apiClientes + '/' + id);
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiClientes, cliente);
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(this.apiClientes + '/' + cliente.id, cliente);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(this.apiClientes + '/' + cliente.id);
  }

  deletarTelefone(id: string): Observable<any> {
    return this.http.delete<any>(this.apiTelefones + '/' + id);
  }

  deletarEndereco(id: string): Observable<any> {
    return this.http.delete<any>(this.apiEnderecos + '/' + id);
  }

}
