// script de tags selecionadas //
const areaAtuacaoSelect = document.getElementById('area_atuacao');
const selectedTagsContainer = document.getElementById('selectedTags');
const selectedOptions = [];

areaAtuacaoSelect.addEventListener('change', function() {
    const selectedOption = areaAtuacaoSelect.options[areaAtuacaoSelect.selectedIndex];

    if (selectedOption.value && !selectedOptions.includes(selectedOption.value)) {
        selectedOptions.push(selectedOption.value);
        addTag(selectedOption.value, selectedOption.text);
        selectedOption.selected = false;
    }
});

function addTag(value, text) {
  const tagElement = document.createElement('span');
  tagElement.classList.add('inline-flex', 'items-center', 'px-2', 'py-1', 'mx-1', 'mb-1', 'text-sm', 'font-medium', 'text-blue-800', 'bg-blue-100', 'rounded', 'dark:bg-blue-900', 'dark:text-blue-300');

  tagElement.innerHTML = `
      ${text}
      <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" onclick="removeTag(this)" data-value="${value}" aria-label="Remove">
          <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span class="sr-only">Remove badge</span>
      </button>
  `;
  
  selectedTagsContainer.appendChild(tagElement);
}

function removeTag(tagElement) {
  const valueToRemove = tagElement.getAttribute('data-value');
  const optionToRemove = areaAtuacaoSelect.querySelector(`[value="${valueToRemove}"]`);
  optionToRemove.selected = false;

  const indexToRemove = selectedOptions.indexOf(valueToRemove);
  if (indexToRemove !== -1) {
    selectedOptions.splice(indexToRemove, 1);
  }

  tagElement.parentElement.remove();
}
// script de tags selecionadas //



