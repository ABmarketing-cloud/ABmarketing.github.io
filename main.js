const customSelect = document.body.querySelectorAll('.custom-select');
const customSelectInput = document.body.querySelector('.custom-select_selected-option');
const options = document.body.querySelectorAll('.custom-select_option');

customSelect.forEach(select => {
  select.addEventListener('click', (evt) => {
    evt.preventDefault();
    const selectedOption = select.querySelector('.custom-select_selected-option');

    if (evt.target.tagName === 'INPUT') {
      select.classList.toggle('open');
    }

    if (evt.target.tagName === 'LI') {
      const value = evt.target.innerText;
      selectedOption.value = value;
      select.classList.remove('open');
      selectedOption.classList.add('valid');
    }
  })
})


customSelectInput.addEventListener('input', (evt) => {
  const value = evt.target.value;
  const regExp = new RegExp(value, 'i');

  options.forEach(option => {
    regExp.test(option.textContent) ? option.classList.remove('hidden') : option.classList.add('hidden')
  })
})

