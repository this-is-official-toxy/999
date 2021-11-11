let { newCommand } = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let got = require('got');
let fs = require('fs');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('weather');

if (Config.WORKTYPE == 'private') {

    newCommand(
             {pattern: 'weather ?(.*)',
              desc: Lang.WEATHER_DESC,
              private: true},
              async (message, match) => {

	    if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_LOCATION, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
	    const url = `http://api.openweathermap.org/data/2.5/weather?q=${match[1]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📍 ' + Lang.LOCATION +':* ```' + match[1] + '```\n\n' +
		    '*☀ ' + Lang.TEMP +':* ```' + json.main.temp_max + '°```\n' + 
		    '*ℹ ' + Lang.DESC +':* ```' + json.weather[0].description + '```\n' +
		    '*☀ ' + Lang.HUMI +':* ```%' + json.main.humidity + '```\n' + 
		    '*💨 ' + Lang.WIND +':* ```' + json.wind.speed + 'm/s```\n' + 
		    '*☁ ' + Lang.CLOUD +':* ```%' + json.clouds.all + '```\n', MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
	    } catch {
		    return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
	    }
    });
}
if (Config.WORKTYPE == 'public') {

    newCommand(
             {pattern: 'weather ?(.*)',
              desc: Lang.WEATHER_DESC,
              private: false},
              async (message, match) => {

	    if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_LOCATION, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
	    const url = `http://api.openweathermap.org/data/2.5/weather?q=${match[1]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📍 ' + Lang.LOCATION +':* ```' + match[1] + '```\n\n' +
		    '*☀ ' + Lang.TEMP +':* ```' + json.main.temp_max + '°```\n' + 
		    '*ℹ ' + Lang.DESC +':* ```' + json.weather[0].description + '```\n' +
		    '*☀ ' + Lang.HUMI +':* ```%' + json.main.humidity + '```\n' + 
		    '*💨 ' + Lang.WIND +':* ```' + json.wind.speed + 'm/s```\n' + 
		    '*☁ ' + Lang.CLOUD +':* ```%' + json.clouds.all + '```\n', MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
	    } catch {
		    return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
	    }
    });
}
