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
        channel.send(embed).then(m=>{
            channel.send('@everyone')
            m.react('🎅');
            setTimeout(async function(){

                let A_2 = await channel.fetchMessage(m.id).then(a=>a.reactions.get('🎅').count)
                if(A_2 < 6) {
                    let fEmbed = new Discord.RichEmbed();
                    fEmbed.setColor(0x722f37);
                    fEmbed.addField('**Não foi possivel escolher um vencedor para o sorteio**', 'Não foi obtido uma quantia minima de 5 participantes.');
                    m.edit(fEmbed);
                    channel.send('**SORTEIO FINALIZADO** `Boa sorte no próximo!`')
                    console.log('Sorteio finalizado');
                    return;
                }
                console.log(A_2);  
                let A_1 = m.reactions.get('🎅').users.filter(user => !user.bot).randomKey();
                let fuvvEmbed = new Discord.RichEmbed();
                console.log(A_1);
                let a = A_1;
                channel.send(`**SORTEIO FINALIZADO**\nVencedor: <@${a}> !\nEntre em contato com <@505096421532368907> para receber os robux.`)
                fuvvEmbed.addField('**SORTEIO FINALIZADO**', `Vencedor: <@${a}>`);
                fuvvEmbed.setColor(0x722f37);
                m.edit(fuvvEmbed)
            }, 1200 * 1000);
        });
       }, 86400 * 1000);
    }
    if(message.content == "g!start +a +b +c | - d") {
        if(message.author.id !== "276128532558512138") return message.react('⛔');
        message.react('✅');
        message.channel.send('Iniciando sorteio...');
        console.log(`Iniciando sorteio no canal ${message.channel.name}`)
        let channel = message.channel;
        let embed = new Discord.RichEmbed();
        embed.setColor(0x722f37);
        embed.addField('🎁 **Sorteio de Natal valendo 5 ROBUX!** 🎁', 'Para participar do Sorteio de Natal clique no emoji á baixo e boa sorte! \nPlanejamos estes sorteios como forma de carinho aos nossos membros!', true);
        embed.addField('**Nota:**', 'Entrem no Grupo para receber os ROBUX caso voce seja o ganhador de um dos sorteios: https://web.roblox.com/My/Groups.aspx?gid=3652849', true);
        embed.setFooter('Estes sorteios acontecem depois de 24h todos os dias, e acabam no fim do Natal');
        embed.addField('**Créditos:**', 'O bot foi programado por <@505096421532368907> e o sorteio está sendo pago por ele também.')
        embed.setThumbnail('https://media.discordapp.net/attachments/505098823547224065/518237844200751117/ExemplaryThickAnkole-max-1mb.gif');
        channel.send(embed).then(m=>{
        channel.send('@everyone')
        m.react('🎅');
        setTimeout(async function(){

            let A_2 = await channel.fetchMessage(m.id).then(a=>a.reactions.get('🎅').count)
            if(A_2 < 6) {
                let fEmbed = new Discord.RichEmbed();
                fEmbed.setColor(0x722f37);
                fEmbed.addField('**Não foi possivel escolher um vencedor para o sorteio**', 'Não foi obtido uma quantia minima de 5 participantes.');
                m.edit(fEmbed);
                channel.send('**SORTEIO FINALIZADO** `Boa sorte no próximo!`')
                console.log('Sorteio finalizado');
                return;
            }
            console.log(A_2);  
            let A_1 = m.reactions.get('🎅').users.filter(user => !user.bot).randomKey();
            let fuvvEmbed = new Discord.RichEmbed();
            console.log(A_1);
            let a = A_1;
            channel.send(`**SORTEIO FINALIZADO**\nVencedor: <@${a}> !\nEntre em contato com <@505096421532368907> para receber os robux.`)
            fuvvEmbed.addField('**SORTEIO FINALIZADO**', `Vencedor: <@${a}>`);
            fuvvEmbed.setColor(0x722f37);
            m.edit(fuvvEmbed)
        }, 1200 * 1000);
        });
    }})
client.login(token);
