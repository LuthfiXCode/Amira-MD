__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{  

var gombal = [
 "Susah ya pelajaran sejarah, tapi tenang aja, kamu gak bakal jadi sejarah di hatiku kok.",
 "Ibarat ekonomi, cinta aku ke kamu itu surplus.",
 "Bagaikan kolom debit dan kredit pada suatu neraca, kita akan selalu bersama.",
 "Aku mau cinta kita seperti pelajaran sejarah yang selalu dikenang sepanjang masa.",
 "Cintaku padamu kayak inflasi, sama-sama naik secara terus-menerus.",
 "Cintaku ke kamu itu bagaikan penjajahannya VOC yang bikin aku kurus kering gak bisa makan karena mikirin kamu.",
 "Eh kamu tahu gak? Cintaku ke kamu itu kayak jumlah kredit pendapatan, semakin besar semakin menguntungkan.",
 "Hidupku tanpa dirimu, seperti persamaan akuntansi yang tidak seimbang.",
 "Kamu tahu kan, sekarang kurs rupiah terhadap dollar selalu menguat atau melemah? Tapi kurs pertukaran perasaan kita akan stabil kok.",
 "Kamu itu sama kayak penjajah zaman dulu. Bedanya, penjajah zaman dulu itu menjajah Indonesia, kalau kamu menjajah hatiku.",
 "Cintaku simpel tanpa rumus, tapi pake hafalan. Karena cintaku gak terhitung dan bakal aku ingat sampe kapan pun.",
 "Selama 350 tahun, Belanda menjajah Indonesia. Masih kalah sama cinta kita dong ya, yang bakal utuh selamanya.",
 "Kalau cantik diibaratkan laba, maka kamu itu MR=MC. Maksimal.",
 "Tahu nggak perbedaan aku sama pelajaran sejarah? Kalau sejarah lihat masa lalu, kalau aku lihat masa depan kita.",
 "Pelajaran Ekonomi nggak cocok sama prinsip aku. Soalnya aku nggak hitung-hitungan soal cinta ke kamu.",
 "Ajaran taoisme itu supaya orang menerima nasib. Kalo ajaran loveisme itu supaya menerima eneng di pelaminan abang.",
 "Seandainya sekarang adalah tanggal 28 Oktober 198, aku akan ubah naskah Sumpah Pemuda menjadi Sumpah Aku Cinta Kamu.",
 "Kamu itu kayak lempengan bumi ya, bergeser dikit aja bisa gempa hati aku.",
 "Di mata kuliah Akuntansi Pemerintahan aja ada Akuntansi Komitmen, kapan kamu berkomitmen sama aku.",
 "Cintaku kepadamu kayak gempa bumi, gak bisa diprediksi, membuat gemetar, dan dahsyat.",
 "Sejarah itu susah lho. Apa lagi sejarahnya aku dapetin kamu.",
 "Kamu kaya Daendels deh. Soalnya kamu membangun jalan cinta aku ke kamu.",
 "Indonesia diapit 2 benua dan 2 samudra, kalau cinta aku diapit sama cinta kamu terus.",
 "Layaknya hutan hujan tropis, aku akan terus menghujani dirimu dengan hujan cintaku.",
 "Mempelajari ekonomi ngajarin kita tentang hutang, klo mempelajari hatimu ngajarin aku lebih sadar untuk membahagiakanmu.",
 "Senyum kamu adalah laba terbesar yang aku raih dengan hanya bermodalkan cinta.",
 "Cintamu bagaikan erupsi Gunung Merapi, apa pun yang dilaluinya membekas di dalam hatiku.",
 "Cintaku padamu bagaikan pertumbuhan ekonomi China, selalu meningkat!"
]

md.sendMessage(from, { text: gombal[Math.floor(Math.random() * gombal.length)], mentions: [sender]}, {quoted: md1})
} catch (e) { console.log(e) }
} 
