const validatePIN = (pin) =>
  pin.match(/^(\d{4}$)/) || pin.match(/^(\d{6}$)/) ? true : false;

console.log(validatePIN("1234"));
