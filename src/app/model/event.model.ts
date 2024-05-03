export interface Event {
  id: number;
  tipo: string;
  nombre: string;
  fecha: string;
  hora: string;
  lugar: string;
  precio_entrada: number;
  descripcion: string;
  artista?: string;
  dj?: string;
  organizador?: string;
}
