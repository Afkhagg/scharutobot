exports.menu = (prefix, i) => {
    return `*INI WM AQULZZ*
`
}

exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `${ucapan.data.result} ${pushname}

╒═══ 《 *${botName}* 》 ═══
├────────────────────
├≽ *Creator : ${ownerName}*
├≽ *Lib : Baileys V.3.5.1*
├≽ *Prefix : 「 ${prefix} 」*
├≽ *Total Fitur : 200+*
├≽ *Total Pengguna : ${pendaftar.length}*
├≽ *Tanggal : ${tanggal}*
├≽ *Pukul : ${jam}*
├≽ *Runtime Bot*
├≽ *${runtime}*
├────────────────────
╞═══ 《 *USER INFO* 》 ═══
├────────────────────
├≽ *Name* : *${pushname}*
├≽ *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
├≽ *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
├≽ *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
├≽ *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
├≽ *Group bot : https://chat.whatsapp.com/KXjIrWuCtK9FudKsA6u8fr*
├────────────────────
╞═══ 《 *MENU* 》 ═══
├────────────────────
├≽ *${prefix}stickermenu*
├≽ *${prefix}creatormenu*
├≽ *${prefix}groupmenu*
├≽ *${prefix}gabutmenu*
├≽ *${prefix}gamemenu*
├≽ *${prefix}downloadmenu*
├≽ *${prefix}searchmenu*
├≽ *${prefix}animemenu*
├≽ *${prefix}makermenu*
├≽ *${prefix}toolsmenu*
├≽ *${prefix}randommenu*
├≽ *${prefix}storagemenu*
├≽ *${prefix}othermenu*
├────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}
 [{buttonId:'SERAH',buttonText:{displayText:'listmenu'},type:1}]

exports.stickerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STICKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}sticker*
├≽ *${prefix}stickergif*
├≽ *${prefix}swm*
├≽ *${prefix}take*
├≽ *${prefix}toimg*
├≽ *${prefix}tovideo*
├≽ *${prefix}attp*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.ownerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *CREATOR MENU* 》 ═══
├────────────────────
├≽ *${prefix}addprem*
├≽ *${prefix}delprem*
├≽ *${prefix}ban*
├≽ *${prefix}unban*
├≽ *${prefix}addbaword*
├≽ *${prefix}delbaword*
├≽ *${prefix}addchangelog*
├≽ *${prefix}public*
├≽ *${prefix}self*
├≽ *${prefix}exif*
├≽ *${prefix}bc*
├≽ *${prefix}setprefix*
├≽ *${prefix}setthumb*
├≽ *${prefix}clearall*
├≽ *${prefix}>*
├≽ *${prefix}$*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.groupMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GROUP MENU* 》 ═══
├────────────────────
├≽ *${prefix}afk*
├≽ *${prefix}infogrup*
├≽ *${prefix}add*
├≽ *${prefix}kick*
├≽ *${prefix}promote*
├≽ *${prefix}demote*
├≽ *${prefix}linkgc*
├≽ *${prefix}leave*
├≽ *${prefix}setdesc*
├≽ *${prefix}setgrupname*
├≽ *${prefix}setppgrup*
├≽ *${prefix}opengrup*
├≽ *${prefix}closegrup*
├≽ *${prefix}tagall*
├≽ *${prefix}tagme*
├≽ *${prefix}kontak*
├≽ *${prefix}hidetag*
├≽ *${prefix}getpp*
├≽ *${prefix}mute*
├≽ *${prefix}unmute*
├≽ *${prefix}welcome*
├≽ *${prefix}left*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.sistemMenu = (prefix, ownerName) => {
    return `╒═══ 《 *SISTEM MENU* 》 ═══
├────────────────────
├≽ *${prefix}antilink*
├≽ *${prefix}antiwame*
├≽ *${prefix}antibadword*
├≽ *${prefix}welcome*
├≽ *${prefix}left*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.gabutMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GABUTZ MENU* 》 ═══
├────────────────────
├≽ *${prefix}apakah*
├≽ *${prefix}bisakah*
├≽ *${prefix}kapankah*
├≽ *${prefix}hobby*
├≽ *${prefix}rate*
├≽ *${prefix}cekbapak*
├≽ *${prefix}truth*
├≽ *${prefix}dare*
├≽ *${prefix}cantik*
├≽ *${prefix}ganteng*
├≽ *${prefix}jadian*
├≽ *${prefix}gay*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.gameMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GAME MENU* 》 ═══
├────────────────────
├≽ *${prefix}tictactoe*
├≽ *${prefix}delttt*
├≽ *${prefix}suit*
├≽ *${prefix}tebakgambar*
├≽ *${prefix}topglobal*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.downloadMenu = (prefix, ownerName) => {
    return `╒═══ 《 *DOWNLOAD MENU* 》 ═══
├────────────────────
├≽ *${prefix}ytmp3*
├≽ *${prefix}ytmp4*
├≽ *${prefix}play*
├≽ *${prefix}playmp4*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.searchMenu = (prefix, ownerName) => {
    return `╒═══ 《 *SEARCH MENU* 》 ═══
├────────────────────
├≽ *${prefix}ytsearch*
├≽ *${prefix}pinterest*
├≽ *${prefix}brainly*
├≽ *${prefix}artinama*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.stalkMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STALKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}igstalk*
├≽ *${prefix}ghstalk*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.randomMenu = (prefix, ownerName) => {
    return `╒═══ 《 *RANDOM MENU* 》 ═══
├────────────────────
├≽ *${prefix}meme*
├≽ *${prefix}darkjokes*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.animeMenu = (prefix, ownerName) => {
    return `╒═══ 《 *ANIME MENU* 》 ═══
├────────────────────
├≽ *${prefix}waifu*
├≽ *${prefix}loli*
├≽ *${prefix}shinobu*
├≽ *${prefix}nekonime*
├≽ *${prefix}megumin*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.toolsMenu = (prefix, ownerName) => {
    return `╒═══ 《 *TOOLS MENU* 》 ═══
├────────────────────
├≽ *${prefix}nuliskanan*
├≽ *${prefix}nuliskiri*
├≽ *${prefix}foliokanan*
├≽ *${prefix}foliokiri*
├≽ *${prefix}ebase64*
├≽ *${prefix}debase64*
├≽ *${prefix}ehex*
├≽ *${prefix}dehex*
├≽ *${prefix}ebinary*
├≽ *${prefix}debinary*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.makerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *MAKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}hartatahta*
├≽ *${prefix}neon*
├≽ *${prefix}matrix*
├≽ *${prefix}blackpink*
├≽ *${prefix}halloween*
├≽ *${prefix}thundername*
├≽ *${prefix}devilwings*
├≽ *${prefix}cloudtext*
├≽ *${prefix}bloodtext*
├≽ *${prefix}bloodtext2*
├≽ *${prefix}steeltext*
├≽ *${prefix}lavatext*
├≽ *${prefix}toxiclogo*
├≽ *${prefix}dropwater*
├≽ *${prefix}metaldark*
├≽ *${prefix}sandwrite*
├≽ *${prefix}3dwater*
├≽ *${prefix}graffiti*
├≽ *${prefix}graffiti2*
├≽ *${prefix}phlogo*
├≽ *${prefix}glitch*
├≽ *${prefix}graffiti3*
├≽ *${prefix}layeredtext*
├≽ *${prefix}vintage*
├≽ *${prefix}3dspace*
├≽ *${prefix}stonetext*
├≽ *${prefix}avengers*
├≽ *${prefix}marvellogo*
├≽ *${prefix}3dmetal*
├≽ *${prefix}lionlogo*
├≽ *${prefix}wolflogo*
├≽ *${prefix}ninjalogo*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.otherMenu = (prefix, ownerName) => {
    return `╒═══ 《 *OTHER MENU* 》 ═══
├────────────────────
├≽ *cekprefix*
├≽ *${prefix}stats*
├≽ *${prefix}limit*
├≽ *${prefix}balance*
├≽ *${prefix}runtime*
├≽ *${prefix}speed*
├≽ *${prefix}owner*
├≽ *${prefix}donasi*
├≽ *${prefix}update*
├≽ *${prefix}cekprem*
├≽ *${prefix}listprem*
├≽ *${prefix}listban*
├≽ *${prefix}listbadword*
├≽ *${prefix}buylimit*
├≽ *${prefix}buyglimit*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.hentaiMenu = (prefix, ownerName) => {
    return `╒═══ 《 *18+ MENU* 》 ═══
├────────────────────
├≽ *${prefix}randomhentong*
├≽ *${prefix}kemonomimi*
├≽ *${prefix}ero*
├≽ *${prefix}echi*
├≽ *${prefix}ahegao*
├≽ *${prefix}trap*
├≽ *${prefix}neko*
├≽ *${prefix}blowjob*
├≽ *${prefix}kitsune*
├≽ *${prefix}yuri*
├≽ *${prefix}boobs*
├≽ *${prefix}kuni*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.storageMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STORAGE MENU* 》 ═══
├────────────────────
├≽ *${prefix}sound*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}
