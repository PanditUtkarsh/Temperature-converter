const takesinput = () =>
{
    var userInput = document.getElementById('input').value;
    let selects = document.getElementById('select');
    let option = select.options[selects.selectedIndex].value;

    if (option === "fah") 
    {
        const fahtocel = (userInput) =>{
            let c = ((userInput-32)*5/9);
            document.getElementById('result').value = `${c}°cel`;
        }
        fahtocel(userInput)
    }
    else if(option === "cel")
    {
        const celtofah = (userInput) =>{
            let f = ((userInput * 9/5) + 32);
            document.getElementById('result').value = `${f}°fah`;    
        }
        celtofah(userInput)
    }
    else
    {
        const keltofahcel = (userInput) =>{
            let f = Math.round((userInput - 32) * 5/9 + 273.15);
            let c = Math.round((userInput - 273.15))
            document.getElementById('result').value = `${f}°fah ${c}°cel`;    
        }
        keltofahcel(userInput)
    }
}
