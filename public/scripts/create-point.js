

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json() )
        .then( states => {

            for(const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        } )
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    //fetch é uma função para buscar algo(dados) na url, e então (then) outra função será executada, trazendo alguma coisa (a resposta)
    fetch(url)
        .then( res => res.json() )
        .then( cities => {

            for(const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false
        } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


//Ítens de coleta:
//pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items")

let selectedItems = []

//função executada quando ocorrer o evento "click", como foi declarado acima (como uma callback function)
function handleSelectedItem(event) {

    //variável itemLi recebe o alvo (target) do evento
    const itemLi = event.target

    //adicionar/remover uma classe com JS
    itemLi.classList.toggle("selected")    

    const itemId = itemLi.dataset.id

    console.log('ITEM ID: ', itemId)

    //verificar existência de itens selecionados, se sim
    //pegar itens selecionados 

    //pra cada item, executará a função anônima, passando o valor do array para "item"
    const alreadySelected = selectedItems.findIndex(function(item) {
        const itemFound = item === itemId //será true ou false
        return itemFound
    })

    //se já estiver selecionado 
    if (alreadySelected >= 0) {
        //retirar da seleção

        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        //se não estiver selecionado, adicionar à seleção
        selectedItems.push(itemId)
    }

    console.log('selectedItems', selectedItems)


    //adicionar o campo input "hidden" com os ítens selecionados 
    collectedItems.value = selectedItems

}