export class Cliente {
  id: number;
  nome: string;
  cpf: string;
  enderecoPrincipal: {
    id: number,
    bairro: string,
    cep: string,
    cidade: string,
    rua: string,
    uf: string
  };
  enderecos: object[] = [];
  telefones: object[] = [];
}
