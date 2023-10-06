import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';
// Tento řádek vám umožňuje používat funkci findWinner od jiného programátora. Více se o zápisu s import dozvíte v pozdějších lekcích.

// Kód níže je pouze ukázka použití funkce findWinner. Následující řádky smažte.

// Ukázka použití pro rozehranou hru 3x3, kde začínající hráč kolečko hrál všechny své tři tady do prvního sloupečku a druhý hráč křížek všechny své dva tahy do druhého sloupečku.
// const ukazkoveHerniPole = ['o', 'x', '_', 'o', 'x', '_', 'o', '_', '_']
// // Pro lepší představu stejné pole lze zapsat i takto:
// /*
// const ukazkoveHerniPole = [
// 	'o', 'x', '_',
// 	'o', 'x', '_',
// 	'o', '_', '_',
// ]
// */
// const vitez = findWinner(ukazkoveHerniPole)
// console.log(`Vyhrál hráč se symbolem ${vitez}.`) // 'Vyhrál hráč se symbolem o.'

const hry = document.querySelectorAll('.hra');
hry.forEach((hra) => {
  const policka = hra.querySelectorAll('.policko');
  const vysledek = hra.querySelector('.vysledek');
  const polePolicek = Array.from(policka);

  const polePiskvorky = polePolicek.map((policko) => {
    if (policko.classList.contains('kolecko')) {
      return 'o';
    } else if (policko.classList.contains('krizek')) {
      return 'x';
    } else if (policko.classList.contains('nic')) {
      return '_';
    }
  });

  console.log(polePiskvorky);

  const vitez = findWinner(polePiskvorky);

  if (vitez === 'o') {
    vysledek.textContent = 'Vyhrálo kolečko!';
  } else if (vitez === 'x') {
    vysledek.textContent = 'Vyhrál křížek!';
  } else if (vitez === 'tie') {
    vysledek.textContent = 'Remíza!';
  } else if (vitez === null) {
    vysledek.textContent = 'Hra ještě probíhá.';
  }
});
