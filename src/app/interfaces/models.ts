
export interface Asignatura {
  id: number;
  create_at: Date;
  update_at: Date;
  is_active: boolean;
  nombre: string;
  codigo: string;
}

export interface Profesor {
  id: number;
  create_at: Date;
  update_at: Date;
  is_active: boolean;
  nombre: string;
  correo: string;
  telefono: string;
}

export interface Clase {
  id: number;
  create_at: Date;
  update_at: Date;
  is_active: boolean;
  salon: string;
  Horario: string;
  asignatura: number;
  profesor: number;
}
