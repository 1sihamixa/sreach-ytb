const cards = document.querySelector("[data-user-template]");
const container = document.querySelector("[data-container]");
const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input",(e)=>{
    const value = e.target.value.toLowerCase();
    users.forEach(user => {
        const visibale = user.state.toLowerCase().includes(value) || user.city.toLowerCase().includes(value);
        user.element.classList.toggle("hide",!visibale)
    })
    console.log(users);
})

let users = [];

fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json").then(a=>a.json()).then(data=>{
    users = data.map(user=>{
    const card = cards.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-header]");
    const body = card.querySelector("[data-body]");
    header.textContent = user.state;
    body.textContent = user.city;
    container.append(card);
    return {state: users.state , city:users.city, element:card}
});
});