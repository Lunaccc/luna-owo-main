const Discord = require("discord.js");     /// ayarlar.json da token yerine hesap tokeninizi koyacaksınız (!!Bot Token Değil!!)
const ayarlar = require("./ayarlar.json");
const client = new Discord.Client();
const {
	JsonDatabase
} = require("wio.db");
const db = new JsonDatabase("db");
var kanal = ayarlar.kanal; 
var sahip = ayarlar.sahip; 
var prefix = ayarlar.prefix

client.on("ready",()=>{
	console.log("Artık Senin İçin Çalışıyorum.")
});


const Yılmazrandom = ["18000", "20000", "16000","15000","17000","19000"]
const Yılmazrandomsayı = Yılmazrandom[Math.floor(Math.random() * Yılmazrandom.length)];
var Yılmazrandommesaj = Math.floor(Math.random() * 999999999) + 1;
var Yılmazrandommesaj1 = Math.floor(Math.random() * 999999999) + 1;
var Yılmazrandommesaj2 = Math.floor(Math.random() * 999999999) + 1;

const Yılmazrandom1 = ["18000", "19000", "20000", "21000","15000","16000","17000"]
const Yılmazrandomsayı1 = Yılmazrandom1[Math.floor(Math.random() * Yılmazrandom1.length)];

const Yılmazrandom2 = ["15000", "16000", "17000"]
const Yılmazrandomsayı2 = Yılmazrandom2[Math.floor(Math.random() * Yılmazrandom2.length)];


setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo");
		client.channels.get(kanal).send(Yılmazrandommesaj);
	};
},Yılmazrandomsayı);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo h");
		client.channels.get(kanal).send(Yılmazrandommesaj1);
	};
},Yılmazrandomsayı1);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo b");
		client.channels.get(kanal).send(Yılmazrandommesaj2);
	};
},Yılmazrandomsayı2);

client.on("message",message=>{
	if(message.channel.id==kanal){
		if(message.author.id=="408785106942164992"){ // BURAYI ELLEMEYIN
			if(message.content.includes("Beep Boop") || message.content.includes("Please DM me") || message.content.includes("Are you a real human?")){
				db.set("owodg","1");
				message.channel.send(`owo parakasma botu pasifleştirildi.`);
			};
		};
	};

	if(message.author.id == sahip){
		if(message.content == `${prefix}aç`){
			db.set("owodg","0");
			message.channel.send("Owo Para Kasma Aktif");
		};
	};

	if(message.author.id == sahip){
		if(message.content == `${prefix}kapat`){
			db.set("owodg","1");
			message.channel.send("Owo Para Kasma Pasif");

			
		};
	};
});

client.login(ayarlar.token);