import { FilePreview } from '#partials/file_preview'

up.compiler('#file-upload', function (element) {
  element.addEventListener('change', function (e) {
    const file: File = e.target.files[0]
    const cible = document.querySelector('#file-preview')

    // if (file.type.startsWith('image/')) {
    //   const reader = new FileReader()
    //   reader.onload = function (event) {
    //     const html = FilePreview({ file }).toString()
    //     cible.innerHTML = html
    //   }
    //   reader.readAsDataURL(file)
    // } else {
      const html = FilePreview(file).toString()
      cible.innerHTML = html
    // }
  })
})
