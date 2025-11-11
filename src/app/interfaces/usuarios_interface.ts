export interface Usuario {
  id: number;
  name: string;
  email: string;
  rol: 'admin' | 'invitado';
}

export type NuevoUsuario = Omit<Usuario, 'id'>;
