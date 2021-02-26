import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutosService {
  constructor(private http: HttpClient) {}

  private urlBack = 'http://localhost:3000/api/auto/';

  crearAuto(auto: any) {
    return this.http.post<any>(this.urlBack, auto);
  }

  editarAuto(auto: any) {
    return this.http.put<any>(this.urlBack+auto.id, auto);
  }

  listarAutos() {
    return this.http.get<any>(`${this.urlBack}listaAutos`);
  }

  eliminarAuto(auto: any){
    let _id = auto._id;

    return this.http.delete(this.urlBack+_id)
  }

}
