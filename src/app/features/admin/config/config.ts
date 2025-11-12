import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../service/mensaje.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.html',
  styleUrls: ['./config.scss'],
})
export class Config implements OnInit {
  // 2. Variables para la vista
  public mensajeApi: string | null = null;
  public errorApi: string | null = null;

  // 3. Inyecta tu ConfigService
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.mensajeApi = 'Cargando...'; // Mensaje inicial
    this.errorApi = null;

    // 4. Llama al método del servicio
    this.configService.getMensaje().subscribe({
      // Si todo va bien
      next: (data) => {
        this.mensajeApi = data.mensaje;
      },

      // Si hay un error
      error: (err) => {
        console.error('Error al llamar a la API de mensaje', err);
        this.errorApi = 'No se pudo cargar el mensaje de la API.';
        this.mensajeApi = null; // Ocultamos el "Cargando..."
      },
    });
  }
}
