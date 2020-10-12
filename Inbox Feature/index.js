let choices = document.querySelectorAll('.choice');
let labels = document.querySelectorAll('.itemName');
let isShift = false;
let prevCheckIdx = -1;
function cutItem(e) {
    console.log(e.key);
    if (this.checked == true && isShift == true && prevCheckIdx!=-1) {
        let currentIdx = Array.prototype.indexOf.call(choices, this);
        if (currentIdx < prevCheckIdx) {
            for (let i = currentIdx; i < prevCheckIdx + 1; i++) {
                labels[i].style.textDecoration = "line-through";
                choices[i].checked = true;
            }
        }
        else {
            for (let i = prevCheckIdx; i < currentIdx + 1; i++) {
                labels[i].style.textDecoration = "line-through";
                choices[i].checked = true;
            }
        }
    }
    else if (this.checked == true) {
        this.nextElementSibling.style.textDecoration = 'line-through';
        prevCheckIdx = Array.prototype.indexOf.call(choices, this);
    }
    else {
        this.nextElementSibling.style.textDecoration = 'none';
    }
}
choices.forEach(choice => choice.addEventListener('click', cutItem));
window.addEventListener('keydown', function (e) {
    if (e.key === 'Shift') {
        isShift = true;
    }
});
window.addEventListener('keyup', function (e) {
    if (e.key === 'Shift') {
        isShift = false;
    }
});