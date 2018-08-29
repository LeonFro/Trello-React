export class ModalGreetService{
    storage;
    constructor(db){
        this.storage=db;  
    }
    
   getAll(){
       return this.storage
   };

   changeName(name){
    this.storage.name=name;
   }
};