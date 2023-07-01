function isValidURL(url) {
  const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._]+[.][a-zA-Z]+$/;
  return regex.test(url);
}


const urls = [
  "http://www.pwskills.com",
  "https://www.pwskills.com",
  
  
  "https://www.pwskills.",
  "https://www.pwskills.com123",
];

urls.forEach((url) => {
  if (isValidURL(url)) {
    console.log(`"${url}" is a valid URL.`);
  } else {
    console.log(`"${url}" is not a valid URL.`);
  }
});
