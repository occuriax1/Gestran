class Publicacao {
    // Propriedades da classe definidas como somente leitura
    constructor(
        public readonly titulo: string,
        public readonly autor: string,
        public readonly anoPublicacao: number
    ) {}

    // Método que retorna a descrição da publicação
    descricao(): string {
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`;
    }
}

class Livro extends Publicacao {
    constructor(
        titulo: string,
        autor: string,
        anoPublicacao: number,
        public readonly ISBN: string 
    ) {
        super(titulo, autor, anoPublicacao);
    }

    // Sobrescrita do método descricao para incluir o ISBN
    descricao(): string {
        return `${super.descricao()}, ISBN: ${this.ISBN}`;
    }
}

class Periodico extends Publicacao {
    constructor(
        titulo: string,
        autor: string,
        anoPublicacao: number,
        public readonly ISSN: string 
    ) {
        super(titulo, autor, anoPublicacao);
    }

    // Sobrescrita do método descricao para incluir o ISSN
    descricao(): string {
        return `${super.descricao()}, ISSN: ${this.ISSN}`;
    }
}
