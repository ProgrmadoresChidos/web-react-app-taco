export interface IDatoNegocio {
    address: string;
    phoneNumber: string;
    email: string;
    horarios: [ 
        {
            dias: string,
        }
    ]
}