const circle__content_divs = document.getElementsByClassName('circle__content');
const form = document.getElementById('form');

for(let i = 0; i < circle__content_divs.length; i++){
    circle__content_divs[i].addEventListener('click', () => {
        for(let j = 0; j< circle__content_divs.length; j++){
            if (circle__content_divs[j].classList.contains('circle__selected') && j !== i){
                circle__content_divs[j].classList.remove('circle__selected');
            }
        }
        
        circle__content_divs[i].classList.toggle('circle__selected');
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const circle__selected = document.getElementsByClassName('circle__selected')[0];

    if (circle__selected){
        const value = circle__selected.innerHTML.trim();
        const formActive = document.getElementsByClassName('active')[0];
        const formInnactive = document.getElementsByClassName('innactive')[0];
        const row__text = document.getElementsByClassName('row__text')[0];

        if (formActive){
            formActive.classList.remove('active');
            formActive.classList.add('innactive');
            formInnactive.classList.remove('innactive');
            formInnactive.classList.add('active');
            let e = document.createElement('span');
            e.innerHTML = `You selected ${ value } out 5`;
            row__text.appendChild(e);
           
        }
    }
})