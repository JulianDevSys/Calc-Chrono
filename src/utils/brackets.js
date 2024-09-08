const brackets = (exp) => {
  const open = "([{";
  const close = ")]}";

  const stack = [];
  for (let i = 0; i < exp.length; i++) {
    if (!open.includes(exp[i]) && !close.includes(exp[i])) {
      continue;
    }

    if (close.includes(exp[i])) {
      const last = stack.pop();
      const index = close.indexOf(exp[i]);
      if (last !== open[index]) {
        return false;
      }
    } else {
      stack.push(exp[i]);
    }
  }
  return true;
};

console.log(brackets("{ [ a * ( c + d ) ] - 5 }"));
