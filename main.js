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

let pali = document.querySelector('.palindrom');

function ztucniPriNajeti() {
pali.classList.add('mordnilap');
}
function odtucniPriVyjeti() {
pali.classList.remove('mordnilap');
}