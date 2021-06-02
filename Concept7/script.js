const Page_Wrapper = document.createElement('div');
document.body.appendChild(Page_Wrapper);

const Button = document.querySelector('button');
document.addEventListener('click', showInput);

function showInput(){

    const My_Input = document.querySelector('input');
    console.log(My_Input.value)
}