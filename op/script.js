
const btnPlus=document.getElementsByClassName('plus')
const btnMinus=document.getElementsByClassName('minus')
var btnLike = document.getElementsByClassName("like");
var btnDelete = document.getElementsByClassName("delete");
for (var i = 0; i < btnPlus.length; i++) {
    //to increment the quantity with the button plus
    btnPlus[i].addEventListener("click", increment);
}

for (var i = 0; i < btnMinus.length; i++) {
    //to decrement the quantity with the button Minus
    btnMinus[i].addEventListener("click", decrement);
}

function increment(event) {
    var btnPlus = event.target;
    var divElt = btnPlus.parentElement;
    var quantityTag = divElt.querySelector("p");
    var quantityValue = Number(quantityTag.innerHTML);
    quantityValue++;
    quantityTag.innerHTML = quantityValue;
    trElt = divElt.parentElement.parentElement;
    var unitPriceValue = Number(trElt.querySelector(".unit_price").innerHTML);
    var priceTag = trElt.querySelector(".price");
    var priceValue = Number(priceTag.innerHTML);
    priceValue = quantityValue * unitPriceValue;
    priceTag.innerHTML = priceValue;

}

function decrement(event) {
    var btnMinus = event.target;
    var divEltMinus = btnMinus.parentElement;
    var quantityTagMinus = divEltMinus.querySelector("p");
    var quantityValueMinus = Number(quantityTagMinus.innerHTML);
    if (quantityValueMinus > 0) {
        quantityValueMinus--;
    }
    quantityTagMinus.innerHTML = quantityValueMinus;
    trEltMinus = divEltMinus.parentElement.parentElement;
    var unitPriceValueMinus = Number(trEltMinus.querySelector(".unit_price").innerHTML);
    var priceTagMinus = trEltMinus.querySelector(".price");
    var priceValueMinus = Number(priceTagMinus.innerHTML);
    priceValueMinus = quantityValueMinus * unitPriceValueMinus;
    priceTagMinus.innerHTML = priceValueMinus;
}

for (var i = 0; i < btnLike.length; i++) {

    btnLike[i].addEventListener("click", colorLike);

}

function colorLike(event) {
    var btnLike = event.target;
    if (btnLike.style.color != "red") {
        btnLike.style.color = "red";
    }
    else {
        btnLike.style.color = "black";
    }
}

var deletbtn = document.querySelectorAll('.btn-delete')
console.log('delet',deletbtn)

for (let k=0;k<deletebtn.length;k++){

    deletbtn[k].addEventListener('click',()=>{
    deletbtn[k].parentElement.parentElement.remove()
    //update de la totalite de mon panier
    totalPrice()
    })
}