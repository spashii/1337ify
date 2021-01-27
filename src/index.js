function leetify(element) {
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
    [...s.toLowerCase()].forEach((c) => {
      newText = newText + leetifyChar(c);
    });
    return newText;
  }

  element.innerHTML = element.innerHTML
    .split('>')
    .map((s) => {
      let a = s.split('<');
      return leetifyString(a[0]) + '<' + a[1] + '>';
    })
    .join('');

  let inputElements = element.querySelectorAll('input');
  inputElements.forEach((e) => {
    e.placeholder = leetifyString(e.placeholder);
  });
}

leetify(document.body);
