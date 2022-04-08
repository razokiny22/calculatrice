const display = document.querySelector('#display');
const displayResult = document.querySelector('#displayResult');
const nextDiplayResult = document.querySelector('#nextDiplayResult');
const btn = document.querySelectorAll('.boutton');

btn.forEach((item) =>{
    item.onclick = () => {
        if(item.id === 'clear'){
            display.innerText = '';
            displayResult.innerText = '';
        }else if(item.id === 'backSpace'){
            let str = display.innerText;
            display.innerText = str.substr(0,str.length-1);
            if(eval(display.innerText)==undefined){
                displayResult.innerText = '';
            }else{
                displayResult.innerText = eval(display.innerText);
            }
           
            }else if(display.innerText != '' && item.id =='equal'){
                if(eval(display.innerText)=='Infinity' || eval(display.innerText)=='NaN' || eval(display.innerText)=='-Infinity'){
                    display.innerText = '';
                    displayResult.style.color = 'red';
                    displayResult.innerText ='Math Error';
                    setTimeout(()=> (displayResult.innerText =''), 2000);
                    displayResult.style.color = 'white';
                 
                }
                else{
                    displayResult.innerText = eval(display.innerText);
                    display.innerText = '';
                    display.innerText = displayResult.innerText;
                    displayResult.innerText = '';
                }
                }else if(display.innerText == '' && item.id == 'equal'){
                        displayResult.innerText = 'Empty!';
                        setTimeout(()=> (displayResult.innerText =''), 2000);
                    }else {
                        display.innerText += item.id;
                        if(eval(display.innerText)=='Infinity' || eval(display.innerText)=='NaN' || eval(display.innerText)=='-Infinity'){
                            displayResult.innerText = '';
                        }else{
                            displayResult.innerText = eval(display.innerText)
                          
                        }
                       
                      
                        
                    }
        }
                
})