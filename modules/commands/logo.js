const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "logo",
  version: "1.0",
  hasPermssion: 0,
  credits: "Samuel Kâñèñgeè | Cyril Matt", // Converted to Mirai by Cyril Matt 
  description: "Logo haha",
  usePrefix: false,
  commandCategory: "logo",
  usages: "['logos', 'texpro]'",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length >= 2 && args[0].toLowerCase() === "list") {
    let page = parseInt(args[1]);
    switch (page) {
      case 1:
        return api.sendMessage(
          `╔════ஜ۩۞۩ஜ═══╗\n\n𝑯𝑒𝒓𝒆'𝒔 𝒕𝒉𝒆 𝒍𝒐𝒈𝒐 𝒍𝒊𝒔𝒕 - 𝑷𝒂𝒈𝒆 1:\n\n
          ❍ aglitch ❍ Business ❍ blood
          ❍ blackpink ❍ broken ❍ christmas
          ❍ captainamerica ❍ carbon ❍ circuit
          ❍ choror ❍ christmas ❍ discovery
          ❍ devil ❍ dropwater ❍ fiction
          ❍ fire ❍ glass ❍ greenhorror
          ❍ imglitch ❍ layered ❍ light
          ❍ magma ❍ metallic ❍ neon
