(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["spel"],{"073f":function(t,n,e){var i={"./music.png":"9f4c","./settings.jpg":"c372","./settings.png":"2855"};function s(t){var n=o(t);return e(n)}function o(t){if(!e.o(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=o,t.exports=s,s.id="073f"},"20d3":function(t,n,e){t.exports=e.p+"img/zebra.580636d4.png"},2855:function(t,n,e){t.exports=e.p+"img/settings.2e6fd9eb.png"},2887:function(t,n,e){"use strict";var i=e("e259"),s=e.n(i);s.a},"2c8e":function(t,n,e){t.exports=e.p+"img/katt.c85e970f.png"},"30c4":function(t,n,e){t.exports=e.p+"media/cheer2.1908731b.mp3"},5455:function(t,n,e){t.exports=e.p+"img/orm.7f0f23dd.png"},"551b":function(t,n,e){},"7fb5":function(t,n,e){"use strict";var i=e("551b"),s=e.n(i);s.a},"83bb":function(t,n,e){var i={"./anka.png":"f1e1","./geting.png":"e347","./grattis.gif":"d8b1","./gris.png":"af28","./groda.png":"8d84","./hund.png":"e732","./katt.png":"2c8e","./ko.png":"9dfc","./lamm.png":"9fc2","./orm.png":"5455","./panda.png":"f64d","./tiger.png":"8588","./zebra.png":"20d3"};function s(t){var n=o(t);return e(n)}function o(t){if(!e.o(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=o,t.exports=s,s.id="83bb"},8588:function(t,n,e){t.exports=e.p+"img/tiger.a7659a7e.png"},"8d84":function(t,n,e){t.exports=e.p+"img/groda.2c6ddb97.png"},"9dfc":function(t,n,e){t.exports=e.p+"img/ko.c4b4f0f9.png"},"9f4c":function(t,n,e){t.exports=e.p+"img/music.9c15533f.png"},"9fc2":function(t,n,e){t.exports=e.p+"img/lamm.709333ad.png"},af28:function(t,n,e){t.exports=e.p+"img/gris.78009d59.png"},b0c0:function(t,n,e){var i=e("83ab"),s=e("9bf2").f,o=Function.prototype,r=o.toString,a=/^\s*function ([^ (]*)/,c="name";i&&!(c in o)&&s(o,c,{configurable:!0,get:function(){try{return r.call(this).match(a)[1]}catch(t){return""}}})},c372:function(t,n,e){t.exports=e.p+"img/settings.18e7b7d2.jpg"},d8b1:function(t,n,e){t.exports=e.p+"img/grattis.df8e3d1e.gif"},e259:function(t,n,e){},e347:function(t,n,e){t.exports=e.p+"img/geting.5405b3a8.png"},e38b:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"spel"},[i("router-link",{attrs:{to:"/Home"}},[i("img",{staticClass:"button",attrs:{alt:"ApBC",src:e("9f2f")}})]),i("spelsida")],1)},s=[],o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"start"},[i("div",{staticClass:"game-screen"},[i("div",{staticClass:"settingsPanel",attrs:{id:"settingsPanel"},on:{mouseover:function(n){return t.openNav()},mouseleave:function(n){return t.closeNav()}}},[i("img",{attrs:{id:"settings",src:e("073f")("./"+t.settings_url)}}),i("img",{attrs:{id:"music_logo",src:e("073f")("./"+t.music_url)},on:{click:function(n){return t.muteSound()}}})]),i("div",{staticClass:"questionText"},[i("h1",[t._v(t._s(t.question123))])]),i("section",{attrs:{id:"section"}},[i("div",{staticClass:"quest1"},[i("div",{staticClass:"animalid"},[i("img",{attrs:{id:"animal_image",src:e("83bb")("./"+t.url)}})])])]),i("div",{staticClass:"buttons",attrs:{id:"buttons"}},[i("div",{staticClass:"button1",attrs:{id:"1"},on:{click:function(n){return t.validate(1)}}},[t._v(t._s(t.bt1))]),i("div",{staticClass:"button2",attrs:{id:"2"},on:{click:function(n){return t.validate(2)}}},[t._v(t._s(t.bt2))])])])])},r=[],a=(e("b0c0"),e("d3b7"),{name:"spelsida",props:{imageUrl:String,logoUrl:String},data:function(){return{question123:"Vad heter djuret?",url:"anka.png",settings_url:"settings.png",music_url:"music.png",animalName:"",otherAnimalName:"",currentID:null,otherAnswerID:null,bt1:"",bt2:"",musicMuted:!1,lastID:null,otherlastID:null}},created:function(){document.body.style.overflowX="hidden"},mounted:function(){this.currentID=1,this.animalName="anka",this.bt1="anka",this.bt2="fisk"},methods:{btn1:function(){console.log("in btn1 function")},btn2:function(){console.log("in btn2 function")},generateNumber:function(){console.log("Generating IDs"),this.currentID=Math.floor(10*Math.random()+1),this.otherAnswerID=Math.floor(10*Math.random()+1),console.log("Current ID generated is: "+this.currentID),console.log("Other ID generated is: "+this.otherAnswerID)},getNewRandomNumber:function(){this.lastID=this.currentID,this.otherlastID=this.otherAnswerID,console.log("Last correct answer is: "+this.lastID),console.log("Last other answer is: "+this.otherlastID);do{this.generateNumber()}while(this.currentID==this.otherAnswerID||this.currentID==this.lastID||this.otherAnswerID==this.otherlastID||this.otherAnswerID==this.lastID||this.currentID==this.otherlastID)},getNewobject:function(){var t=this;console.log("inside getImageUrl"),fetch("http://127.0.0.1:3000/api/apbc/"+this.otherAnswerID).then((function(t){return t.json()})).then((function(n){t.otherAnimalName=n.apbc.name,console.log("other animal name is: "+t.otherAnimalName)})),fetch("http://127.0.0.1:3000/api/apbc/"+this.currentID).then((function(t){return t.json()})).then((function(n){t.url=n.apbc.image,t.animalName=n.apbc.name;var e=Math.floor(2*Math.random()+1);1==e?(t.bt1=t.animalName,t.bt2=t.otherAnimalName):(t.bt2=t.animalName,t.bt1=t.otherAnimalName)}))},greeting:function(){if(console.log("grattis"),0==this.musicMuted){var t=new Audio(e("30c4"));t.play()}this.url="grattis.gif",this.question123="Grattis!",this.bt1="",this.bt2="",document.getElementById("buttons").style.opacity=0},validate:function(t){1==t&this.animalName==this.bt1||2==t&this.animalName==this.bt2?(this.resetSettings(),this.getNewRandomNumber(),this.getNewobject()):(console.log("wrong answer, try again!"),document.getElementById(t).style.backgroundColor="red")},resetSettings:function(){this.question123="Vad heter djuret?",document.getElementById("buttons").style.transition="0.5s ease-in-out 0s",document.getElementById("1").style.backgroundColor="darkgreen",document.getElementById("2").style.backgroundColor="darkgreen",document.getElementById("buttons").style.opacity=1},openNav:function(){console.log("openNav"),document.getElementById("settingsPanel").style.right="0px"},closeNav:function(){console.log("closeNav"),document.getElementById("settingsPanel").style.right="-170px"},muteSound:function(){1==this.musicMuted?(document.getElementById("music_logo").style.backgroundColor="#3a8bb1",this.musicMuted=!1):(document.getElementById("music_logo").style.backgroundColor="red",this.musicMuted=!0)}}}),c=a,u=(e("7fb5"),e("2877")),l=Object(u["a"])(c,o,r,!1,null,"2a491fab",null),g=l.exports,d={name:"spel",components:{spelsida:g}},m=d,f=(e("2887"),Object(u["a"])(m,i,s,!1,null,"8db155a6",null));n["default"]=f.exports},e732:function(t,n,e){t.exports=e.p+"img/hund.20ddc725.png"},f1e1:function(t,n,e){t.exports=e.p+"img/anka.3cd43f39.png"},f64d:function(t,n,e){t.exports=e.p+"img/panda.ed7f1043.png"}}]);
//# sourceMappingURL=spel.699c8350.js.map