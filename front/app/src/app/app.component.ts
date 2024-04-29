import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaConductorComponent } from './lista-conductor/lista-conductor.component';
import { ListaShowComponent } from './lista-show/lista-show.component';
import { CommonModule, NgIf, NgFor,NgForOf } from '@angular/common';
import { PopupService } from './apiCalls/popup/popup.service';

import { app } from '../../server';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ListaConductorComponent,ListaShowComponent,NgIf,NgFor,NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {ngSkipHydration: 'true'}
})

export class AppComponent {
  title = 'app';
  programa=true;
  agregarShow=false;
  agregarConductor=false;

constructor(private popupService : PopupService){

}

  cambiarLista(): void{
    if (this.programa){
      this.programa=false;
    }else{
      this.programa=true;
    }

  }

  abrirAgregarShow(): void{
    this.popupService.openPopupAddShow();
  }

  abrirAgregarConductor(): void{
    this.popupService.openPopupAddConductor();
  }

ngOnInit(){
  this.programa=true;
}

}
