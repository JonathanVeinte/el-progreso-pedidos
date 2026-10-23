import { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import type { NuevoPedido, Pedido } from "./types";

export default function App() {
  // Los pedidos viven en memoria (un arreglo en el estado de React)
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const agregar = (nuevo: NuevoPedido) => {
    setPedidos((prev) => [{ id: prev.length + 1, ...nuevo }, ...prev]);
  };

  const cambiarEstado = (id: number) => {
    setPedidos((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, estado: p.estado === "Pendiente" ? "Entregado" : "Pendiente" }
          : p
      )
    );
  };

  const pendientes = pedidos.filter((p) => p.estado === "Pendiente").length;
  const entregados = pedidos.length - pendientes;

  return (
    <div className="app">
      <header>
        <h1>Distribuciones El Progreso</h1>
        <p>Registro y consulta de pedidos</p>
      </header>

      <div className="resumen">
        <div><strong>{pedidos.length}</strong> pedidos</div>
        <div className="r-pend"><strong>{pendientes}</strong> pendientes</div>
        <div className="r-ent"><strong>{entregados}</strong> entregados</div>
      </div>

      <main>
        <OrderForm onAgregar={agregar} />
        <OrderList pedidos={pedidos} onCambiarEstado={cambiarEstado} />
      </main>
    </div>
  );
}
