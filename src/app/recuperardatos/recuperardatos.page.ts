import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperardatos',
  templateUrl: './recuperardatos.page.html',
  styleUrls: ['./recuperardatos.page.scss'],
})
export class RecuperardatosPage {
  constructor(private router: Router) {
    this.router.navigate(['recupdato/pasta']);
  }
  segmentChanged($event){
    //console.log($event.detail.value);
    //let direction=$event.detail.value;
    this.router.navigate(['recupdato/'+ $event.detail.value]);
  }

}
