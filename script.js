function terminateorigemdub(){origemdub[_0x37cd[25]]=!1,origemdub[_0x37cd[26]]=!1,origemdub[_0x37cd[27]]=!1,commandBox[_0x37cd[29]](_0x37cd[28],commandListener),origemdubGuiButton[_0x37cd[30]](),resetDefaultLook(),API[_0x37cd[32]](_0x37cd[31])}function loadGUI(){var d=_0x37cd[33]+Color[_0x37cd[34]]+_0x37cd[35]+Color[_0x37cd[36]]+_0x37cd[37],c=_0x37cd[38]+Color[_0x37cd[39]]+_0x37cd[40],o=_0x37cd[41],e=_0x37cd[42],t=_0x37cd[43],x=_0x37cd[44]+d+c+o+e+_0x37cd[45];$(_0x37cd[46])[_0x37cd[4]](x),$(_0x37cd[46])[_0x37cd[4]](t),$(_0x37cd[48])[_0x37cd[4]](_0x37cd[47]),$(_0x37cd[51])[_0x37cd[50]]($(_0x37cd[49])),$(_0x37cd[53])[_0x37cd[4]](_0x37cd[52]),$(_0x37cd[55])[_0x37cd[4]](_0x37cd[54]),$(_0x37cd[55])[_0x37cd[4]](_0x37cd[56]),$(_0x37cd[55])[_0x37cd[4]](_0x37cd[57]),$(_0x37cd[55])[_0x37cd[59]](_0x37cd[58]),origemdub[_0x37cd[14]](_0x37cd[60])}function loadListeners(){$(_0x37cd[70])[_0x37cd[69]](function(){0==!origemdub[_0x37cd[27]]?(document[_0x37cd[64]](_0x37cd[63])[_0x37cd[62]][_0x37cd[61]]=_0x37cd[65],$(_0x37cd[55])[_0x37cd[66]](500),origemdub[_0x37cd[27]]=!1):(document[_0x37cd[64]](_0x37cd[63])[_0x37cd[62]][_0x37cd[61]]=_0x37cd[67],$(_0x37cd[55])[_0x37cd[59]](_0x37cd[68]),origemdub[_0x37cd[27]]=!0)}),$(_0x37cd[73])[_0x37cd[69]](function(){1==!origemdub[_0x37cd[25]]?(origemdub[_0x37cd[25]]=!0,autoWootButton[_0x37cd[62]][_0x37cd[71]]=Color[_0x37cd[39]],autoWoot()):(origemdub[_0x37cd[25]]=!1,autoWootButton[_0x37cd[62]][_0x37cd[71]]=Color[_0x37cd[72]])}),origemdub[_0x37cd[14]](_0x37cd[74])}function checkForEmotes(){}function commandListener(d){if(keyCode=d[_0x37cd[75]],command=commandBox[_0x37cd[76]],13==keyCode){if(command[_0x37cd[78]](_0x37cd[77])){if(command===_0x37cd[79]&&(API[_0x37cd[32]](NAME+_0x37cd[80]),API[_0x37cd[32]](_0x37cd[81]),API[_0x37cd[32]](_0x37cd[82]),API[_0x37cd[32]](_0x37cd[83]),API[_0x37cd[32]](_0x37cd[84]),API[_0x37cd[32]](_0x37cd[85]),Dubtrack[_0x37cd[7]][_0x37cd[6]][_0x37cd[87]][_0x37cd[86]]()),command[_0x37cd[78]](_0x37cd[88])){{command[_0x37cd[91]](_0x37cd[13],_0x37cd[90])[_0x37cd[89]](7)}API[_0x37cd[11]](parseInt(command[_0x37cd[89]](8))),API[_0x37cd[32]](_0x37cd[92]+parseInt(command[_0x37cd[89]](8))),Dubtrack[_0x37cd[7]][_0x37cd[6]][_0x37cd[87]][_0x37cd[86]]()}command===_0x37cd[93]&&(API[_0x37cd[32]](_0x37cd[94]),Dubtrack[_0x37cd[7]][_0x37cd[6]][_0x37cd[87]][_0x37cd[86]]()),command===_0x37cd[95]&&API[_0x37cd[97]](_0x37cd[96]),command===_0x37cd[98]&&terminateorigemdub()}$(_0x37cd[99])[_0x37cd[8]](_0x37cd[90]),document[_0x37cd[102]](_0x37cd[101])[0][_0x37cd[100]](!1)}}function autoWoot(){origemdub[_0x37cd[25]]&&wootButton[_0x37cd[69]]()}function connectHTML(){wootButton=$(_0x37cd[103]),mehButton=$(_0x37cd[104]),origemdubGuiButton=document[_0x37cd[64]](_0x37cd[63]),autoWootButton=document[_0x37cd[64]](_0x37cd[105]),commandBox=document[_0x37cd[64]](_0x37cd[106]),origemdub[_0x37cd[14]](_0x37cd[107])}function startUp(){loadGUI(),connectHTML(),loadListeners(),customEmoteInterval=setInterval(checkForEmotes,100),document[_0x37cd[64]](_0x37cd[109])[_0x37cd[108]]=1e20,commandBox[_0x37cd[110]](_0x37cd[28],commandListener),API[_0x37cd[32]](origemdub[_0x37cd[111]]+_0x37cd[112]),document[_0x37cd[102]](_0x37cd[101])[0][_0x37cd[100]](!1),origemdub[_0x37cd[14]](origemdub[_0x37cd[111]]+_0x37cd[112]),Dubtrack[_0x37cd[115]][_0x37cd[114]](_0x37cd[113],autoWoot)}var _0x37cd=["OrigemDub","V2.2.1.21","<li id='chatlog'><b>","<b></li>","append","_messagesEl","chat","room","val","#chat-txt-message","sendMessage","setVolume","playerController"," ","log","#FF0000","#FF6600","#FFFF00","#00FF00","#0000FF","#FF00FF","#000000","#FFFFFF","#00FFFF","#99CC00","isAutoWoot","isCustomTheme","isGUIHidden","keydown","removeEventListener","remove","origemdub has been Disabled.","chatLog","#origemdub-gui-main{z-index:99999;display:none;position:fixed;width:300px;height:100%;font-size:0.75em;text-align:center;cursor:pointer;background-color:","BLACK",";color:","CYAN",";padding:0.5em;border-radius:5px;border:1px solid gray;}","#origemdub-autowoot{ font-size: 16px; color: ","GREEN",";}","#chatlog{font-size:0.75em;color: #12A9E0}","#origemdub-gui-main h3{color: #FFF; font-size: 20px;}","<style>#origemdub-gui-options { background-color: black; cursor: pointer; }</style>","<style>","</style>","body",'<img id="origemdub-gui-options" src="https://i.imgur.com/hAFKXly.png">',".header-left-navigation","#main-section","insertBefore",'<div id="origemdub-gui-main"></div>','<div><span id="origemdub-gui"></span></div>',"#origemdub-gui-main","<div><h3>Settings</h3></div>","#origemdub-gui",'<div><span id="origemdub-autowoot" class="origemdub-toggle">AutoDub</span></div>','<div><input id="origemdub-commandbox" class="origemdub-toggle" placeholder="Command Box (ex: /cmd)"></div>',"fast","hide","GUI Contents Loaded!","display","style","origemdub-gui-main","getElementById","block","show","none","slow","click","#origemdub-gui-options","color","RED","#origemdub-autowoot","GUI Listeners Loaded!","keyCode","value","/","startsWith","/cmd"," Commands:","- /cmd - Displays the commands","- /vol (Value) - Sets the volume to value (0-100)","- /emojis - Links to a website that has available Emojis to use","- /origem - Shares a link to get Origem-Dub","- /off - Turn Off the Origem-Dub","play","chatSound","/vol","substring","","replace","Volume set to: ","/emojis","Emoji Cheat Sheet - <a href='http://www.emoji-cheat-sheet.com/' target='_blank'>Click Here</a>","/origem","Origem-Dub: http://origem-dub.weebly.com","sendChat","/off","#origemdub-commandbox","scrollIntoView","chat-main","getElementsByClassName",".icon-arrow-up",".icon-arrow-down","origemdub-autowoot","origemdub-commandbox","HTML Variables connected to their HTML parts!","maxLength","chat-txt-message","addEventListener","origemdub"," Started!","realtime:room_playlist-update","on","Events"],NAME=_0x37cd[0],VERSION=_0x37cd[1],wootButton,mehButton,origemdubGuiButton,autoWootButton,commandBox,autoWootInterval,customEmoteInterval;API={chatLog:function(d){Dubtrack[_0x37cd[7]][_0x37cd[6]][_0x37cd[5]][_0x37cd[4]](_0x37cd[2]+d+_0x37cd[3])},sendChat:function(d){$(_0x37cd[9])[_0x37cd[8]](d),Dubtrack[_0x37cd[7]][_0x37cd[6]][_0x37cd[10]]()},setVolume:function(d){Dubtrack[_0x37cd[12]][_0x37cd[11]](d)}},origemdub={origemdub:NAME+_0x37cd[13]+VERSION,log:function(d){console[_0x37cd[14]](d)},isAutoWoot:!0,isGUIHidden:!0},Color={RED:_0x37cd[15],ORANGE:_0x37cd[16],YELLOW:_0x37cd[17],GREEN:_0x37cd[18],BLUE:_0x37cd[19],PURPLE:_0x37cd[20],BLACK:_0x37cd[21],WHITE:_0x37cd[22],CYAN:_0x37cd[23],GREEN_YELLOW:_0x37cd[24]},startUp();
