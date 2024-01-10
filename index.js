class Hero {
    constructor(name, age, type, action){
        this.name = name
        this.age = age
        this.type = type  
    }

    atacar (){
        if (this.type == "guerreiro"){
            console.log(`O héroi ${this.name} da classe ${this.type} atacou usando espada`)
        } else if(this.type == "mago"){
            console.log(`O héroi ${this.name} da classe ${this.type} atacou usando magia`)
        } else if(this.type == "monge"){
            console.log(`O héroi ${this.name} da classe ${this.type} atacou usando artes marciais`)
        }else if(this.type == "ninja"){
            console.log(`O héroi ${this.name} da classe ${this.type} atacou usando shuriken`)
        } else{
            console.log("personagem não encontrado")
        }
    }
}

let heroi1 = new Hero("Neto", 26, "guerreiro")
let heroi2 = new Hero("Pedro", 26, "mago")
let heroi3 = new Hero("Vini", 26, "monge")
let heroi4 = new Hero("Paulo", 27, "ninja")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()


