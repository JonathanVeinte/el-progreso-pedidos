import type { Pedido } from "../types";

interface Props {
  pedidos: Pedido[];
  onCambiarEstado: (id: number) => void;
}

export default function OrderList({ pedidos, onCambiarEstado }: Props) {
  if (pedidos.length === 0) {
    return (
      <div className="panel vacio">
        <p>Aún no hay pedidos.</p>
        <p>Registra el primero con el formulario.</p>
      </div>
    );
  }

  return (
    <div className="panel tabla-wrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Cliente</th>
            <th>Producto</th>
            <th>Cant.</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((p) => (
            <tr key={p.id} className={p.estado === "Pendiente" ? "pendiente" : "entregado"}>
              <td>{p.id}</td>
              <td>{p.cliente}</td>
              <td>{p.producto}</td>
              <td>{p.cantidad}</td>
              <td>
                <span className={`etiqueta ${p.estado.toLowerCase()}`}>{p.estado}</span>
              </td>
              <td>
                <button className="btn-link" onClick={() => onCambiarEstado(p.id)}>
                  {p.estado === "Pendiente" ? "Marcar entregado" : "Volver a pendiente"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
