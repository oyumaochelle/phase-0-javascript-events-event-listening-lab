function addingEventListener() {
    function clickAlert(){
        alert('I was clicked!')
    }
    const input = document.getElementById("input");
    input.addEventListener('click', ()=> alert('I was clicked!'));
}

