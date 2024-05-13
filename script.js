// Slaydlarning ma'lumotlari
const slidesData = [
    {
        imageSrc: "rasm1.jpg",
        caption: "Rasm 1",
        location: "Joylashgan joy 1"
    },
    {
        imageSrc: "rasm2.jpg",
        caption: "Rasm 2",
        location: "Joylashgan joy 2"
    },
    {
        imageSrc: "rasm3.jpg",
        caption: "Rasm 3",
        location: "Joylashgan joy 3"
    },
    // Qolgan slaydlar
    // ...
];

// Slayd konteyneri
const slideContainer = document.getElementById("slide-container");

// Massivdagi har bir slayd uchun HTML-ga joylash
slidesData.forEach((slideData, index) => {
    slideContainer.innerHTML += `
        <div class="slide" id="slide-${index + 1}">
            <img src="${slideData.imageSrc}" alt="Rasm">
            <div class="caption">${slideData.caption}</div>
            <div class="location">${slideData.location}</div>
        </div>
    `;
});