const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(packOfGifts, reindeers) {
  let pesoCaja = 0;
  let cargaMaxima = 0;

  packOfGifts.forEach((r) => {
    pesoCaja += r.length;
  })
  
  reindeers.forEach((r) => {
    cargaMaxima += (r.length) * 2
  })

  return ~~(cargaMaxima / pesoCaja);
}


distributeGifts(packOfGifts, reindeers) // 2