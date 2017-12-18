const Discord = require("discord.js");
const client = new Discord.Client();
const mentionHook = new Discord.WebhookClient('392047690642620416', 'iSbw2QnN6sJPKVR0wp328N2cEttcOsvmaZRBsH5q5aZ9zYRnIopTkBeSeq0YnCzl7_D8');

client.on("ready", () => {
  console.log("I am ready!");
});

let prefix = "~";
client.on("message", (message) => {
  if (message.author.id === client.user.id || message.author.bot) return;
  if (message.isMentioned("213722448070180864") || message.mentions.everyone || (message.guild && message.mentions.roles.filter(r => message.guild.member("213722448070180864").roles.has(r.id)).size > 0)) {
      if (message.author.id === "213722448070180864"){
      mentionHook.send("You mentioned yourself!")
      }
      // Additional Code
      mentionHook.send("You were mentioned!");
  }
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
});

client.login("MzkyMDQ1MTYyMDUxNjY1OTIw.DRhgBw.RchMdEACnAv1rDkXTYBzhnmHcao");