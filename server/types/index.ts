export interface User {
    id: number ; 
    username: string;
    nome: string;
    email: string;
    adress_id: number; 
    address: number; // Foreign Key to Address.id
    numeroContato: string;
}


export interface School {
    id: number;
    cnpj: string;
    numero_estudantes: number;
    pontos_acumulados: number;
    //acaoEscola: AcaoEscola;
}

export interface Address {
    id: number;
    rua: string;
    numero: number;
    cep: string;
    complemento?: string; // Optional
    cidade: string; // Default: Recife
    estado: string; // Default: Pernambuco
    user: User;
}