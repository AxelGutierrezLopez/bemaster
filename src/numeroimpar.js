
exports.numeroimpar = (req,res) => {
  let noImpar = 'No es un numero impar '+req.body.number;
  let number = req.body.number;

  let arrayNumbers = [];

  if (isNumberImpar(number) == false) {
    arrayNumbers.push(noImpar);
  } else {
    arrayNumbers = numbersImpar(number);
  }

  res.render('ejercicio03', { numbers: arrayNumbers });
};

function isNumberImpar(number) {
  let isNumberImpar = false;
  if (number % 2 != 0) {
    isNumberImpar = true;
  }
  return isNumberImpar;
}

function numbersImpar(number) {
  let arrayNumbers = [];
  let end = true;
  let numberImpar = 1;
  while (end) {
    if (numberImpar == number) {
      end = false;
    }
    arrayNumbers.push(numberImpar)
    numberImpar = numberImpar + 2;
  }

  return arrayNumbers;

}
