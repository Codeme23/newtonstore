//fetch() method:it is defined on the window object.
//which we can uuse to performe request.
//this is a method will return a promise.
//promise will either be fullfilled or rejected.

fetch('https://fakestoreapi.com/products')
.then((data)=>(data.json()))
.then((cdata)=> {
    let data1 ="";
    cdata.map((values)=>{
        data1+=`<div class="card">
            <h1 class="title">${values.title}</h1>
            <img src=${values.image} alt="img">
            <p>${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">${values.price}</p>
        </div>`
    })
    document.getElementById("cards").innerHTML=data1;
})

.catch((err)=>{
    console.log(err);
})