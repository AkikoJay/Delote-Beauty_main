let services = [
    {name: "Перукарські послуги", url: "img/barber.png"},
    {name: "Манікюр", url: "img/manicure.png"},
    {name: "Педикюр", url: "img/pedicure.png"},
    {name: "Косметологія", url: "img/cosmetology.png"},
    {name: "Естетист по тілу", url: "img/body_care.png"},
    {name: "Візаж", url: "img/makeUp.png"}
];
let serviceWrap = document.getElementById("service_wrap");

let showAll = document.getElementById("showAll");
let showAllPhoto = [];
let barber = document.getElementById("barber");
let barberPhoto =[];
let manicure = document.getElementById("manicure");
let manicurePhoto = [];
let pedicure = document.getElementById("pedicure");
let pedicurePhoto = [];

services.map(function (item) {
    let stracture = `
    <div class="service_item">
        <a href='#'>
            <img src="${item.url}" alt="${item.name}" class="service_img">
            <div class="gold-box"></div>
            <p class="item_p">${item.name}</p>
        </a>
    </div>`
    let point = document.createElement("div");
    point.innerHTML = stracture;
    serviceWrap.appendChild(point);
});


let arrPhotos =[
    'img/Photos/hair-1.jpg',
    'img/Photos/hair-2.jpg',
    'img/Photos/manicur-1.jpg',
    'img/Photos/manicur-2.jpg',
    'img/Photos/pedicure-1.jpg',
    'img/Photos/pedicure-2.jpg',
    'img/Photos/hair-3.jpg',
    'img/Photos/manicure-3.jpg',
    'img/Photos/hair-4.jpg',
    'img/Photos/Pedicur-3.jpg'
];
let hairPhotos = [];
let manicurPhotos = [];
let pedicurPhotos = [];
let galary = document.getElementById("galary-photo");

function showPhoto(arr, length=arr.length) {
    galary.innerHTML='';
    for (let index = 0; index < length; index++) {
        let photo = document.createElement('div');
        photo.innerHTML =`
        <div class="photo-container">
            <img src="${arr[index]}" class="photo">
        </div>`;
        galary.appendChild(photo);
    }
}

let selectArr = document.querySelectorAll(".--select");
showPhoto(arrPhotos, arrPhotos.length>9? 9: arrPhotos.length);
arrPhotos.map(function (item) {
    if (/(hair\w?)-/gi.test(item)) {
        hairPhotos.push(item);
    } else if (/(manicur\w?)-/gi.test(item)){
        manicurPhotos.push(item);
    } else if (/(pedicur\w?)-/gi.test(item)){
        pedicurPhotos.push(item);
    }
});

selectArr.forEach(item=>{
    // console.log(item);
    item.addEventListener("click", function(){
        if(!this.classList.contains("active")){
            selectArr.forEach(function (elem) {
                elem.classList.remove("active");
            })
            this.classList.add("active");
            galary.innerHTML ='';
            let id = this.getAttribute('id');
            switch (id) {
                case 'showAll':
                    showPhoto(arrPhotos, arrPhotos.length>9? 9: arrPhotos.length);
                    break;
                case 'barber':
                    showPhoto(hairPhotos, hairPhotos.length>9? 9: hairPhotos.length);
                    break;
                case 'manicure':
                    showPhoto(manicurPhotos, manicurPhotos.length>9? 9: manicurPhotos.length);
                    break;
                case 'pedicure':
                    showPhoto(pedicurPhotos, pedicurPhotos.length>9? 9: pedicurPhotos.length);
                    break;
            }
        }
    })
})