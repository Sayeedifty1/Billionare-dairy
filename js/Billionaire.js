
const loadBillionaire = async(limiter) =>{
    const url = `https://forbes400.onrender.com/api/forbes400?limit=${limiter}`
    const res = await fetch(url);
    const data = await res.json();
    
    displayBillionaire(data);
    // console.log(data[0].person.name)
}

const displayBillionaire =(persons) =>{
    const personContainer = document.getElementById('person-container');
    persons.forEach(person => {
        const personDiv = document.createElement('div');
        personDiv.classList.add('col');
        personDiv.innerHTML = `
        <div class="card p-4">
            <img src="${person.person.squareImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${person.person.name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <button onclick="loadPhoneDetails('')" href='#' class= "btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
                </div>
        </div>
        `;
        personContainer.appendChild(personDiv);
    })

    
}


function PersonLimit (){
   let limiter=20;
   loadBillionaire(limiter);
}

loadBillionaire(10);
