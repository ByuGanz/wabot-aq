let handler = async m => m.reply(`
╭─「 Donasi • Non Pulsa 」
│ • Dana [081297084552]
│ • Donasi? wa.me/6283805870343
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
