// Classe base
class CaféSimples {
    custo() {
      return 5; // Custo base do café
    }
  
    descricao() {
      return "Café simples";
    }
  }
  
  // Decorador base
  class DecoradorCafé {
    constructor(café) {
      this.café = café;
    }
  
    custo() {
      return this.café.custo();
    }
  
    descricao() {
      return this.café.descricao();
    }
  }
  
  // Decorador: adiciona leite ao café
  class CaféComLeite extends DecoradorCafé {
    custo() {
      return this.café.custo() + 2; // Adiciona o custo do leite
    }
  
    descricao() {
      return this.café.descricao() + ", com leite";
    }
  }
  
  // Decorador: adiciona açúcar ao café
  class CaféComAçúcar extends DecoradorCafé {
    custo() {
      return this.café.custo() + 1; // Adiciona o custo do açúcar
    }
  
    descricao() {
      return this.café.descricao() + ", com açúcar";
    }
  }
  
  // Uso dos decorators
  let café = new CaféSimples();
  console.log(`${café.descricao()} - R$${café.custo()}`); // Café simples - R$5
  
  café = new CaféComLeite(café);
  console.log(`${café.descricao()} - R$${café.custo()}`); // Café simples, com leite - R$7
  
  café = new CaféComAçúcar(café);
  console.log(`${café.descricao()} - R$${café.custo()}`); // Café simples, com leite, com açúcar - R$8
  