import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { EscolhaPage } from '../escolha/escolha';
import { Solucao } from '../../domain/solucao';
import { Agenda } from '../../domain/agenda';
import { AgendaService } from '../../domain/agenda-service';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',

})

export class CadastroPage {

  public solucao: Solucao;
  public agenda: Agenda;
  public descricao: string;
  public data: string;
  public horario_inicio: string;
  public horario_fim: string;

  constructor(
    public navCtrl: NavController,
      public navParams: NavParams,
       private _http: Http,
    private agenda_service: AgendaService,
     public alert_controller: AlertController) {

    this.solucao = this.navParams.get('solucao');
    this.agenda = this.navParams.get('agenda');

  }

  agendou(){
    this.agenda_service
    .agendei(this.descricao, this.data, this.horario_inicio, this.horario_fim )
    .then(success => {
    
      let  alerta = this.alert_controller.create({
        title: "Aviso",
        message: "Cadastrado com Sucesso",
       // message: success.status,
        buttons: ['OK']
      })
      .present();
                    })
                    .catch(err => {
        
                        let alerta = this.alert_controller.create({
                            title: "Aviso",
                            message: "Erro! Verifique sua conexão.",
                            buttons: ['OK']
                        })
                        .present();
                    });
// this.navCtrl.setRoot(HomePage);
        }
}
