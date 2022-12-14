//we select the checkboxes
let checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
    //check if they had the shift key down
    //and checked that they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox == this || checkbox == lastChecked) {
                inBetween = !inBetween;
                //starting to check them in-between.
                console.log(inBetween);

            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

function makeRandomId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));

    }
    return result;
}

function addCheckbox() {
    let randomText = makeRandomId(Math.floor(Math.random() * 15) + 1);
    let node = document.createElement('div');
    node.setAttribute('class', 'item');
    html = `<input type ="checkbox"><p>${randomText} </p>`;//refactoring garna sakenxa innerHtml=yo line
    node.innerHTML = html;
    document.querySelector('.inbox').appendChild(node);
    checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
    


}