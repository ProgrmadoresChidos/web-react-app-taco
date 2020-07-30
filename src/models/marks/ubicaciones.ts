export interface Ubicaciones {
    nombre: string;
    calle: string;
    colonia: string;
    codigoPostal: number;
    correo: string;
    telefonos: string[];
    horarios: string[];
    geoLocalización : {
        lat: number;
        lng: number;
    };
}