import { FilePreview } from '#partials/file_preview'

function updateFilePreview(file? : File) {
  const cible = document.querySelector('#file-preview')
  const html = FilePreview(file).toString()
  cible.innerHTML = html
}

function deleteFilePreview() {
  const fileInput = document.querySelector('#file-upload')
  fileInput.value = ""
  updateFilePreview()
}

up.compiler('#file-upload', function (element) {
  element.addEventListener('change', function (e) {
    const file: File = e.target.files[0]
    updateFilePreview(file)
  })
})

up.on('up:fragment:inserted', function() {
  deleteFilePreview()
});


window.deleteFilePreview = deleteFilePreview;