import { Component } from '@angular/core';

interface Orden {
  numero: string;
  cliente: string;
  fecha: string;
  total: number;
  estado: 'pendiente' | 'procesando' | 'completado' | 'cancelado';
}


@Component({
  selector: 'app-ordenes',
  imports: [],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {

  ordenes: Orden[] = [
    { numero: '001', cliente: 'Juan Pérez', fecha: '2025-05-28', total: 150, estado: 'pendiente' },
    { numero: '002', cliente: 'Ana García', fecha: '2025-05-27', total: 99.99, estado: 'completado' },
    { numero: '003', cliente: 'Carlos Ruiz', fecha: '2025-05-26', total: 240.5, estado: 'procesando' },
  ];

  ordenesFiltradas: Orden[] = [...this.ordenes];
  busqueda: string = '';
  estadoSeleccionado: string = '';

  filtrarOrdenes() {
    this.ordenesFiltradas = this.ordenes.filter((orden) =>
      orden.numero.includes(this.busqueda) &&
      (this.estadoSeleccionado === '' || orden.estado === this.estadoSeleccionado)
    );
  }

  verOrden(numero: string) {
    alert(`Viendo orden #${numero}`);
  }

  editarOrden(numero: string) {
    alert(`Editando orden #${numero}`);
  }

}
