import { FilePreview } from '#partials/file_preview'

function updateFilePreview(file? : File) {
  const cible = document.querySelector('#file-preview') as HTMLDivElement
  const html = FilePreview(file).toString()
  cible.innerHTML = html
}

function deleteFilePreview() {
  const fileInput = document.querySelector('#file-upload') as HTMLInputElement 
  fileInput.value = ""
  updateFilePreview()
}

up.compiler('#file-upload', function (element) {
  element.addEventListener('change', function (e : Event) {
    const target = e.target as HTMLInputElement
    if (target.files && target.files[0]) {
      const file: File = target.files[0]
      updateFilePreview(file)
    }
  })
})

up.on('up:fragment:inserted', function() {
  deleteFilePreview()
});


window.deleteFilePreview = deleteFilePreview;