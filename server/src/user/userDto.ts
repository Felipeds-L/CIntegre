import { Address } from "../address/addressDto";

export interface User {
    id: number; 
    username: string;
    name: string;
    email: string;
    password: string;
    address_id: number;  
    address?: Address;
    phone_number: string;
}

export interface UserCreateDTO {
  username: string;
  name: string;
  email: string;
  password: string;
  address_id: number;  // só a FK
  phone_number: string;
}