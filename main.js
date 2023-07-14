class Empresa {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    mostrarInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Endereço: ${this.endereco}`);
    }
}

class Cliente extends Empresa {
    constructor(nome, endereco, telefone) {
        super(nome, endereco);
        this.telefone = telefone;
    }

    mostrarInformacoes() {
        super.mostrarInformacoes();
        console.log(`Telefone: ${this.telefone}`);
    }
}

class Funcionario extends Empresa {
    constructor(nome, endereco, cargo) {
        super(nome, endereco);
        this.cargo = cargo;
    }

    mostrarInformacoes() {
        super.mostrarInformacoes();
        console.log(`Cargo: ${this.cargo}`);
    }
}

const cliente1 = new Cliente("João", "Rua A, 123", "123456789");
const funcionario1 = new Funcionario("Maria", "Rua B, 456", "Gerente");
const cliente2 = new Cliente("Pedro", "Rua C, 789", "987654321");

cliente1.mostrarInformacoes();
funcionario1.mostrarInformacoes();
console.log(cliente2.endereco);
