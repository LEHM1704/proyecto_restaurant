import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producto } from '../interfaces/productos_interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'http://localhost/api/api_productos.php';
  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http
      .get<{ productos: Producto[] }>(this.apiUrl)
      .pipe(map((response) => response.productos));
  }

  postProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  getProductoById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}?id=${id}`);
  }

  updateProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}?id=${producto.id}`, producto);
  }
}
