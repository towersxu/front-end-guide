return new Promise((resolve, reject) => {
  EXIF.getData(file, function () {
    let Orientation = EXIF.getTag(file, 'Orientation')
    if (Orientation && Orientation !== 1) {
      let deg = 0
      if (Orientation === 6) {
        deg = 90
      } else if (Orientation === 8) {
        deg = 270
      } else if (Orientation === 3) {
        deg = 180
      }
      rotate(file, deg).then((r) => {
        resolve(r)
      })
    }
  })
})

function rotate(file, deg) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      // resolve(this.result)
      let img = this.result
      let image = new Image()
      image.onload = function () {
        let width = this.width
        let height = this.height
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        canvas.width = width
        canvas.height = height
        setTimeout(() => {
          ctx.save()
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.translate(canvas.width, canvas.height)
          ctx.rotate(deg * Math.PI / 180)
          ctx.drawImage(image, -(width / 2), -(height / 2), width, height)
          ctx.restore()
          resolve(canvas.toDataURL('image/png', 1))
        }, 100)
      }
      image.src = img
    }
  })
}