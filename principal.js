// Faça seu exercício neste arquivo

// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade
function calc()
{
    var str = document.getElementById("resultado"), result = 0, i = 0, soma = 0;
    str.innerHTML = "";
    for(; i < document.getElementById("quantidadeD4").value; i++)
    {
        result = Math.ceil(Math.random() * 4);
        soma += result;
        if(i === 0)
            str.innerHTML += result;
        else
            str.innerHTML += (" + " + result);
    }
    for(i = 0; i < document.getElementById("quantidadeD6").value; i++)
    {
        result = Math.ceil(Math.random() * 6);
        soma += result;
        str.innerHTML += (" + " + result);
    }
    for(i = 0; i < document.getElementById("quantidadeD8").value; i++)
    {
        result = Math.ceil(Math.random() * 8);
        soma += result;
        str.innerHTML += (" + " + result);
    }
    for(i = 0; i < document.getElementById("quantidadeD10").value; i++)
    {
        result = Math.ceil(Math.random() * 10);
        soma += result;
        str.innerHTML += (" + " + result);
    }
    for(i = 0; i < document.getElementById("quantidadeD12").value; i++)
    {
        result = Math.ceil(Math.random() * 12);
        soma += result;
        str.innerHTML += (" + " + result);
    }
    for(i = 0; i < document.getElementById("quantidadeD20").value; i++)
    {
        result = Math.ceil(Math.random() * 20);
        soma += result;
        str.innerHTML += (" + " + result);
    }
    str.innerHTML += " = " + soma;
    document.getElementById("recipienteResultados").classList.remove("oculto");
    setTimeout(function(){ document.getElementById("recipienteResultados").classList.add("oculto"); }, 3000);
}

document.getElementById("rolar").addEventListener("click", calc, false);
