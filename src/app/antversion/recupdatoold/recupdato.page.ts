import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Recuperar } from '../../models/recuperar';

@Component({
  selector: 'app-recupdato',
  templateUrl: './recupdato.page.html',
  styleUrls: ['./recupdato.page.scss'],
})
export class RecupdatoPage implements OnInit {
  public recuperar: Recuperar;
  constructor(private router: Router,
     private toastController: ToastController) {
       this.recuperar = new Recuperar();
       this.recuperar.nombreUsuario= '';
       this.recuperar.palabraSecreta = '';
       this.recuperar.pass = '';
       this.recuperar.confirmPass = '';
      }

  ngOnInit() {
  }
  public ingresar1(): void{
    if(!this.validarUsuario(this.recuperar)){
      return;
    }
  }
  public validarUsuario(recuperar: Recuperar): boolean {
    const mensajeError = recuperar.validarUsuario();
    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }

  }
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();}
  login(){
    this.router.navigate(['/login']);
  }
  home(){
    this.router.navigate(['/home']);
  }

}
