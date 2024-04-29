import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { conductor } from '../conductor';
import { TraerConductoresService } from '../apiCalls/traer-conductores.service';
import { AppComponent } from '../app.component';
import { MatTableModule } from '@angular/material/table';
import { PopupService } from '../apiCalls/popup/popup.service';

@Component({
  selector: 'lista-conductor',
  standalone: true,
  imports: [AppComponent,MatTableModule,NgFor,NgForOf,CommonModule],
  templateUrl: './lista-conductor.component.html',
  styleUrl: './lista-conductor.component.css'
})
export class ListaConductorComponent {
  @Input() conductor!: any;
  listaConductor: conductor[] = [];
  resultados: conductor[] = [];

  servicios: TraerConductoresService = inject(TraerConductoresService);
  constructor(private servicio:TraerConductoresService, private popupService: PopupService){
      
      this.servicios.getAllConductores().subscribe((data: any) => {

      if(data && data.conductores && Array.isArray(data.conductores)) {
        this.listaConductor=data.conductores;
      }

      this.resultados=this.listaConductor;
    });
}

ngOnInit()
{
  
}


filtrarResultados(text: string) {
  if (!text) {
    this.resultados = this.listaConductor;
    return;
  }
  this.resultados = this.listaConductor.filter(
    conductorActual => conductorActual?.nombre.toLowerCase().includes(text.toLowerCase())
  );
}
onSubmit(e: { preventDefault: () => void; }, texto:string){
  if (e) e.preventDefault();
  this.filtrarResultados(texto);
}

openPopup(id: number) { 
  this.popupService.openPopupUpdateConductor(id);
}

borrarConductor(id:number) {
  this.servicio.deleteConductor(id).subscribe();
  location.reload();
}

}