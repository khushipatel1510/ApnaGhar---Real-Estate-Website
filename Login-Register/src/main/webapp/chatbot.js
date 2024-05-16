const chatForm = document.getElementById('chat-form');
const userMessageInput = document.getElementById('user-message');
const chatBox = document.querySelector('.chat-box');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userMessage = userMessageInput.value;
  if (userMessage.trim() === '') {
    return false;
  }

  // Create a user message element and append it to the chat box
  const userMessageElement = document.createElement('div');
  userMessageElement.classList.add('chat-message');
  userMessageElement.classList.add('user-message');
  userMessageElement.innerHTML = `<p class="user-message">${userMessage}</p>`;
  chatBox.appendChild(userMessageElement);

  // Create a bot message element and append it to the chat box
  const botMessage = document.createElement('div');
  botMessage.classList.add('chat-message');
  botMessage.classList.add('bot-message');
  
  // Check if the user's message is "hello"
  if (userMessage.toLowerCase() === "hello") {
    botMessage.innerHTML = `<p class="bot-message">Hello! How can I assist you today?</p>`;
  } 
  else if (userMessage.toLowerCase() === "good bye") {
    botMessage.innerHTML = `<p class="bot-message">Bye</p>`;
  }
  else if (userMessage.toLowerCase() === "please help me") {
    botMessage.innerHTML = `<p class="bot-message">Yeah sure we will help you</p>`;
  }
  else if (userMessage.toLowerCase() === "what is your name?") {
    botMessage.innerHTML = `<p class="bot-message">My name is chatbot</p>`;
  }
  else if (userMessage.toLowerCase() === "find me an upcoming property in baner area") {
    botMessage.innerHTML = `<p class="bot-message">Please enter the filters in our home page to get the best suited property</p>`;
  }
  else if (userMessage.toLowerCase() === "find me an upcoming property in wakad area") {
    botMessage.innerHTML = `<p class="bot-message">Please enter the filters in our home page to get the best suited property</p>`;
  }
  else if (userMessage.toLowerCase() === "find me an upcoming property in wakad area") {
    botMessage.innerHTML = `<p class="bot-message">Please enter the filters in our home page to get the best suited property</p>`;
  }
  else if (userMessage.toLowerCase() === "find me an upcoming property in wakad area") {
    botMessage.innerHTML = `<p class="bot-message">Please enter the filters in our home page to get the best suited property</p>`;
  }
  else if (userMessage.toLowerCase() === "are all the properties on your website rera registered?") {
    botMessage.innerHTML = `<p class="bot-message">Yes all our properties are registered</p>`;
  }
  else if (userMessage.toLowerCase() === "what is the use of eligibility?") {
    botMessage.innerHTML = `<p class="bot-message">Calculate your budget for purchasing upcoming properties</p>`;
  }
  else if (userMessage.toLowerCase() === "what is the use of simulator?") {
    botMessage.innerHTML = `<p class="bot-message">Finds you the best property you can invest in</p>`;
  }
  else if (userMessage.toLowerCase() === "what is the use of simulator?") {
    botMessage.innerHTML = `<p class="bot-message">Finds you the best property you can invest in.</p>`;
  }
  else if (userMessage.toLowerCase() === "please provide contact details") {
    botMessage.innerHTML = `<p class="bot-message">You can contact us on the following email id  khushi.patel.btech2021@sitpune.edu.in , shivam.kandalkar.btech2021@sitpune.edu.in , harsh.govil.btech2021@sitpune.edu.in , jhalak.vaghasiya.btech2021@sitpune.edu.in</p>`;
  }
  else if (userMessage.toLowerCase() === "find me 1 bhk flat") {
    botMessage.innerHTML = `<p class="bot-message">Please enter the filters on our home page to get the best suited property.</p>`;
  }
  else if (userMessage.toLowerCase() === "find me 2 bhk flat") {
    botMessage.innerHTML = `<p class="bot-message">Please enter the filters on our home page to get the best suited property.</p>`;
  }
  else if (userMessage.toLowerCase() === "find me 3 bhk flat") {
    botMessage.innerHTML = `<p class="bot-message">Please enter the filters on our home page to get the best suited property.</p>`;
  }
  else if (userMessage.toLowerCase() === "find me 4 bhk flat") {
    botMessage.innerHTML = `<p class="bot-message">Please enter the filters on our home page to get the best suited property.</p>`;
  }
  else if (userMessage.toLowerCase() === "find me 5 bhk flat") {
    botMessage.innerHTML = `<p class="bot-message">Sorry.</p>`;
  }
  else if (userMessage.toLowerCase() === "find  properties?") {
    botMessage.innerHTML = `<p class="bot-message">Baner, Wakad, hinjewadi, aundh,bavdhan, hadapsar,balewadi, mahalunge, manjari</p>`;
    botMessage.innerHTML += `<p class="bot-message">Koregaon park, poonawale, kharadi</p>`;
  } 
  else{
    botMessage.innerHTML=`<p class="bot-message">Thank you for chatting with us</p>`
  }
  
  
  
  
  chatBox.appendChild(botMessage);

  userMessageInput.value = '';
});