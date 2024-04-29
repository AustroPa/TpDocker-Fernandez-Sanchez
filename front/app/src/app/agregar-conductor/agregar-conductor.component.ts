import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TraerConductoresService } from '../apiCalls/traer-conductores.service'; 
import { PopupService } from '../apiCalls/popup/popup.service';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-agregar-conductor',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './agregar-conductor.component.html',
  styleUrl: './agregar-conductor.component.css'
})
export class AgregarConductorComponent {
 
  servicios: TraerConductoresService = inject(TraerConductoresService);
  constructor(private popupService: PopupService){}
  applyForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl('')
  });


  public addConductor(formData: any){
    const body = 
    {
      conductores:{
        nombre: formData.nombre,
        apellido: formData.apellido,
        edad: formData.edad,
        id: formData.id
      }
    }
    return this.servicios.addConductor(body).subscribe()
  }

  public submitApplication(){
    const formData = this.applyForm.value;
    this.addConductor(formData)
    location.reload();
  }

  closePopup(){
    this.popupService.closePopup();
  }
}



