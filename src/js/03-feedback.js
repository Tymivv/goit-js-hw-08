import throttle from 'lodash.throttle';
//import '../css/common.css';
//import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  inputEmail: document.querySelector('.feedback-form  input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));
refs.inputEmail.addEventListener('input', throttle(onTextareaInput, 200));
populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
function onTextareaInput(evt) {
  const message = evt.target.value;

  const a = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, a);
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)); ;
//console.log(savedMessage);
  if (savedMessage) {
    refs.textarea.value = savedMessage.message;
    refs.inputEmail.value = savedMessage.email;

  }
}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

const formData = {};

refs.form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value;

  console.log(formData);
});
