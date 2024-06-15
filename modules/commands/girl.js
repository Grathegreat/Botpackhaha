module.exports.config = {
  name: "girl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ralph", 
  description: "Random Edits",
  usePrefix: false,
  commandCategory: "media",
  cooldowns: 5
};
module.exports.run = async ({ api, event,}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");

  api.sendMessage(`⏱️ | Video is sending please wait.`, event.threadID, event.messageID);
axios.get('https://api--v1-shoti.vercel.app/api/v1/get').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
                                                body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/random.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/random.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/random.${ext}`)).on("close", callback);
      }) .catch(err => {
                     api.sendMessage("api error status: 200", event.threadID, event.messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true);
                  })     
}
