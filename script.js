let inputText =document.getElementById("inputText");
let btn =document.getElementById("search");
let result=document.getElementById("result");
let result1=document.getElementById("result1");
btn.addEventListener("click", () =>{
    let countryName = inputText.value;
    const finalurl =`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalurl).then(response => response.json())
    .then(data => {
        result.innerHTML =`
        <img src="${data[0].flags.svg}" class="flag_img">
        <h2>${data[0].name.common}</h2>
          <div class="wrapper">
          <div class="wrapper_layout">
          <h3>Capital:</h3> 
          <h4>${data[0].capital[0]}</h4>
          </div>
          </div>
            <div class="wrapper">
          <div class="wrapper_layout">
          <h3>Continents:</h3> 
          <h4>${data[0].continents}</h4>
          </div>
          </div>
           <div class="wrapper">
          <div class="wrapper_layout">
          <h3>Population:</h3> 
          <h4>${data[0].population}</h4>
          </div>
          </div>
       <div class="wrapper">
          <div class="wrapper_layout">
          <h3>Currency:</h3> 
          <h4>${data[0].currencies[Object.keys(data[0].currencies)[0]].name} - ${Object.keys(data[0].currencies)[0]}</h4>
          </div>
          </div>
          <div class="wrapper">
          <div class="wrapper_layout">
          <h3>Common Languages:</h3> 
          <h4>${Object.values(data[0].languages).toString().split(",").join("  ,  ")}</h4>
          </div>
          </div>
        `;
            })
            // .catch(() => {
            // if(inputText.length == 0){
            //     result1.innerHTML="Please enter your value";
            // }
            // else{
            //     result1.innerHTML="Enter your correct value";  
            // }
            // });
})
