// Classe existente (Tomada antiga)
class TomadaAntiga {
    conectar() {
      return "Conectado à tomada antiga!";
    }
  }
  
  // Nova interface esperada
  class TomadaNova {
    ligar() {
      return "Conectado à tomada nova!";
    }
  }
  
  // Adaptador que traduz TomadaAntiga para TomadaNova
  class AdaptadorTomada extends TomadaNova {
    constructor(tomadaAntiga) {
      super();
      this.tomadaAntiga = tomadaAntiga;
    }
  
    ligar() {
      return this.tomadaAntiga.conectar(); // Reutiliza a lógica da tomada antiga
    }
  }
  
  // Uso do adaptador
  const tomadaAntiga = new TomadaAntiga();
  const adaptador = new AdaptadorTomada(tomadaAntiga);
  
  console.log(adaptador.ligar()); // "Conectado à tomada antiga!"
  