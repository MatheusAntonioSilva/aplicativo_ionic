import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EscolhaPage } from '../pages/escolha/escolha';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastroUsuarioPageModule } from '../pages/cadastro-usuario/cadastro-usuario.module';
import { RecuperarSenhaPageModule } from '../pages/recuperar-senha/recuperar-senha.module';
import { UsuarioService } from '../domain/usuario-service';
import { AgendaService } from '../domain/agenda-service';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        EscolhaPage,
        CadastroPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        CadastroUsuarioPageModule,
        RecuperarSenhaPageModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: 'Voltar',
            mode: 'md'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        EscolhaPage,
        CadastroPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        UsuarioService,
        AgendaService
    ]
})
export class AppModule { }
