__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{  // Untuk tampilan/text pada menu bisa kalian ganti di volder setting > textMenu.js
var { textMenu } = require(__path + '/setting/textMenu.js')

var img = "https://i.ibb.co/c1xm1PD/Izumo-Tenka.jpg"

const buttons = [
  {buttonId: '!owner', buttonText: {displayText: '[👨] OWNER'}, type: 1},
  {buttonId: '!donasi', buttonText: {displayText: '[❤] DONATE'}, type: 1},
  {buttonId: '!info', buttonText: {displayText: '[🤖] INFOBOT'}, type: 1}
]
const buttonMessage = {
    image: {url: img},
    caption: textMenu(sender, nama, namabot),
    buttons: buttons,
    headerType: 4,
    mentions: [sender]
}
md.sendMessage(from, buttonMessage, {quoted: md1})
} catch (e) { console.log(e) }
} 
