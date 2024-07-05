import { Atleta } from "./Atleta";

export interface Corredor extends Atleta{
    
    correr(): void;
    
    trotar(): void;
}