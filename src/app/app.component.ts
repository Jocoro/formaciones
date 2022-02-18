import { Component } from '@angular/core';
import { Formacion, FormacionesService } from './formaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formaciones';
  formaciones:Formacion[]
  constructor(service:FormacionesService){
    service.formaciones().subscribe(data=>this.formaciones=data)
  }
}
