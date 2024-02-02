
function navigate(direction, element, images) {
    let currentImage = element.parentElement.querySelector('.image-scroll');
    let filename = currentImage.src.split('/').pop();
    let currentIndex = images.findIndex(img => img.includes(filename));
    if (direction === 'left') {
        currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
        currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    currentImage.src = images[currentIndex];
}
