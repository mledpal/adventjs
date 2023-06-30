const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]


function fitsInOneBox(boxes) {
  let cantidad = boxes.length;
  let seOrdena = false;
  
  // Ordenamos las cajas
  let ordenada = boxes.sort((a,b) => {
    if ((a.l > b.l) && (a.w > b.w) && (a.h > b.h)) {
      return 1
    }    
    if ((a.l < b.l) && (a.w < b.w) && (a.h < b.h)) {
      return -1
    }    
    return 0
  })
   
  for(let i = 0; i < cantidad-1; i++) {
    
    if((ordenada[i].l < ordenada[i+1].l) 
        && (ordenada[i].w < ordenada[i+1].w) 
        && (ordenada[i].h < ordenada[i+1].h)) {
      seOrdena = true
    } else {
      return false;
    }
  }
    
  return seOrdena
}

fitsInOneBox(boxes) // true

