import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { EscolhaPage } from '../escolha/escolha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {


  public solucoes;

  constructor(public navCtrl: NavController, private _http: Http) {
    var apisolucoes = 'https://euagendei.herokuapp.com/solucoesjson'
    this._http.get(apisolucoes).map(res => res.json())
    .toPromise()
    .then(solucoes => this.solucoes = solucoes);


  }

  seleciona(solucao)
  {
    this.navCtrl.push(EscolhaPage, {solucaoSelecionada: solucao});
  }

}
