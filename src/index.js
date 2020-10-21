module.exports = function check(str, bracketsConfig) {
  while (str.length > 0) {
    const tempStr = checkRecurs(str, bracketsConfig, 0);
    if (tempStr === str && tempStr !== '') {
      return false;
    }
    str = tempStr;
  }
  return true;
}

function checkRecurs(str, bracketsConfig, index) {
  const confElement = bracketsConfig.find(x => {
    return x[0] === str[index] || x[1] === str[index];
  });

  if (confElement === undefined || str[index] !== confElement[0] || (index + 1) >= str.length) {
    return str;
  }

  if (str[index + 1] === confElement[1]) {
    return str.substring(0, index) + str.substring(index + 2, str.length);
  }

  return checkRecurs(str, bracketsConfig, index + 1);
};
