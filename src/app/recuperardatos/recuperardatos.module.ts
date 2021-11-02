import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperardatosPageRoutingModule } from './recuperardatos-routing.module';

import { RecuperardatosPage } from './recuperardatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperardatosPageRoutingModule
  ],
  declarations: [RecuperardatosPage]
})
export class RecuperardatosPageModule {}
