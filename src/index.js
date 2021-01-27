const basicLeet = {
  a: '4',
  b: '6',
  e: '3',
  //   g: '6',
  i: '1',
  o: '0',
  s: '5',
  t: '7',
};

function leetifyChar(c) {
  const leet = basicLeet[c];
  return leet === undefined ? c : leet;
}

function leetifyString(s) {
  let newText = '';
  [...s].forEach((c) => {
    newText = newText + leetifyChar(c);
  });
  return newText;
}

function leetify(element) {
  if (element.childElementCount === 0) {
    try {
      const text = element.innerHTML.toLowerCase();
      element.innerHTML = leetifyString(element.innerHTML.toLowerCase());
    } catch {}
    return;
  }
  Array.from(element.children).forEach((e) => leetify(e));
}

leetify(document.body);
