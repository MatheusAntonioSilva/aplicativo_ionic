import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
	selector: 'page-recuperar-senha',
	templateUrl: 'recuperar-senha.html',
})
export class RecuperarSenhaPage {

	public email: string = "";

	constructor(public navCtrl: NavController,
				public navParams: NavParams) {
	}

	recuperarSenha(){

    }

    voltar(){
        this.navCtrl.setRoot(LoginPage);
    }

}
