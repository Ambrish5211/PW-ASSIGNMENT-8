setTimeout(() => {
  const reverseString = (name) => {
    var str = "";
    for (let i = name.length - 1; i >= 0; i--) {
      str = str + name[i];
    }
    console.log(str);
  };
  const input = "Ambrish";
  reverseString(input);
}, 2000);
