
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

function excluirPessoas(lista,posicao) {
	lista.splice(posicao, 1);
}

function alterarPessoas(lista,pessoa,posicao) {
	lista[posicao] = pessoa;
}

function confirmaExclusao() {
    if (confirm('Tem certeza que deseja excluir?')) {
        let posicaoExcluir = $(this).attr('rel');
        excluirPessoas(listaPessoas, posicaoExcluir);
        $('#tbTabela').html(listarPessoas(listaPessoas));
    }
}

function listarPessoas(lista) {

    lista.sort(function (a,b) {
        if(a.idade < b.idade) {
            return 1
        }
        if(a.idade > b.idade) {
            return -1
        }
        return 0
    })

	let auxHtml = '';
	for (let i = 0; i < lista.length; i++) {
		auxHtml += '<tr>'+
                        '<td>'+ lista[i].nome +'</td>'+
                        '<td>'+ lista[i].idade +'</td>'+
                        '<td>'+
                        '<a class="btn btn-warning" rel="'+ i +'">'+
                          '<i class="fas fa-edit"></i>'+
                        '</a>'+
                      '</td>'+
                      '<td>'+
                        '<a class="btn btn-danger" rel="'+ i +'">'+
                             '<i class="fas fa-remove"></i>'+
                        '</a>'+
                      '</td>'+
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
        if (auxPosicao == '') {
            cadastrarPessoas(novaPessoa);
        } else {
            alterarPessoas(listaPessoas,novaPessoa,auxPosicao);
            auxPosicao = '';
        }
        
        $('#tbTabela').html(listarPessoas(listaPessoas));
        $('input').val('');
	})

    $('#btnCancelar').click(() => {
		auxPosicao = '';
		$('input').val('');
	});


    $('#tbTabela').on('click', '.btn-warning', function() {
		auxPosicao = $(this).attr('rel');
		$('#nome').val(listaPessoas[auxPosicao].nome);
		$('#idade').val(listaPessoas[auxPosicao].idade);
	});


    $('#tbTabela').on('click', '.btn-danger', function() {
       confirmaExclusao()
    });
})

