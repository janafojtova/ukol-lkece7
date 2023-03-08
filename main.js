/*
Výplata

Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, 
a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.
*/

const salary = (wage, hours, days)=>{
const hrubaMzda = Number(wage) *Number(hours)*Number(days)
return Math.round(hrubaMzda);
}

const taxed = (castka, procentoZdaneni)=>{
    const cistaMzda = castka*(1-procentoZdaneni)
    return Math.round(cistaMzda)
}

let wage = 200;
let hours = 8;
let days = 20;
let mzdaPredZdanenim = salary(wage,hours,days)
let mzdaPoZdaneni = taxed(mzdaPredZdanenim,0.15)

/*
2
Kalkulačka

Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi 
základními operacemi a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete 
spočítat něco velmi jednoduchého, například 2 + 3, musíme stisknout tlačíko 2, poté 
+, pak 3 a pak =. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme +, 
ale až ve chvíli, kdy mačkáme =. Musí si tedy zapamatovat, co jsme namačkali, a 
všecho spočítat až ve chvíli, kdy stiskneme =.

Napište funkci calculate se třemi parametry number1, operation a number2, které 
představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo.
 Operace může být '+', '-', '*' nebo '/'. Funkce vrátí výsledek výpočtu pro zadanou
  operaci.

Příklad použití

> calculate(2, '+', 3)
5
> calculate(3, '*', 7)
21
> calculate(10, '/', 4)
2.5
*/

const calculate = (number1,operation,number2)=>{
    if(operation==="+"){
        return Number(number1)+Number(number2)
    }else if(operation==="-"){
        return Number(number1)-Number(number2)
    }else if(operation==="*"){
        return Number(number1)*Number(number2)
    }else if(operation==="/"){
        return Number(number1)/Number(number2)
    }
}

console.log(calculate(1,"+",2))
console.log(calculate(1,"-",2))
console.log(calculate(1,"*",2))
console.log(calculate(1,"/",2))

