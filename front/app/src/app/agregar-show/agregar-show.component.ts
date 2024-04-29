import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TraerShowsService } from '../apiCalls/traer-shows.service';
import { PopupService } from '../apiCalls/popup/popup.service';

@Component({
  selector: 'app-agregar-show',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './agregar-show.component.html',
  styleUrl: './agregar-show.component.css'
})


export class AgregarShowComponent {
 
  servicios: TraerShowsService = inject(TraerShowsService);
  constructor(private popupService: PopupService){}
  applyForm = new FormGroup({
    id: new FormControl(''),
    foto: new FormControl(''),
    nombre: new FormControl(''),
    idConductores: new FormControl(''),
    duracion: new FormControl(''),
    horaInicio: new FormControl(''),
    horaFinal: new FormControl('')
  });


  public addShows(formData: any){
    const body = 
    {
      shows:{
        id: formData.id,
        foto: formData.foto,
        nombre: formData.nombre,
        idConductores: formData.idConductores,
        duracion: formData.duracion,
        horaInicio: formData.horaInicio,
        horaFinal: formData.horaFinal,
      }
    }
    return this.servicios.addShow(body).subscribe();
  }

  public submitApplication(){
    const formData = this.applyForm.value;
    this.addShows(formData);
    location.reload();
  }

  closePopup(){
    this.popupService.closePopup();
  }
}
