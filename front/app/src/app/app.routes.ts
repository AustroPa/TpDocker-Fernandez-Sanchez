import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaConductorComponent } from './lista-conductor/lista-conductor.component';
import { EditarShowComponent } from './editar-show/editar-show.component';


export const routes: Routes = [
    { path: "", component : AppComponent},
    { path: "editar/:id", component: EditarShowComponent}
];
