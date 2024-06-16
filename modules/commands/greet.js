module.exports.config = {
  name: "greet",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Grathegreat",
  description: "Greet the user with a legendary personalized message",
  usePrefix: true, 
  commandCategory: "other",
  cooldowns: 5 // seconds to activate again
};

module.exports.run = async function ({ api, event, box }) {
  try {
    // Get user info
    const userInfo = await api.getUserInfo(event.senderID);
    const userName = userInfo[event.senderID].name;

    // Legendary greeting message
    const greetingMessage = `
      🌟✨ GREETINGS, ${userName.toUpperCase()}! ✨🌟
      Today is a glorious day, filled with endless possibilities.
      How can I, your humble bot, assist you in your epic journey? 🚀
    `;

    // Send the legendary greeting message
    await box.send(greetingMessage, event.threadID);

    // React to the user's message with a star emoji
    await box.react("❤");

    // Additional legendary action: send a random motivational quote
    const quotes = [
      "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    await box.send(`💬 Random Quote: "${randomQuote}"`, event.threadID);

    // Send a legendary image
    const imageUrl = 'https://i.imgur.com/A9Cv3bY.jpeg'; // Replace with an actual URL
    await api.sendMessage({ body: "test", attachment: await api.getStream(imageUrl) }, event.threadID);

  } catch (error) {
    console.error("An error occurred while running the legendaryGreet command:", error);
  }
};
