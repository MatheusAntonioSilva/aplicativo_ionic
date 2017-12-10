import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { CadastroPage } from '../cadastro/cadastro'; 



@Component({
    selector: 'page-escolha',
    templateUrl: 'escolha.html',
  
  })


export class EscolhaPage{


  public solucao;


  constructor(public navCtrl: NavController,  public navParams: NavParams, private _http: Http) {

    this.solucao = this.navParams.get('solucaoSelecionada');
    console.log(this.solucao.descricao);



  }
  avancaNoAgendamento(){
    this.navCtrl.push(CadastroPage,{
      solucao: this.solucao
    });
  }

}