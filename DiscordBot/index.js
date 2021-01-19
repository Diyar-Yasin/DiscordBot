//Source for majority of code below:
//https://www.youtube.com/watch?v=q0lsD7U0JSI&t=307s&ab_channel=CodeLyon

require('dotenv').config();

const { Client, Attachment } = require('discord.js');
const bot = new Client();

const ytdl = require("ytdl-core");
const PREFIX = "=";

var servers = {};

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', message => {

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'play':

            function play(connection, message) {
                var server = servers[message.guild.id];

                server.dispatcher = connection.play(ytdl(server.queue[0], { filter: "audioonly" }));

                server.queue.shift();

                server.dispatcher.on("end", function () {
                    if (server.queue[0]) {
                        play(connection, message);

                    } else {
                        connection.disconnect();
                    }
                })
            }

            if (!args[1]) {
                message.channel.send("you need to provide a link!");
                return;
            }

            if (!message.member.voice.channel) {
                message.channel.send("You must be in a channel to use this bot!");
                return;
            }

            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.member.voice.connection) message.member.voice.channel.join().then(function (connection) {
                play(connection, message);
            })

            break;

        case 'skip':
            var server = servers[message.guild.id];

            if (!server.queue[0]) {
                message.channel.send("I can't skip nothing dummy :P")
            } else if (server.dispatcher) {
                server.dispatcher.end();
                message.channel.send("Yeah, I hate that one too");
            }

            break;

        case 'leave':
            var server = servers[message.guild.id];

            if (message.guild.voice.connection) {
                for (var i = server.queue.length - 1; i >= 0; i--) {
                    server.queue.splice(i, 1);
                }

                server.dispatcher.end();
                message.channel.send("Thanks for listening!");
            }

            if (message.guild.voiceConnection) server.dispatcher.end();
            break;

        case 'pause':
            var server = servers[message.guild.id];

            if (!server.dispatcher.pause()) {
                server.dispatcher.pause();
                message.channel.send("I'll shut up..");
            } else {
                server.dispatcher.resume();
                message.channel.send("Hit it!");
            }
            
    }
})


bot.login(process.env.DISCORDJS_BOT_TOKEN);