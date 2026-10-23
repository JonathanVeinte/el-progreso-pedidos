import { useState } from "react";
import type { EstadoPedido, NuevoPedido } from "../types";

interface Props {
  onAgregar: (pedido: NuevoPedido) => void;
}

interface Errores {
  cliente?: string;
  producto?: string;
  cantidad?: string;
}

export default function OrderForm({ onAgregar }: Props) {
  const [cliente, setCliente] = useState("");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [estado, setEstado] = useState<EstadoPedido>("Pendiente");
  const [errores, setErrores] = useState<Errores>({});

  // Valida los campos obligatorios y devuelve los errores encontrados
  const validar = (): Errores => {
    const e: Errores = {};
    if (!cliente.trim()) e.cliente = "Escribe el nombre del cliente.";
    if (!producto.trim()) e.producto = "Escribe el producto.";
    const n = Number(cantidad);
    if (!cantidad.trim()) e.cantidad = "Escribe la cantidad.";
    else if (!Number.isInteger(n) || n <= 0)
      e.cantidad = "La cantidad debe ser un número entero mayor que 0.";
    return e;
  };

  const manejarEnvio = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validar();
    setErrores(e);
    if (Object.keys(e).length > 0) return;

    onAgregar({
      cliente: cliente.trim(),
      producto: producto.trim(),
      cantidad: Number(cantidad),
      estado,
    });
    setCliente("");
    setProducto("");
    setCantidad("");
    setEstado("Pendiente");
  };

  return (
    <form className="panel form" onSubmit={manejarEnvio} noValidate>
      <h2>Nuevo pedido</h2>

      <label>
        Cliente
        <input
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          placeholder="Ej: Tienda La Esperanza"
          aria-invalid={!!errores.cliente}
        />
        {errores.cliente && <span className="error">{errores.cliente}</span>}
      </label>

      <label>
        Producto
        <input
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          placeholder="Ej: Papel higiénico x 12"
          aria-invalid={!!errores.producto}
        />
        {errores.producto && <span className="error">{errores.producto}</span>}
      </label>

      <div className="fila">
        <label>
          Cantidad
          <input
            type="number"
            min={1}
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            placeholder="0"
            aria-invalid={!!errores.cantidad}
          />
          {errores.cantidad && <span className="error">{errores.cantidad}</span>}
        </label>

        <label>
          Estado
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value as EstadoPedido)}
          >
            <option>Pendiente</option>
            <option>Entregado</option>
          </select>
        </label>
      </div>

      <button type="submit" className="btn-principal">
        Registrar pedido
      </button>
    </form>
  );
}
