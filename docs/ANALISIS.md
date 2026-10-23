# Análisis y diseño: Operación Empresa Digital

**Empresa:** Distribuciones El Progreso (comercializa productos de aseo y papelería)

## 1. Problema
Los pedidos se registran en hojas de cálculo y anotaciones manuales. Esto causa pérdida de datos, errores y dificultad para saber en qué estado está cada pedido.

## 2. Solución propuesta
Una aplicación web sencilla donde se registren los pedidos (cliente, producto, cantidad y estado) y se consulten en una tabla que distingue visualmente los pendientes de los entregados.

## 3. Requerimientos

**Funcionales**
- **RF1.** El sistema debe permitir registrar un pedido con cliente, producto, cantidad y estado, validando que los campos obligatorios estén completos y que la cantidad sea un entero mayor que 0.
- **RF2.** El sistema debe mostrar los pedidos registrados en una tabla, identificando visualmente los pendientes y los entregados, y permitir cambiar el estado de un pedido.

**No funcional**
- **RNF1.** La interfaz debe ser clara y fácil de usar, y responder bien en pantallas de computador y de celular.

## 4. Relación requerimientos – funcionalidades
| Requerimiento | Dónde se cumple |
|---|---|
| RF1 | `src/components/OrderForm.tsx` (formulario y función `validar`) |
| RF2 | `src/components/OrderList.tsx` (tabla, etiquetas de color y botón de estado) |
| RNF1 | `src/styles.css` (diseño de una sola vista, colores por estado, diseño adaptable) |

## 5. Decisiones técnicas
- **React:** divide la interfaz en componentes reutilizables (formulario y lista).
- **TypeScript:** el tipo `Pedido` y el tipo `EstadoPedido` evitan errores, por ejemplo un estado mal escrito.
- **Vite:** arranca y compila rápido, ideal para un reto de 90 minutos.
- **Estado en memoria (`useState`):** el reto pide guardar en un vector; no se usa base de datos.

## 6. Boceto de la interfaz

```
+----------------------------------------------------------------+
|  Distribuciones El Progreso                                    |
|  Registro y consulta de pedidos                                |
|----------------------------------------------------------------|
|  [ 3 pedidos ]   [ 2 pendientes ]   [ 1 entregados ]           |
|                                                                |
|  +-------------------+   +-----------------------------------+ |
|  | Nuevo pedido      |   | #  Cliente  Producto  Cant. Estado| |
|  |                   |   |-----------------------------------| |
|  | Cliente  [______] |   |#3 Tienda X  Resma     10  PENDIENTE| |
|  | Producto [______] |   |#2 Colegio Y Jabón      5  ENTREGADO| |
|  | Cantidad [__]     |   |#1 Oficina Z Cuadernos 20  PENDIENTE| |
|  | Estado [Pendiente]|   |        [Marcar entregado]         | |
|  |                   |   +-----------------------------------+ |
|  | [Registrar pedido]|                                         |
|  +-------------------+                                         |
+----------------------------------------------------------------+
```
Rojo/naranja = pendiente · Verde = entregado.

## 7. Demostración (guion de 3 minutos)
1. Presentar el problema y los requerimientos.
2. Intentar registrar con campos vacíos: se muestran los errores.
3. Registrar el pedido 1: *Tienda La Esperanza, Papel higiénico x 12, 20, Pendiente*.
4. Registrar el pedido 2: *Colegio San José, Resma de papel carta, 15, Pendiente*.
5. Marcar uno como entregado y mostrar el cambio de color y los contadores.
6. Mostrar el repositorio en GitHub.
