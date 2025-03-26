class Handler {
    constructor(nextHandler = null) {
        this.nextHandler = nextHandler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return "Nenhum manipulador pôde processar a requisição.";
    }
}
class Supervisor extends Handler {
    handle(request) {
        if (request.amount <= 1000) {
            return `Supervisor aprovou o pedido de R$${request.amount}`;
        }
        return super.handle(request);
    }
}

class Gerente extends Handler {
    handle(request) {
        if (request.amount <= 5000) {
            return `Gerente aprovou o pedido de R$${request.amount}`;
        }
        return super.handle(request);
    }
}

class Diretor extends Handler {
    handle(request) {
        if (request.amount <= 10000) {
            return `Diretor aprovou o pedido de R$${request.amount}`;
        }
        return "Pedido rejeitado! Valor muito alto.";
    }
}
const chain = new Supervisor(new Gerente(new Diretor()));

console.log(chain.handle({ amount: 800 }));   // Supervisor aprovou o pedido de R$800
console.log(chain.handle({ amount: 3000 }));  // Gerente aprovou o pedido de R$3000
console.log(chain.handle({ amount: 8000 }));  // Diretor aprovou o pedido de R$8000
console.log(chain.handle({ amount: 15000 })); // Pedido rejeitado! Valor muito alto.
