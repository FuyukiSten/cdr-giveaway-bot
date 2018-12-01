/*
vem pro fut vem
*/
let token = process.env.TOKEN;
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
    client.user.setActivity('the song of nothing', {type:'LISTENING'});
});

client.on('message', async message => {
    if(message.content == "g!start -a -b -c | + d") {
        if(message.author.id !== "505096421532368907") return message.react('⛔');
        message.react('✅');
        message.channel.send('Os sorteios do evento de natal ocorrerão nesse canal ! Eles começam em 24 horas.')
        let channel = message.channel;
        let embed = new Discord.RichEmbed();
        embed.setColor(0x722f37);
        embed.addField('🎁 **Sorteio de Natal valendo 5 ROBUX!** 🎁', 'Para participar do Sorteio de Natal clique no emoji á baixo e boa sorte! \nPlanejamos estes sorteios como forma de carinho aos nossos membros!', true);
        embed.addField('**Nota:**', 'Entrem no Grupo para receber os ROBUX caso voce seja o ganhador de um dos sorteios: https://web.roblox.com/My/Groups.aspx?gid=3652849', true);
        embed.setFooter('Estes sorteios acontecem depois de 24h todos os dias, e acabam no fim do Natal');
        embed.addField('**Créditos:**', 'O bot foi programado por <@505096421532368907> e o sorteio está sendo pago por ele também.')
        embed.setThumbnail('https://media.discordapp.net/attachments/505098823547224065/518237844200751117/ExemplaryThickAnkole-max-1mb.gif');
       setInterval(async function(){
        let m = await channel.send(embed);
        channel.send('@everyone')
        m.react('🎅');
        await setTimeout(function () {
            if(m.reactions.size < 6) {
                let fEmbed = new Discord.RichEmbed();
                fEmbed.setColor(0x722f37);
                fEmbed.addField('**Não foi possivel escolher um vencedor para o sorteio**', 'Não foi obtido uma quantia minima de 5 participantes.');
                m.edit(fEmbed);
                channel.send('**SORTEIO FINALIZADO** `Boa sorte no próximo!`')
                return;
            }
            let A_1 = channel.fetchMessage(m.id).then(m=>m.reactions.get('🎅').users.filter(user => !user.bot).randomKey());
            let fuvvEmbed = new Discord.RichEmbed();
            A_1.then(a=>{
            channel.send(`**SORTEIO FINALIZADO**\nVencedor: <@${a}> !\nEntre em contato com <@505096421532368907> para receber os robux.`)
            fuvvEmbed.addField('**SORTEIO FINALIZADO**', `Vencedor: <@${a}>`);
            fuvvEmbed.setColor(0x722f37);
            m.edit(fuvvEmbed)
            });

        }, 1200 * 1000)
       }, 86400 * 1000);
    }
    if(message.content == "g!start +a +b +c | - d") {
        if(message.author.id !== "505096421532368907") return message.react('⛔');
        message.react('✅');
        message.channel.send('Iniciando sorteio...');
        let channel = message.channel;
        let embed = new Discord.RichEmbed();
        embed.setColor(0x722f37);
        embed.addField('🎁 **Sorteio de Natal valendo 5 ROBUX!** 🎁', 'Para participar do Sorteio de Natal clique no emoji á baixo e boa sorte! \nPlanejamos estes sorteios como forma de carinho aos nossos membros!', true);
        embed.addField('**Nota:**', 'Entrem no Grupo para receber os ROBUX caso voce seja o ganhador de um dos sorteios: https://web.roblox.com/My/Groups.aspx?gid=3652849', true);
        embed.setFooter('Estes sorteios acontecem depois de 24h todos os dias, e acabam no fim do Natal');
        embed.addField('**Créditos:**', 'O bot foi programado por <@505096421532368907> e o sorteio está sendo pago por ele também.')
        embed.setThumbnail('https://media.discordapp.net/attachments/505098823547224065/518237844200751117/ExemplaryThickAnkole-max-1mb.gif');
        let m = await channel.send(embed);
        channel.send('@everyone')
        m.react('🎅');
        await setTimeout(function () {
            if(m.reactions.size < 6) {
                let fEmbed = new Discord.RichEmbed();
                fEmbed.setColor(0x722f37);
                fEmbed.addField('**Não foi possivel escolher um vencedor para o sorteio**', 'Não foi obtido uma quantia minima de 5 participantes.');
                m.edit(fEmbed);
                channel.send('**SORTEIO FINALIZADO** `Boa sorte no próximo!`')
                return;
            }
            let A_1 = channel.fetchMessage(m.id).then(m=>m.reactions.get('🎅').users.filter(user => !user.bot).randomKey());
            let fuvvEmbed = new Discord.RichEmbed();
            A_1.then(a=>{
            channel.send(`**SORTEIO FINALIZADO**\nVencedor: <@${a}> !\nEntre em contato com <@505096421532368907> para receber os robux.`)
            fuvvEmbed.addField('**SORTEIO FINALIZADO**', `Vencedor: <@${a}>`);
            fuvvEmbed.setColor(0x722f37);
            m.edit(fuvvEmbed)
            });

        }, 1200 * 1000)
    }})
client.login(token);