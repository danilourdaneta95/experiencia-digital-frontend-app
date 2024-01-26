export interface LibraryData {
    biblioteca: Biblioteca
}

export interface Biblioteca {
    estado: string
    numero_prestamos: number
    multas: number
    codigo_barra: string
    rut: string
    prestamos: Prestamo[]
}

export interface Prestamo {
    nombre_corto: string
    nombre_largo: string
    inicio: string
    vencimiento: string
}
