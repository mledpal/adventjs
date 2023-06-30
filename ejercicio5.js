const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.


function getMaxGifts(giftsCities, maxGifts, maxCities) {  
  
  // Creamos una potencia de un conjunto
  const gifts = giftsCities.reduce((a,v) => a.concat(a.map(d => [v].concat(d))), [[]])
                  
                  .filter(gifts => gifts.length <= maxCities && gifts.length)
                  
                  // Sumamos todos los regalos de cada conjunto
                  .map(gifts => gifts.reduce((acum, gifts) => acum + gifts )) 
                 
                  // Nos quedamos con los que no superan maxGifts
                  .filter(gifts => gifts <= maxGifts);

  // Retornamos el valor del máximo o de 0 si no se cumplen las condiciones
  return gifts.length ? Math.max(...gifts) : 0  
}



getMaxGifts(giftsCities, maxGifts, maxCities) // 20