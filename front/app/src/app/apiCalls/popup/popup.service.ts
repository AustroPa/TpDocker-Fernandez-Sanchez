import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarShowComponent } from '../../editar-show/editar-show.component';
import { EditarConductorComponent } from '../../editar-conductor/editar-conductor.component';
import { AgregarShowComponent } from '../../agregar-show/agregar-show.component';
import { AgregarConductorComponent } from '../../agregar-conductor/agregar-conductor.component';

@Injectable({
  providedIn: 'root',
})

export class PopupService {
  constructor(private dialog: MatDialog) {}

  openPopupUpdateShow(id:number) {
    EditarShowComponent.setId(id);
    this.dialog.open(EditarShowComponent);
  }

  openPopupUpdateConductor(id:number) {
    EditarConductorComponent.setId(id);
    this.dialog.open(EditarConductorComponent);
  }

  openPopupAddShow(){
    this.dialog.open(AgregarShowComponent)
  }

  openPopupAddConductor(){
    this.dialog.open(AgregarConductorComponent)
  }

  closePopup(){
    this.dialog.closeAll();
  }  
}