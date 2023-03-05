import { shipmentList,name,email,boxes,boxNumber,burgerBar,Xmark,shipContainer,Container } from "./constants.js";


async function getArray (){   
    try {
        const res = await fetch('https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json');
        const data = await res.json();
        return data;
    } catch (err) {
        return alert(err);
    }
}


window.onload = async () => {
    let shipmentItemsArr = await getArray();
    shipmentItemsArr.forEach((item) => fillShipmentList(item));
    fillInfo(shipmentItemsArr)
}


function fillShipmentList(el){
    const ul = document.getElementById('shipment-list')
    const li = document.createElement('li')
    li.innerText = el.name
    ul.appendChild(li)
}



function fillInfo(array){
    shipmentList.addEventListener('click', (e) => {
        array.filter((el) => {
            if(el.name === e.target.innerHTML){
                name.innerHTML = el.name
                email.innerHTML = el.email
                boxes.innerHTML = el.boxes
                boxNumber.innerHTML = boxCalculator(el.boxes)
            }
        })
    })
}

function boxCalculator(boxes) {
    return boxes != null ? boxes.split(',').length : 'none'
}


//------------burger-bar--------

burgerBar.addEventListener('click', () => {
    burgerBar.classList.replace("block", "none")
    Xmark.classList.replace("none","block")
    shipContainer.classList.replace("shipment-list-container", "block")
    Container.classList.add("none")

})

Xmark.addEventListener("click", ()=> {
    burgerBar.classList.replace("none", "block")
    Xmark.classList.replace("block","none")
    shipContainer.classList.replace("block", "shipment-list-container")
    Container.classList.replace("none","block")
})




