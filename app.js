var crrncy = {'MNT': {'MNT': 1, 'JPY':0.04, 'CAD':0.0004, 'USD':0.0003, 'EUR':0.0003, 'PLN':0.001, 'CNY':0.001, 'RUB':0.03, 'KRW':0.4, 'INR':0.024}, 'PLN': {'MNT': 803, 'JPY':34, 'CAD':0.311, 'USD':0.231, 'EUR':0.216, 'CNY':1.7, 'RUB':22, 'KRW':310, 'INR':19}, 'EUR': {'MNT': 3700, 'JPY':157, 'CAD':1.4, 'USD':1,  'PLN':4.6, 'CNY':7.8, 'RUB':102, 'KRW':1400, 'INR':88}, 'USD': {'MNT': 3500, 'JPY':150, 'CAD':1300, 'EUR':1, 'PLN':4.3, 'CNY':7.3, 'RUB':95, 'KRW':1340, 'INR':83}, 'CAD': {'MNT': 2500, 'JPY':109, 'USD':0.7, 'EUR':0.7, 'PLN':3200, 'CNY':5400, 'RUB':71, 'KRW':990, 'INR':61}, 'JPY': {'MNT': 23.5, 'CAD':0.009, 'USD':0.006, 'EUR':0.006, 'PLN':0.03, 'CNY':0.05, 'RUB':0.65, 'KRW':9, 'INR':0.6}, 'CNY': {'MNT': 0.23, 'JPY':20, 'CAD':0.18, 'USD':0.13, 'EUR':0.12, 'PLN':0.59, 'RUB':13.16, 'KRW':184, 'INR':11.41}, 'RUB': {'MNT': 36, 'JPY':1, 'CAD':0.08, 'USD':0.01, 'EUR':0.01, 'PLN':0.04, 'CNY':0.07, 'KRW':13, 'INR':0.86}, 'KRW': {'MNT': 3, 'JPY':0.1, 'CAD':0.001, 'USD':0.0007, 'EUR':0.0006, 'PLN':0.004, 'CNY':0.005, 'RUB':0.07, 'INR':0.06}, 'INR': {'MNT': 41.84, 'JPY':1, 'CAD':0.01, 'USD':0.01, 'EUR':0.01, 'PLN':0.05, 'CNY':0.08, 'RUB':1.15, 'KRW':16,}}
var btn = document.querySelector('.calculate-btn');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');

function convertCurrency(event) {
  event.preventDefault();
  var amount = amountInput.value;
  var from = baseCurrencyInput.value;
  var to = secondCurrencyInput.value;
  var result = 0;
  
  try{
    if (from == to){
      result = amount;
    } else {
     result = amount * crrncy[from][to];
  }
  }
  catch(err) {
    result = amount * (1 / crrncy[to][from]);
  }
  
  toShowAmount.innerHTML = amount;
  toShowBase.textContent = from + ' = ';
  toShowSecond.textContent = to;
  toShowResult.textContent = result; 
}

btn.addEventListener('click', convertCurrency);