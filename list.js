let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

//evento de click para o botão.
btnAdd.addEventListener('click', addTarefa);

function addTarefa(){
    //pegar o valor digitado no input.
    let valorInput = input.value;
    //verificando se os compos são nulos.
    if(valorInput.trim() !== ""){
        ++contador;
        //criando item a ser add no html.
        let novoItem = `
         <div class="div-main" id="${contador}">
            <div onclick="marcarTarefa(${contador})" class="icone">
                   <i id="icone_${contador}" class="fa-regular fa-circle"></i>
            </div>
            <div  onclick="marcarTarefa(${contador})" class="nome">
                ${valorInput} 
            </div>
            <div class="button">
                    <button onclick="deletar(${contador})"><i class="fa-solid fa-trash-can"></i>Deletar</button>
             </div>
        </div>`
        //add novo item no html.
        main.insertAdjacentHTML("beforeend", novoItem);
        input.value = "";//limpa o campo após todo o processo.
        input.focus();//deixa o input focado.
    }
}
function marcarTarefa(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute("class");

    if(classe == "div-main"){
        item.classList.add('clicado');

        let icone = document.getElementById('icone_'+id);
        icone.classList.remove('fa-circle');
        icone.classList.add('fa-circle-check');

        item.parentNode.appendChild(item)
    }else{
         item.classList.remove('clicado');
        let icone = document.getElementById('icone_'+id);
        icone.classList.remove('fa-circle-check');
        icone.classList.add('fa-circle');
    }
}
//deletando
function deletar(id){
    let tarefa = document.getElementById(id);
    tarefa.remove();

}
//adicionando a função enter 
input.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        btnAdd.click();
    }
})