
const fortuneCookieMessages = [
  "You will find great fortune in unexpected places.",
  "A pleasant surprise is waiting for you.",
  "Believe in yourself and all that you are.",
  "Your hard work will soon pay off.",
  "You will make a change for the better.",
  "Adventure awaits you this weekend.",
  "A new perspective will come with the new year.",
  "Your talents will be recognized and suitably rewarded.",
  "Happiness begins with facing life with a smile and a wink.",
  "You will travel to many exotic places in your lifetime.",
  "Your ability to accomplish tasks will follow with success.",
  "A faithful friend is a strong defense.",
  "Now is the time to try something new.",
  "Fortune favors the bold.",
  "You will be showered with good luck tomorrow.",
  "Your dreams are worth your best efforts to achieve them.",
  "A friend is a present you give yourself.",
  "You will soon be surrounded by good friends and laughter.",
  "Something wonderful is about to happen to you.",
  "You will bring sunshine into someone's life."
];

window.onload = function () {
  var cookie1 = document.getElementById("cookie-1");
  var cookie2 = document.getElementById("cookie-2");
  var message = document.getElementById("message");
  var button1 = document.getElementById("reveal-button");

  button1.addEventListener("click", function () {
    cookie1.style.display = "none";
    message.style.display = "block";
    cookie2.style.display = "flex";
    message.innerHTML = fortuneCookieMessages[Math.floor(Math.random() * fortuneCookieMessages.length)];

    // Fetch a new fortune cookie message when the button is clicked
    //fetchFortuneCookieMessage();
  });
// };
  // function fetchFortuneCookieMessage() {
  //   const url = "https://api.openai.com/v1/completions";
 
  //   const headers = {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${key}`,
  //   };

  //   const data = {
  //     model: "text-davinci-003",
  //     prompt: "Generate a random fortune cookie message.",
  //     max_tokens: 20,
  //     temperature: 0.7,
  //     n: 1,
  //   };

  //   fetch(url, {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((generatedMessage) => {
  //       if (generatedMessage.choices && generatedMessage.choices.length > 0) {
  //         const fortuneCookieMessage = generatedMessage.choices[0].text.trim();
  //         message.innerText = `Fortune Cookie Message: ${fortuneCookieMessage}`;
  //       } else {
  //         console.error("No fortune cookie message returned");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }
};
