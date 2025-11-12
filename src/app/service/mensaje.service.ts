// src/app/service/config.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeResponse } from '../interfaces/mensaje_interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  // 2. La URL de tu nueva API
  private apiUrl = 'http://localhost/api/api_mensaje.php';

  constructor(private http: HttpClient) {}

  // 3. Método para obtener solo ese mensaje
  getMensaje(): Observable<MensajeResponse> {
    return this.http.get<MensajeResponse>(this.apiUrl);
  }
}
