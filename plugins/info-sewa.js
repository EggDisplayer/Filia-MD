import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pay = 'https://telegra.ph/file/9acf75835fdcbd7e9597d.jpg'
let info = `
╭━━━━「 *SEWA* 」
┊• *1 Minggu:* 15K
┊• *1 Bulan:* 35K
┊• *Permanen:* 100K
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊• *1 Hari:* 2K
┊• *1 Minggu:* 12K
┊• *1 Bulan:* 45K
╰═┅═━––––––๑

╭━━━━「 *SEWA + PREMIUM* 」
┊• *1 Minggu:* 17K
┊• *1 Bulan:* 37K
┊• *6 Bulan:* 105K
╰═┅═━––––––๑

╭━━━━「 *BUY LIMIT* 」
┊• *+5 Limit:* 3K
┊• *+15 Limit:* 8K
┊• *+20 Limit:* 11K
┊• *+50 Limit:* 21K
╰═┅═━––––––๑

*PAYMENT:*

• *SPay:* [${povo}]
• *Dana:* [${pdana}]
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: info }, m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main', 'info']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
