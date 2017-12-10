import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Agenda } from './agenda';
import { Configuracao} from './configuracao/configuracao';

@Injectable()

export class AgendaService {

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
    public agendei(descricao: string, data:string, horario_inicio: string, horario_fim: string) {
        var data = JSON.stringify({
            agenda: {descricao: descricao,
            data: data,
            horario_inicio: horario_inicio,
            horario_fim: horario_fim,
            user_id: 2}
        });


        return this._http
        .post(
            this.urlAPi + "agendasjson",
            data,
            this.options
        )
        .toPromise()
        .then(response => {
            return response.json();
        });
    }

}