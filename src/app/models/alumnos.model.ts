export interface Alumno_i {
  id: number,
  info: {
    nombre: string,
    apellido: string,
    edad: number,
    email: string,
    image: string
  }
  data: {
    estado: string,
    comision: number,
    cursos: Array<string>
  }
}