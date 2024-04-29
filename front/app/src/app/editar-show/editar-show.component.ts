import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { TraerShowsService } from '../apiCalls/traer-shows.service';
import { IShow } from '../show';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PopupService } from '../apiCalls/popup/popup.service';
import { MatDialogModule } from '@angular/material/dialog';




@Component({
  selector: 'app-editar-show',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterOutlet,RouterModule,NgClass,MatDialogModule],
  templateUrl: './editar-show.component.html',
  styleUrl: './editar-show.component.css'
})

export class EditarShowComponent {

  show: IShow | any;
  servicios: TraerShowsService = inject(TraerShowsService);
  static id: number;
  constructor(private servicio:TraerShowsService,private popupService: PopupService){
    this.servicio.getOneShow(EditarShowComponent.id).subscribe((data:any) => {
      console.log(data);
      this.show = data.shows})
  }



applyForm = new FormGroup({
    nombre: new FormControl(''),
    foto: new FormControl(''),
    idConductores: new FormControl(''),
    duracion: new FormControl(''),
    horaInicio:new FormControl(''),
    horaFinal : new FormControl('')
  });

updateShow(formData: any){
    const body = 
    {
      shows:{
        id: this.show.id,
        nombre: formData.nombre,
        foto : formData.foto,
        idConductores: formData.idConductores,
        duracion: formData.duracion,
        horaInicio: formData.horaInicio,
        horaFinal: formData.horaFinal,
      }
    }
    console.log(body.shows.foto);
    return this.servicios.updateShow(EditarShowComponent.id, body).subscribe()
  }

  public submitApplication(){
    const formData = this.applyForm.value;
    this.updateShow(formData);
  location.reload();
  }

  closePopup(){
    this.popupService.closePopup();
  }

  static setId(id:number){
    this.id=id;
  }
}



