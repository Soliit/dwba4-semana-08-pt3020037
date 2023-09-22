class Aluno {
  
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return 'Nome do aluno: ' + this.primeiroNome + ' ' + this.segundoNome;
  }

  media() {
    return '\nMédia: ' + ((this.primeiraNota * 0.6) + (this.segundaNota * 0.4));
  }

  situacao() {
    if ((this.primeiraNota * 0.6) + (this.segundaNota * 0.4) > 6) {
      return '\nAprovado';
    }
    else {
      return '\nReprovado';
    }
  }

  mostrarAlerta(){
    alert(this.nomeCompleto() + this.media() + this.situacao());
  }
  
}

const aluno1 = new Aluno('Victor', 'Rocha', 7, 6.5);
const aluno2 = new Aluno('Rodrigo', 'Faro', 5, 10);
const aluno3 = new Aluno('Marcelinha', 'Vitória', 9, 9.5);
const aluno4 = new Aluno('Jussara', 'Campos', 8, 7);
const aluno5 = new Aluno('Camilo', 'Prado', 7.5, 8);

const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

for (let i = 0; i < alunos.length; i++) {
  alunos[i].mostrarAlerta();
}