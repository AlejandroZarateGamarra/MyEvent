export class Entrada {
  tipo: string;
  evento: string;
  precio: number;

  constructor(tipo: string, evento: string, precio: number) {
    this.tipo = tipo;
    this.evento = evento;
    this.precio = precio;
  }
}
export class Boleta {
  id:string;
  estado: string;
  usuario: string;
  fecha_pago: string;
  hora_pago: string;
  evento: string;
  metodo_pago: string;
  entradas: Entrada[];

  constructor(id:string,estado: string, usuario: string, fecha_pago: string, hora_pago: string, evento: string,metodo_pago:string, entradas: Entrada[]) {
    this.id = id;
    this.estado = estado;
    this.usuario = usuario;
    this.fecha_pago = fecha_pago;
    this.hora_pago = hora_pago;
    this.evento = evento;
    this.metodo_pago = metodo_pago;
    this.entradas = entradas;
  }
}
