function process(){$("#copy").css("display","block"),$("#result").css("display","block");var a="";for(Math.seedrandom($("#app").val()+$("#pass").val());a.length<8;)a+=chars[Math.floor(Math.random()*chars.length)];$("#result").text(a)}var chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";window.onload=function(){new Clipboard("#copy")};