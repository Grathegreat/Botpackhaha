module.exports.config = {
	name: "post",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Create a new post in acc bot",
  usePrefix: true,
	commandCategory: "Tiện ích",
	cooldowns: 5
};

module.exports.run = async ({ event, api }) => {
  const { threadID, messageID, senderID } = event;
  const uuid = getGUID();
  const formData = {
    "input": {
      "composer_entry_point": "inline_composer",
      "composer_source_surface": "timeline",
      "idempotence_token": uuid + "_FEED",
      "source": "WWW",
      "attachments": [],
      "audience": {
        "privacy": {
          "allow": [],
          "base_state": "FRIENDS", // SELF EVERYONE
          "deny": [],
          "tag_expansion_state": "UNSPECIFIED"
        }
      },
      "message": {
        "ranges": [],
        "text": ""
      },
      "with_tags_ids": [],
      "inline_activities": [],
      "explicit_place_id": "0",
      "text_format_preset_id": "0",
