import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { TraerShowsService } from '../apiCalls/traer-shows.service';
import { conductor } from '../conductor';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PopupService } from '../apiCalls/popup/popup.service';
import { MatDialogModule } from '@angular/material/dialog';
import { TraerConductoresService } from '../apiCalls/traer-conductores.service';


@Component({
  selector: 'app-editar-conductor',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterOutlet,RouterModule,NgClass,MatDialogModule],
  templateUrl: './editar-conductor.component.html',
  styleUrl: './editar-conductor.component.css'
})
export class EditarConductorComponent {

  conductor: conductor | any;
  servicios: TraerConductoresService = inject(TraerConductoresService);
  static id: number;
  constructor(private servicio:TraerConductoresService,private popupService: PopupService){
    this.servicio.getOneConductor(EditarConductorComponent.id).subscribe((data:any) => {
      this.conductor = data.conductores})
  }



applyForm = new FormGroup({
    nombre: new FormControl(''),
    apellido:new FormControl(''),
    edad: new FormControl('')
  });

updateShow(formData: any){
    const body = 
    {
      conductores:{
        id: this.conductor.id,
        nombre: formData.nombre,
        apellido: formData.apellido,
        edad: formData.edad,
      }
    }
    console.log(body);
    return this.servicios.updateConductor(EditarConductorComponent.id, body).subscribe()
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


