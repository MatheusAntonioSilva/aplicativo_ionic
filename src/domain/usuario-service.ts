import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Usuario } from './usuario';
import { Configuracao} from './configuracao/configuracao';

@Injectable()

export class UsuarioService {

    private urlAPi: String;
    private options;
    private header;
    private config: Configuracao = new Configuracao();


    constructor(private _http: Http) {
        this.urlAPi = this.config.getURlApi();
        this.header = new Headers({
                  'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods' : 'POST',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
        });
        this.options = new RequestOptions({ headers: this.header });
     }
    public efetuaLogin(email: string, senha: string) {
        var data = JSON.stringify({
            email: email,
            password: senha,
        });


        return this._http
        .post(
            this.urlAPi + "clients/login",
            data,
            this.options
        )
        .toPromise()
        .then(response => {
            return response.json();
        });
    }

}