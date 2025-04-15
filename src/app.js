let base_url = 'https://67fe04863da09811b1774120.mockapi.io/cars'

async function loadCars() {
    try {
        const res = await fetch('https://67fe04863da09811b1774120.mockapi.io/cars')
        const cars = await res.json()
        console.log(cars);
        funcCras(cars)
        btnfn()
        formfn()
        deleteCars()
    } catch (err) {
        console.log(err);
    }

}

window.addEventListener('DOMContentLoaded', () => {
    loadCars()
})


function btnfn() {
    let abtn = document.querySelector('.btn')
    let form = document.querySelector('form')
    abtn.addEventListener('click', () => {
        form.style.display = 'flex'

    })
}

function formfn() {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.style.display = 'none'
        let formdata = new FormData(form)
        postUrl(formdata)
    })
}

function postUrl(form) {
    let cars = {
        name: form.get('car'),
        madel: form.get('madel'),
        price: form.get('price')
    }
    fetch('https://67fe04863da09811b1774120.mockapi.io/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cars)
    })


}

function funcCras(arr) {
    let itemCar = document.querySelector('.itemCars')
    arr.forEach(item => {
        let ul = document.createElement('ul')
        ul.innerHTML = `
            <li>${item.name}</li>
            <li>${item.madel}</li>
            <li>${item.price}$</li>
            <div className="btnItem">
           <button class='delete' data-id="${item.id}">delete</button>
            </div>
            `

        itemCar.appendChild(ul)

    });
    deleteCars()
}
function deleteCars() {
    let deletebtn = document.querySelectorAll('.delete')

    deletebtn.forEach(btn => {

        btn.addEventListener('click', async () => {

            const id = btn.getAttribute('data-id')

            fetch(`${base_url}/${id}`, {

                method: 'DELETE'
            })


        })
    })
}
