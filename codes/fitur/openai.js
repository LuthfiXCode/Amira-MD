__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  

if (!q) return md.sendMessage(from, {text: "Masukkan text"}, {quoted: md1})

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
try {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: q,
    max_tokens: 2000,
    temperature: 0,
  });
  md.sendMessage(from, {text: completion.data.choices[0].text}, {quoted: md1})
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}
} 
