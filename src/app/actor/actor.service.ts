import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorDetail } from './actor-detail/actor-detail';
@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private apiUrl: string = 'https://gist.githubusercontent.com/t-montes/a334bf6e621351c117d4833780a41df1/raw/884804cfbb6dd924c0652f9efed5a3272da60ff3/hollywood-actors.json';
  
  // Angular inyecta esto automáticamente; es importante para realizar las peticiones
  constructor(
    private http: HttpClient
  ) {}

  // Este método devuelve un objeto observable que más tarde emitirá la lista de productoras
  getActores(): Observable<ActorDetail[]> {
    // Especificamos que lo que venga de la petición es un arreglo de productoras
    return this.http.get<ActorDetail[]>(this.apiUrl);
    }

  getActor(actorId: string): Observable<ActorDetail> {
    return this.http.get<ActorDetail>(`${this.apiUrl}/${actorId}`);
    // Aquí igualmente se hace el cambio de `${this.apiUrl}/${productoraId}` a '${this.apiUrl}/${productoraId}/nombre.json'
  }
}
