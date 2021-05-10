import { Component } from '@angular/core';
import { CategoriasService } from './services/categorias.service';
import { ShippersService } from './services/shippers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejmploApis';

  public categorias: Array <any> = []
  public shippers: Array <any> = []
  constructor(private CategoriasService: CategoriasService , private ShippersService: ShippersService){
    this.CategoriasService.getCategorias().subscribe((resp: any) => {
      this.categorias = resp
    })
    this.ShippersService.getShippers().subscribe((x:any)=>{
    this.shippers = x
    })
  }
 

}
