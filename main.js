const thumbnails = document.querySelectorAll('.thumbnail');
const preview = document.querySelector('.project-preview');
const previewTitle = document.querySelector('.preview-title');
const previewImage = document.querySelector('.preview-image');
const previewLink = document.querySelector('.preview-image-link');
const viewProjectLink = document.querySelector('.view-project');
const imageCount = document.querySelector('.image-count');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const title = thumbnail.getAttribute('data-title');
    const count = thumbnail.getAttribute('data-count');
    const image = thumbnail.getAttribute('data-image');
    const link = thumbnail.getAttribute('data-link');

    preview.classList.remove('hidden');
    previewTitle.textContent = title;
    previewImage.src = image;
    previewLink.href = link;
    viewProjectLink.href = link;
    imageCount.textContent = `(${count} images)`;
  });
});