
class pessoa {
    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

var listaPessoas = [];
var auxPosicao = '';

function cadastrarPessoas(pessoa) {
    if (listaPessoas.find(element => element.nome === pessoa.nome) != undefined) {
        alert("Ja existe um cadastro com esse nome de usuario!!")
    } else {
        listaPessoas.push(pessoa) 
     }
}

function listarPessoas(lista) {
	let auxHtml = '';
	for (let i = 0; i < lista.length; i++) {
        auxHtml += '<tr>'+
                        '<td>'+ lista[i].nome +'</td>'+
                        '<td>'+ lista[i].idade +'</td>'+
                '</tr>';
	}
	return auxHtml;
}

$(document).ready(() => {
	$('#exibir').click(() => {
		// let nome = document.getElementById('nome').value;
		let nome = $('#nome').val();
		let idade = $('#idade').val();

        let novaPessoa = new pessoa(nome,idade);
        cadastrarPessoas(novaPessoa);

        $('#tbTabela').html(listarPessoas(listaPessoas));
        $('input').val('');
	})
})