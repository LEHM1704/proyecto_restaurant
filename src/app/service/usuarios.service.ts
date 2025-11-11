import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario, Usuario } from '../interfaces/usuarios_interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiUrl = 'http://localhost/api/api_users.php';

  constructor(private http: HttpClient) {}
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<{ users: Usuario[] }>(this.apiUrl).pipe(map((response) => response.users));
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}?id=${id}`);
  }

  createUsuario(usuario: NuevoUsuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
}
