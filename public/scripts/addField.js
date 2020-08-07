// Procurar o botão

document.querySelector("#add-time").addEventListener('click', cloneField)

// Executar ação
function cloneField() {
    // Duplicar campos... Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Limpar os campos... que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(function (field) {
        // pegar field atual e limpa
        field.value = ""

    })
    // Colocar na página... Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
