// Info do Dono
const nomeDono = document.getElementById("NameDono");
const IdadeDono = document.getElementById("yearDono");
const CpfDono = document.getElementById("cpfDono");
const teleFone = document.getElementById("telefone");
const emailDono = document.getElementById("emailDono");

// Botões de captura
const Enviar = document.getElementById("Enviar");
const ExcluirUltima = document.getElementById("ExcluirUltima");

// Local de exibição (lista onde as novas linhas serão adicionadas)
const lista = document.querySelector(".returnList");

// Modelo do dono
class Dono {
    constructor(nomeDono, IdadeDono, CpfDono, teleFone, emailDono) {
        this.nomeDono = nomeDono;
        this.IdadeDono = IdadeDono;
        this.CpfDono = CpfDono;
        this.teleFone = teleFone;
        this.emailDono = emailDono;
    }

    getInfoText() {
        return `
            Nome: ${this.nomeDono}, 
            Idade: ${this.IdadeDono}, 
            CPF: ${this.CpfDono}, 
            Telefone: ${this.teleFone}, 
            Email: ${this.emailDono}
        `;
    }
}

// Função para criar e exibir um novo item na lista
function adicionarItem() {
    const novoInfo = new Dono(
        nomeDono.value,
        IdadeDono.value,
        CpfDono.value,
        teleFone.value,
        emailDono.value
    );

    const novoItem = document.createElement("li");
    novoItem.innerText = novoInfo.getInfoText();

    // Botão para editar o item
    const btnEditar = document.createElement("button");
    btnEditar.innerText = "Editar";
    btnEditar.addEventListener("click", () => editarItem(novoItem, novoInfo));

    // Botão para excluir o item
    const btnExcluir = document.createElement("button");
    btnExcluir.innerText = "Excluir";
    btnExcluir.addEventListener("click", () => excluirItem(novoItem));

    // Adiciona os botões ao item
    novoItem.appendChild(btnEditar);
    novoItem.appendChild(btnExcluir);

    // Adiciona o item completo à lista
    lista.appendChild(novoItem);
}

// Função para editar um item existente
function editarItem(item, donoInfo) {
    const novoNome = prompt("Nome do Dono:", donoInfo.nomeDono);
    const novaIdade = prompt("Idade do Dono:", donoInfo.IdadeDono);
    const novoCpf = prompt("CPF do Dono:", donoInfo.CpfDono);
    const novoTelefone = prompt("Telefone:", donoInfo.teleFone);
    const novoEmail = prompt("Email:", donoInfo.emailDono);

    donoInfo.nomeDono = novoNome || donoInfo.nomeDono;
    donoInfo.IdadeDono = novaIdade || donoInfo.IdadeDono;
    donoInfo.CpfDono = novoCpf || donoInfo.CpfDono;
    donoInfo.teleFone = novoTelefone || donoInfo.teleFone;
    donoInfo.emailDono = novoEmail || donoInfo.emailDono;

    item.innerText = donoInfo.getInfoText();
    item.appendChild(item.querySelector("button"));
    item.appendChild(item.querySelector("button"));
}

// Função para excluir um item específico
function excluirItem(item) {
    lista.removeChild(item);
}

// Função para excluir a última linha da lista
ExcluirUltima.addEventListener("click", () => {
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    } else {
        alert("A lista já está vazia!");
    }
});

// Evento para adicionar um novo item na lista
Enviar.addEventListener("click", adicionarItem);
