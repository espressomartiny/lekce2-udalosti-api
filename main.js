// tady je místo pro náš program


let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');
nadpis.classList.remove('zluty');

let ctverecek = document.querySelector('div.zluty')
ctverecek.classList.add('ctverecek')

let pocitadlo = 0;
function priNajeti () {
console.log('test' + pocitadlo);
pocitadlo++;
}

function zmenStyl() {
    nadpis.classList.toggle('zluty')
}



// úkol na lekci

function ztucniPriNajeti() {
    let pali = document.querySelector('.palindrom');
    pali.classList.add('mordnilap');
}

function odtucniPriVyjeti() {
    let pali = document.querySelector('.palindrom');
    pali.classList.remove('mordnilap');
}

function zcervenej() {
    let pali = document.querySelector('.palindrom');
    pali.classList.toggle('cervena')
}

let sizePalindromu = 17
function zvets() {
    let pali = document.querySelector('.palindrom');
    sizePalindromu++
    let px = sizePalindromu + 'px'
    pali.style.fontSize = px;
}