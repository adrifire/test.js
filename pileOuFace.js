function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var pileOuFace = (number) => {
    if(number == 1) {
        return "Gagné"
    }
    return "Perdu"
}
for (i = 0; i < 3; i++) {
    console.log(pileOuFace(getRandomIntInclusive(0, 1)))
  }
