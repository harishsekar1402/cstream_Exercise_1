const display = document.getElementById('input_num')

function append_disp(value){
    display.value += value
}
function backspace(){
    let temp = display.value
    temp = temp.slice(0,-1)
    display.value = temp
    temp = ''
}
function calculate(){
    try {
        let res = eval(display.value)
        if(res != Infinity){
        document.getElementById('output_num').innerHTML = res
        }
        else{
            document.getElementById('output_num').innerHTML = "Invalid Input"
        }
    }
    catch(error){
        console.log("Invalid Input")
        document.getElementById('output_num').innerHTML = "Invalid input"
    }
}