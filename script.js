//Navbar Script//
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuToogleItems = document.getElementById('menu-toogle-items');

    menuToogleItems.classList.add('hidden');
    menuToggle.addEventListener('click', function () {
        menuToogleItems.classList.toggle('hidden');
    });
});

//Navbar Script//


//Bloqueio botão direito do mouse Script//
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
//Bloqueio botão direito do mouse Script//



function toggleDataFim(checkbox) {
    const numExperiencia = checkbox.id.match(/\d+/)[0];
    const dataFimInput = document.getElementById(`periodoFim${numExperiencia}`);

    console.log(`Checkbox checked: ${checkbox.checked}`);
    if (dataFimInput !== null) {
        console.log(`Data Fim Input: ${dataFimInput}`);
        dataFimInput.disabled = checkbox.checked;

        if (checkbox.checked) {
            dataFimInput.classList.add('bg-gray-300', 'opacity-50', 'cursor-not-allowed');
        } else {
            dataFimInput.classList.remove('bg-gray-300', 'opacity-50', 'cursor-not-allowed');
        }
    }
}