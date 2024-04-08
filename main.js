const form = document.getElementById('form-cadastro');
const imgCadastrado = '<img src ="./img/checklist.png" alt ="checklist simbolo" ;>';
const imgFalhou = '<img src ="./img/falhou.jpeg" alt ="checklist falhou" ;>';

let linhas = '';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const InputNome = document.getElementById('nome-pessoa');
    const InputTelefone = document.getElementById('telefone-pessoa');

    let linha = '<tr>';
        linha += `<td>${InputNome.value}</td>`;
        linha += `<td>${InputTelefone.value}</td>`;
        linha += `<td>${InputTelefone.value >= 1 ? imgCadastrado : imgFalhou }</td>`;
        linha += '</tr>';

        linhas += linha;

        const CorpoTabela = document.querySelector('tbody');
        CorpoTabela.innerHTML = linhas;

        InputNome.value = '';
        InputTelefone.value = '';


    
    
});
