// userInput.addEventListener("click", () =>{
// var userInput = document.getElementById('input');
// })
const takesinput = () =>
{
    var userInput = document.getElementById('input').value;
    let selects = document.getElementById('select');
    let option = select.options[selects.selectedIndex].value;
    // console.log(userInput);
    // console.log(option);

    const fahtocel = (celcius) =>
    {
        let c = ((celcius-32)*5/9);
        return c;
    }
    const celtofah = (fahrenheit) =>
    {
        let f = ((fahrenheit * 9/5) + 32);
        return f;
    }
    var results
    if (option == "fah") 
    {
        results = fahtocel(userInput)
        // document.getElementById('result').innerHTML = results;
        console.log(results);
    }
    else 
    {
        results = celtofah(userInput)
        // document.getElementById('result').innerHTML = results;    
        console.log(results);

    }
}
