console.log('Hi!');

const language = document.querySelector('.paragraph-language');

const russian = document.querySelector('.russian');
const german = document.querySelector('.german');
const italian = document.querySelector('.italian');

russian.addEventListener('click' , () => {
    language.innerHTML = 'Привет! Приятно познакомиться!';
    language.dataset.lang = 'russian';
    console.log(language);
});
german.addEventListener('click' , () => {
    language.innerHTML = 'Hallo, schön dich zu treffen!';
    language.dataset.lang = 'german';
    console.log(language);
});
italian.addEventListener('click' , () => {
    language.innerHTML = 'Ciao, piacere di conoscerti!';
    language.dataset.lang = 'italian';
    console.log(language);
});