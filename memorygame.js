document.addEventListener('DOMContentLoaded', () => {
const section = document.querySelector('section');
const attemptsCounter = document.querySelector('span');
let attempts = 0;

attemptsCounter.textContent = attempts;
//Add Puzzle Pieces
    const cardList = () => [
        {name: 'Dixie.png', imgSrc: '/Users/maria/Desktop/MemGameIMG/Dixie.png'},
        {name: "Dixie.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/Dixie.png"},

        {name: "Fiat.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/Fiat.png"},
        {name: "Fiat.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/Fiat.png"},

        {name: "FiatTopolino.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/FiatTopolino.png"},
        {name: "FiatTopolino.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/FiatTopolino.png"},

        {name: "NewBeetle.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/NewBeetle.png"},
        {name: "NewBeetle.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/NewBeetle.png"},

        {name: "OldBettle.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/OldBeetle.png"},
        {name: "OldBettle.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/OldBeetle.png"},

        {name: "VWVan.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/VWVan.png"},
        {name: "VWVan.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/VWVan.png"},

        {name: "YellowConvert.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/YellowConvert.png"},
        {name: "YellowConvert.png", imgSrc: "/Users/maria/Desktop/MemGameIMG/YellowConvert.png"},
    ];
//Randomize Cards
const randomize = () => {
const cardInfo = cardList();
cardInfo.sort(() => Math.random() - 0.5);
    return cardInfo;
};
//Card Generator Function
//Generate HTML
//Attach info to cards
//Attach Card to Section
const cardGenerator = () => {
const cardInfo = randomize ();
    cardInfo.forEach((item) => {
const card = document.createElement('div');
const face = document.createElement('img')
const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back'; 
    face.src = item.imgSrc
    card.setAttribute('name', item.name);
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
card.addEventListener('click', (e) => {
    card.classList.toggle('toggleCard');
    checkMatch(e);
        });
    });    
};
//Check for Match
const checkMatch = (e) => {
    console.log(e);
const clickedCard = e.target;
    clickedCard.classList.add('flipped');
const flippedCards = document.querySelectorAll('.flipped');
const toggleCard = document.querySelectorAll('.toggleCard');
    console.log(flippedCards);
    
//Logic
    if (flippedCards.length === 2) {
        if (
            flippedCards[0].getAttribute('name') === 
            flippedCards[1].getAttribute('name')
        ) {
            console.log('match');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            });
            attempts++;
            attemptsCounter.textContent = attempts;
        } else {
            console.log('wrong');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });
            attempts++;
            attemptsCounter.textContent = attempts;
            if (attempts === 10) {
                restart('Try Again');
            }
        }
    }
//Did we win?
    if (toggleCard.length === 14) {
        restart('You Won!');
    }
};
//Restart
const restart = (text) => {
    let cardInfo = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = 'none';
    cardInfo.forEach((item,index) => {
        cards[index].classList.remove('toggleCard');
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = 'all';
        }, 1000); 
    });
    attempts = 0;
    attemptsCounter.textContent = attempts;
    setTimeout(() => window.alert(text), 100);
};
cardGenerator();          
});