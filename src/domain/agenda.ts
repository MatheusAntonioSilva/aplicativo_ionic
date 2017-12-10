export class Agenda{
    
        constructor(
        
         public descricao: string,
         public data: string,
         public name: string,
         public horario_inicio: string,
         public horario_fim: string, 
         public user: string,  
         public produto_id: string,
         public motivo_id: string, 
         public observacao: string, 
         public client_id:string
        ){}
    }