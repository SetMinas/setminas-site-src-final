export interface LoteamentoType {
    nome: string;
    cidade: string;
    descricao: string;
    conceito: string;
    caracteristicas: string[];
    galeria: string[];
    mapSrc: string;
    status: string;
    tags: string[];
    index: number;
    office: {
        contact: string;
        mapSrc: string;
    }
}