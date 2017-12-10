import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroUsuarioPage } from './cadastro-usuario';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
    declarations: [
        CadastroUsuarioPage,
    ],
    imports: [
        TextMaskModule,
        IonicPageModule.forChild(CadastroUsuarioPage),

    ],
})
export class CadastroUsuarioPageModule { }
