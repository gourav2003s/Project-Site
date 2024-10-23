// Switch between product thumbnails and update main image
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        // Remove 'active' class from all thumbnails
        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));

        // Add 'active' class to clicked thumbnail
        this.classList.add('active');

        // Change the main product image to match clicked thumbnail
        const mainImage = document.querySelector('.product-image img');
        const newSrc = this.querySelector('img').src;
        mainImage.src = newSrc;
    });
});
