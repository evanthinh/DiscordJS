/*
  Send a message using a webhook
*/

// Import the discord.js module
const Discord = require('discord.js');
const client = new Discord.Client();

// Create a new webhook
const hook = new Discord.WebhookClient('392047690642620416', 'iSbw2QnN6sJPKVR0wp328N2cEttcOsvmaZRBsH5q5aZ9zYRnIopTkBeSeq0YnCzl7_D8');
var secKza = 0;
var minKza = 0;
var hourKza = 0;

// Send a message using the webhook
hook.send('I am now alive!');
function openTimeCD(startHour, cd) {
	var d = new Date();
	var notiTimeElapsedS = (Date.now() - startHour) / 1000;
	// time till open windows
	secKza = Math.ceil(cd - notiTimeElapsedS);
	minKza = Math.ceil(secKza / 60);
	hourKza = Math.floor(minKza / 60);
	
}

function sendEmbed(){
	const embed = new Discord.RichEmbed();
	embed.setColor(0x00AE86);
	if(hourKza>=1){
		embed.addField('Window Open','```<Kzarka> '+hourKza+'h'+minKza+'p open window```',true);
	}
	else if(secKza>1){
		embed.addField('Window Open','```<Kzarka> '+minKza+'p open window```',true);
	}
	else embed.addField('Window Close','```<Kzarka> opened```',true);
	hook.send(embed);
} 
client.on('message', message => {
	setInterval(async function() {await message.delete();
		message.delete();sendEmbed();}, 10000);

  // If the message is "ping"
  if (message.content === 'kza') {
  	var startHour = Date.now();
    var kza = setInterval(function() {openTimeCD(startHour, 60);},1000);
  	if(message.content === 'kza' && secKza==0) clearInterval(kza);
    // Send "pong" to the same channel
    

  }
  
});



function windowOpenCD(startHour, cd) {
	var d = new Date();
	var TimeElapsedS = (Date.now() - startHour) / 1000;
	// time till spawn
	var secUntilWindowOpen = cd - notiTimeElapsedS;
	return secUntilWindowOpen;

	}

client.login("MzkyMDQ1MTYyMDUxNjY1OTIw.DRhgBw.RchMdEACnAv1rDkXTYBzhnmHcao");
