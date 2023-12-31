const adviceUrl = "https://api.adviceslip.com/advice";
const slipAdviceEl = document.querySelector('.adviceid');
const slipAdviceIdEl = document.querySelector('.advice');
const adviceBtn = document.querySelector('.fa-dice-five')

adviceBtn.addEventListener('click', () =>{
    fetch(adviceUrl)
.then(response => response.json())
.then(responseJson => {

   const advice = responseJson.slip.advice;
   const id = responseJson.slip.id;

   const adviceSlip = document.createElement('span');
   const adviceSlipId = document.createElement('span');

   slipAdviceEl.innerText = "";
   slipAdviceIdEl.innerText = "";

   adviceSlip.innerText = advice;
   adviceSlipId.innerText = id;
   
   slipAdviceEl.append(adviceSlip)
   slipAdviceIdEl.append(adviceSlipId)
    })
})
