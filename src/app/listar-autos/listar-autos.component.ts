import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  constructor(private auto: AutosService) { }
  ngOnInit(): void {
    this.getAutos();
  }

  
   autos:any[] = [];
   lista: any[] = [];

  getAutos(){
    this.auto.listarAutos().subscribe(res => {
      console.log(res);
      if(res){
        this.autos = res;
        this.lista = res;
      }      
    })
  }

 eliminarAuto(autoSelect: any){
    this.auto.eliminarAuto(autoSelect).subscribe(
      (res) => {
        const index = this.autos.indexOf(autoSelect);
        if(index > -1){
          this.autos.splice(index,1);
          this.lista = this.autos;
        }

      },
      (err) => {
        console.log(err);
        
      }
    ) 

  }

  buscarAuto(value: any){
    let text = value.target.value;
    this.autos = [...this.lista.filter(elem => elem['marca'].toLowerCase().includes(text))]
    
  }

  

}
