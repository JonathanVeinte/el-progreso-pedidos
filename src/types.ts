export type EstadoPedido = "Pendiente" | "Entregado";

export interface Pedido {
  id: number;
  cliente: string;
  producto: string;
  cantidad: number;
  estado: EstadoPedido;
}

export type NuevoPedido = Omit<Pedido, "id">;
