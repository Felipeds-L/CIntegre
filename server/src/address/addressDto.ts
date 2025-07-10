import { User } from '../user/userDto';

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