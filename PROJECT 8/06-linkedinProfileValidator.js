function isValidLinkedInURL(url) {
  const regex =
    /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  return regex.test(url);
}

const urls = [
  "https://www.linkedin.com/in/ambrish-kumar",
  "https://www.linkedin.com/in/ambrish_kumar007",
  "https://www.linkedin.com/in/1122",

  "https://www.linkedin.com/in/ambrishkumar123456789101112131415161718192021222324252627282930",
  "https://www.linkedin.com/in/ambrish_kumar_",
];

urls.forEach((url) => {
  if (isValidLinkedInURL(url)) {
    console.log(`"${url}" is a valid LinkedIn profile URL.`);
  } else {
    console.log(`"${url}" is not a valid LinkedIn profile URL.`);
  }
});
