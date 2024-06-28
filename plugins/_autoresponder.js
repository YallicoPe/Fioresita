import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '🎀 𝗙𝗶𝗼𝗿𝗲𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽', body: '𝗙𝗶𝗼𝗿𝗲 𝗕𝗼𝘁 🎀', sourceUrl: md, thumbnail: imagen2}}})}
    
return !0 }
export default handler
