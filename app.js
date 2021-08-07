/* Basic Element Selecting */
const btmImages = document.querySelectorAll('.bottom-container ul img');
const container = document.querySelector('.mid .container');
const midImg = container.querySelector('.img-content img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

/* Bottom Imagines */
for (let i = 0; i < btmImages.length; i++) {
    btmImages[i].src = `./images/img${i + 1}.jpg`;
}
// Functions
/* Counter Function */
function cnt (){
    for (let btmImageIndex = 0; btmImageIndex < btmImages.length; btmImageIndex++) {
        if (btmImages[btmImageIndex].className === 'slick-active'){
            return (btmImageIndex + 1);
        }
    }
}
/* Function that changes the images (Slide) */
function slide(counter){
    let currentBackImg = document.querySelector('.slide .backImg-container img');
    currentBackImg.src = `./back-images/backImg${counter}.jpg`;
    midImg.setAttribute('src',`./images/img${counter}.jpg` );
    for (let btmImage of btmImages) {
        if (btmImage.className === 'slick-active'){
            btmImage.classList.remove('slick-active');
        }
    }
    btmImages[counter - 1].classList.add('slick-active');
}
/* Function of Mid Toggle Button */
function myToggle(){
    let sharingOpt = document.querySelector('.mid .sharingOpt');
    if (sharingOpt.style.display === 'none'){
        sharingOpt.style.display = 'block';
    }
    else {
        sharingOpt.style.display = 'none';
    }
}

/* Slide */
// Next Button
nextBtn.addEventListener('click', () => {
    let counter = cnt();
    if (counter < btmImages.length){
        counter++;
        slide(counter);
        if (prevBtn.style.visibility === 'hidden'){
            prevBtn.style.visibility = 'unset';
        }
        if (counter === btmImages.length){
            nextBtn.style.visibility = 'hidden';
        } else{
            nextBtn.style.visibility = 'unset';
        }
        if (counter !== 1){
            prevBtn.style.visibility = 'unset';
        }
    }
});
// Previous Button
prevBtn.addEventListener('click', () => {
    let counter = cnt();
    if (counter > 1){
        counter--;
        slide(counter);
        if (counter === 1){
            prevBtn.style.visibility = 'hidden';
        } else {
            prevBtn.style.visibility = 'unset';
        }
        if (counter !== btmImages.length){
            nextBtn.style.visibility = 'unset';
        }
    }
});

/* Bottom Links */
for (let btmImageIndex = 1; btmImageIndex < btmImages.length; btmImageIndex++ ) {
    let currentBackImg = document.querySelector('.slide .backImg-container img');
    btmImages[btmImageIndex].addEventListener('click', () =>{
        /* Removing slick-active class from every a tags at the bottom */
        for (let btmImage of btmImages) {
            if (btmImage.className === 'slick-active'){
                btmImage.classList.remove('slick-active');
            }
        }
        /* Adding slick-active class to our current a tag */
        btmImages[btmImageIndex].classList.add('slick-active');
        if (midImg.src !== btmImages[btmImageIndex].src){
            midImg.src = btmImages[btmImageIndex].src;
            currentBackImg.src = `./back-images/backImg${btmImageIndex + 1}.jpg`;
        }
        /* Hiding Buttons */
        if (0 < btmImageIndex < btmImages.length){
            prevBtn.style.visibility = 'unset';
            if (btmImageIndex !== btmImages.length - 1){
                nextBtn.style.visibility = 'unset';
            } else{
                nextBtn.style.visibility = 'hidden';
            }
        }

    })
}
/* Hiding Prev Button */
btmImages[0].addEventListener('click', () =>{
    prevBtn.style.visibility = 'hidden';
    for (let btmImage of btmImages) {
        if (btmImage.className === 'slick-active'){
            btmImage.classList.remove('slick-active');
        }
    }
    let currentBackImg = document.querySelector('.slide .backImg-container img');
    btmImages[0].classList.add('slick-active');
    if (midImg.src !== btmImages[0].src){
        midImg.src = btmImages[0].src;
        currentBackImg.src = `./back-images/backImg${1}.jpg`;
    }
})