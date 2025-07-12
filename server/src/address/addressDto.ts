import { User } from '../user/userDto';

export interface Address {
    id: number;
    street: string;
    house_number: number;
    cep: string;
    complement?: string | null; // Optional
    city: string; // Default: Recife
    state: string; // Default: Pernambuco
    user?: User;
}

export interface AddressCreateDTO {
    id: number;
    street: string;
    house_number: number;
    cep: string;
    complement?: string | null; // Optional
    city: string; // Default: Recife
    state: string; // Default: Pernambuco
}