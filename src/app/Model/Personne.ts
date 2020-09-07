export class Personne {
    id: number;
    avatar: string;
    firstname: string;
    name: string;
    pseudo: string;
    email: string;    
    tel : string;

    constructor(id = 0, avatar = '', firstname = '', name = '', pseudo = '', email = '', tel='') {
        this.id = id;
        this.avatar = avatar;
        this.firstname = firstname;
        this.name = name;
        this.pseudo = pseudo;    
        this.email = email;
        this.tel = tel;        
    }
}
