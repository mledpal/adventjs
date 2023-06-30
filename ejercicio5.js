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
  giftsCities.sort((a,b) => b-a);
  
  console.log(giftsCities)
  
  return 0
}



getMaxGifts(giftsCities, maxGifts, maxCities) // 20