//se llaman a los elementos por su ID
const money_one = document.getElementById('moneda-uno');
const money_two = document.getElementById('moneda-dos');
const valor_one = document.getElementById('valor-uno');
const valor_two = document.getElementById('valor-dos');
const chanced = document.getElementById('cambio');
const rate = document.getElementById('taza');


//Adición de la API con la función fetch y los calculos respectivos
function calculate(){
    const moneda_one = money_one.value;
    const moneda_two = money_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       valor_two.value = (valor_one.value * taza).toFixed(2);

    } );
    
}

//Se realiza los eventos
money_one.addEventListener('change', calculate);
valor_one.addEventListener('input', calculate);
money_two.addEventListener('change', calculate);
valor_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = money_one.value;
    money_one.value = money_two.value;
    money_two.value = temp;
    calculate();
} );


calculate();