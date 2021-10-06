// import functions

// reference needed DOM elements
const freeze = document.getElementById('freeze');
const terminator = document.getElementById('terminator');
const behind = document.getElementById('behind');
const choppa = document.getElementById('choppa');
const questions = document.getElementById('questions');
const bathroom = document.getElementById('bathroom');
const daddy = document.getElementById('daddy');
const tumor = document.getElementById('tumor');
const cookie = document.getElementById('cookie');

const freezeAudio = new Audio('assets/01-Freeze.mp3');
const terminatorAudio = new Audio('assets/02-terminator.mp3');
const behindAudio = new Audio('assets/03-behind.mp3');
const choppaAudio = new Audio('assets/04-choppa.mp3');
const questionsAudio = new Audio('assets/05-questions.mp3');
const bathroomAudio = new Audio('assets/06-bathroom.mp3');
const daddyAudio = new Audio('assets/07-daddy.mp3');
const tumorAudio = new Audio('assets/08-tumor.mp3');
const cookieAudio = new Audio('assets/09-cookie.mp3');

// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
freeze.addEventListener('click', () => {
    freezeAudio.play();
    freeze.classList.add('image-animate');
    setTimeout(() => {freeze.classList.remove('image-animate');}, 4001);
});

terminator.addEventListener('click', () => {
    terminatorAudio.play();
    terminator.classList.add('image-animate');
    setTimeout(() => {terminator.classList.remove('image-animate');}, 4001);
});

behind.addEventListener('click', () => {
    behindAudio.play();
    behind.classList.add('image-animate');
    setTimeout(() => {behind.classList.remove('image-animate');}, 4001);
});

choppa.addEventListener('click', () => {
    choppaAudio.play();
    choppa.classList.add('image-animate');
    setTimeout(() => {choppa.classList.remove('image-animate');}, 4001);
});

questions.addEventListener('click', () => {
    questionsAudio.play();
    questions.classList.add('image-animate');
    setTimeout(() => {questions.classList.remove('image-animate');}, 4001);
});

bathroom.addEventListener('click', () => {
    bathroomAudio.play();
    bathroom.classList.add('image-animate');
    setTimeout(() => {bathroom.classList.remove('image-animate');}, 4001);
});

daddy.addEventListener('click', () => {
    daddyAudio.play();
    daddy.classList.add('image-animate');
    setTimeout(() => {daddy.classList.remove('image-animate');}, 4001);
});

tumor.addEventListener('click', () => {
    tumorAudio.play();
    tumor.classList.add('image-animate');
    setTimeout(() => {tumor.classList.remove('image-animate');}, 4001);
});

cookie.addEventListener('click', () => {
    cookieAudio.play();
    cookie.classList.add('image-animate');
    setTimeout(() => {cookie.classList.remove('image-animate');}, 4001);
});

document.addEventListener('keydown', (e) => {
    if (e.key == 1){
        freezeAudio.play();
        freeze.classList.add('image-animate');
        setTimeout(() => {freeze.classList.remove('image-animate');}, 4001);
    } else if (e.key == 2){
        terminatorAudio.play();
        terminator.classList.add('image-animate');
        setTimeout(() => {terminator.classList.remove('image-animate');}, 4001);
    } else if (e.key == 3){
        behindAudio.play();
        behind.classList.add('image-animate');
        setTimeout(() => {behind.classList.remove('image-animate');}, 4001);
    } else if (e.key == 4){
        choppaAudio.play();
        choppa.classList.add('image-animate');
        setTimeout(() => {choppa.classList.remove('image-animate');}, 4001);
    } else if (e.key == 5){
        questionsAudio.play();
        questions.classList.add('image-animate');
        setTimeout(() => {questions.classList.remove('image-animate');}, 4001);
    } else if (e.key == 6){
        bathroomAudio.play();
        bathroom.classList.add('image-animate');
        setTimeout(() => {bathroom.classList.remove('image-animate');}, 4001);
    } else if (e.key == 7){
        daddyAudio.play();
        daddy.classList.add('image-animate');
        setTimeout(() => {daddy.classList.remove('image-animate');}, 4001);
    } else if (e.key == 8){
        tumorAudio.play();
        tumor.classList.add('image-animate');
        setTimeout(() => {tumor.classList.remove('image-animate');}, 4001);
    } else if (e.key == 9){
        cookieAudio.play();
        cookie.classList.add('image-animate');
        setTimeout(() => {cookie.classList.remove('image-animate');}, 4001);
    }

    

});