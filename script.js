function calc() {
    const men = document.getElementById('men').value;
    const women = document.getElementById('women').value;
    const children = document.getElementById('children').value;

    const meatMen = 0.5;
    const meatWomen = 0.3;
    const meatChildren = 0.2;

    const chickenMen = 0.2;
    const chickenWomen = 0.2;
    const chickenChildren = 0.1;

    const sousageMen = 0.2;
    const sousageWomen = 0.2;
    const sousageChildren = 0.2;

    const colaMen = 0.3;
    const colaWomen = 0.4;
    const colaChildren = 0.2;

    const beerMen = 0.8;
    const beerWomen = 0.5;

    const meatTot = (men * meatMen) + (women * meatWomen) + (children * meatChildren);
    const chickenTot = (men * chickenMen) + (women * chickenWomen) + (children * chickenChildren);
    const sousageTot = (men * sousageMen) + (women * sousageWomen) + (children * sousageChildren);
    const colaTot = (men * colaMen) + (women * colaWomen) + (children * colaChildren);
    const beerTot = (men * beerMen) + (women * beerWomen);

    document.getElementById('formResult').innerHTML =
    `
        Meat total:      ${meatTot.toFixed(2)} kg     <br>
        Chicken total:   ${chickenTot.toFixed(2)} kg  <br>
        Sousage total:   ${sousageTot.toFixed(2)} kg  <br>
        Cola total:      ${colaTot.toFixed(2)} L      <br>
        Beer total:      ${beerTot.toFixed(2)} L      <br>
    `;
}


/*Menu*/
function resizeScreen() {
    // if (window.innerWidth > 800) {
    //     headerMenu.style.animation = 'none';
    //     headerMenu.style.display = 'flex';
    // } else {
    //     headerMenu.style.display = 'block';
    //     resetMenu();
    // }

    if (window.innerWidth < 600) {
        headerMenu.style.display = 'block';
        resetMenu();    
    } else {
        headerMenu.style.display = 'flex';
    }
}
window.addEventListener('resize', resizeScreen);

function shiftMenu() {
    if (headerMenu.style.top != '70px') {
        openMenu();
    } else {
        resetMenu();
    }
}



function openMenu() {
    headerMenu.style.top = '70px';

    row1.style.transform = 'rotate(45deg) translate(0px, 10px)';
    row2.style.backgroundColor = 'transparent';
    row3.style.transform = 'rotate(-45deg) translate(2px, -11px)';
}

function resetMenu() {
    headerMenu.style.top = '-500px';

    row1.style.transform = 'initial';
    row2.style.backgroundColor = '#000';
    row3.style.transform = 'initial';
}