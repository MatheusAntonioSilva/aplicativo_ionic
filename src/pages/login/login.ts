import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RecuperarSenhaPage } from '../recuperar-senha/recuperar-senha';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';
import { HomePage } from '../home/home';
import { UsuarioService } from '../../domain/usuario-service';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    public email: string = "";
    public senha: string = "";

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private usuario_service: UsuarioService,
        public alert_controller: AlertController ) {
    }

    login() {
        this.usuario_service
        .efetuaLogin(this.email, this.senha)
        .then(success => {
            
                           
            
                            if (success.status == "logado") {
            
                              /* Retorna o id do cliente, nome */
            
                              window.localStorage.setItem("email", this.email);
            
                              this.navCtrl.setRoot(HomePage);
            
                            } else {
          
                              let  alerta = this.alert_controller.create({
                                title: "Aviso",
                               message: success.status,
                               // message: "Cadastrado com Sucesso",
                                buttons: ['OK']
                              })
                              .present();
            
                            }
            
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

    criarConta() {

        this.navCtrl.setRoot(CadastroUsuarioPage);

    }

    esqueceuSenha() {

        this.navCtrl.setRoot(RecuperarSenhaPage);

    }

}
