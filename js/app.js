function comprar() {

    //Fazer o botao comprar adicionar quantidades
    let ingresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (ingresso.value == 'pista') {
        comprarPista(quantidade);
    } 
    else if(ingresso.value == 'superior'){
        comprarSuperior(quantidade);
    }
    else
        comprarInferior(quantidade);

}
    //Decrementar quantidade disponiveis de ingressos

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdPista) {
    alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdSuperior) {
    alert('Quantidade indisponível para tipo Cadeira Superior');
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }

} 

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > qtdInferior) {
    alert('Quantidade indisponível para tipo Cadeira Inferior');
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }

} 


