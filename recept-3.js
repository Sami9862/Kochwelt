function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle('sideMenuHide')
}


function equalIngredients2() {
    const input = document.getElementById('input');
    let portions2 = parseFloat(input.value);


    if (portions2 > 20) {
        portions2 = 20;
        input.value = 20;
    }
    if (portions2 < 1 || isNaN(portions2)) {
        portions2 = 1;
        input.value = 1; 
    }

    const ingredientNeeded2 = document.querySelectorAll('.inputNeededGrey, .inputNeededWhite');

    ingredientNeeded2.forEach(input => {
        const originalValue = parseFloat(input.defaultValue);
        input.value = (originalValue * portions2).toFixed(1);
    });
}