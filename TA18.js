document.addEventListener('DOMContentLoaded', function(){
    const list = document.getElementById('list')
    const input = document.getElementById('input')

    const people = ['Rodrigo', 'Matias', 'Bruno', 'Maria', 'Agustin', 'Martin','Martina', 'Mateo'];

    //seteo la lista de personas
    function renderList(items) {
        list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    }

    function filter () {
        const inp = input.value.toLowerCase();
        const listItems = list.getElementsByTagName('li')

        Array.from(listItems).forEach(item => {
            const texto = item.textContent.toLowerCase()
            item.classList.toggle('hidden', !texto.includes(inp))
        })
    }

    renderList(people)
    input.addEventListener('input', filter)
})