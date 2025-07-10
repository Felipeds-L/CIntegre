export interface User {
    id: number ; 
    username: string;
    nome: string;
    email: string;
    adress_id: number; 
    address: number; // Foreign Key to Address.id
    numeroContato: string;
}