import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})

export class CadastroUsuarioPage {

  mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/,/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public nome: string = "";
  public telefone: string = "";
  public email: string = "";
  public senha: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  register() {

  }

  voltar() {
    this.navCtrl.setRoot(LoginPage);
  }

}
