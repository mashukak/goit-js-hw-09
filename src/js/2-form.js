const form = document.querySelector('.feedback-form');
const feedback = 'feedback-form-state';

let formData = { email: '', message: '' };

populateForm();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {

  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(feedback, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    console.warn('Please fill out all fields before submitting the form.');
    return;
  }

  console.log('Form data submitted:', formData);

  form.reset();
  formData = { email: '', message: '' };
  localStorage.removeItem(feedback);
}

function populateForm() {
  const saveData = localStorage.getItem(feedback);

  if (saveData) {
    formData = JSON.parse(saveData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
}