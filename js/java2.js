document.addEventListener("DOMContentLoaded", function() {
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgThumbnail, lgZoom],
        speed: 500,
        download: false
    });
});