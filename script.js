function terminateorigemdub(){origemdub[_0xe591[25]]=!1,origemdub[_0xe591[26]]=!1,origemdub[_0xe591[27]]=!1,document[_0xe591[30]](_0xe591[29])[_0xe591[28]]=140,commandBox[_0xe591[32]](_0xe591[31],commandListener),origemdubGuiButton[_0xe591[33]](),clearInterval(autoWootInterval),clearInterval(customEmoteInterval),resetDefaultLook(),API[_0xe591[35]](_0xe591[34])}function loadGUI(){var e=_0xe591[36]+Color[_0xe591[37]]+_0xe591[38]+Color[_0xe591[39]]+_0xe591[40],o=_0xe591[41]+Color[_0xe591[42]]+_0xe591[43],t=_0xe591[44]+Color[_0xe591[45]]+_0xe591[46],x=_0xe591[47],_=_0xe591[48],i=_0xe591[49]+e+o+t+x+_0xe591[50];$(_0xe591[51])[_0xe591[4]](i),$(_0xe591[51])[_0xe591[4]](_),$(_0xe591[53])[_0xe591[4]](_0xe591[52]),$(_0xe591[56])[_0xe591[55]]($(_0xe591[54])),$(_0xe591[58])[_0xe591[4]](_0xe591[57]),$(_0xe591[60])[_0xe591[4]](_0xe591[59]),$(_0xe591[60])[_0xe591[4]](_0xe591[61]),$(_0xe591[60])[_0xe591[4]](_0xe591[62]),$(_0xe591[60])[_0xe591[64]](_0xe591[63]),origemdub[_0xe591[14]](_0xe591[65])}function loadListeners(){$(_0xe591[74])[_0xe591[73]](function(){0==!origemdub[_0xe591[27]]?(document[_0xe591[30]](_0xe591[68])[_0xe591[67]][_0xe591[66]]=_0xe591[69],$(_0xe591[60])[_0xe591[70]](500),origemdub[_0xe591[27]]=!1):(document[_0xe591[30]](_0xe591[68])[_0xe591[67]][_0xe591[66]]=_0xe591[71],$(_0xe591[60])[_0xe591[64]](_0xe591[72]),origemdub[_0xe591[27]]=!0)}),$(_0xe591[77])[_0xe591[73]](function(){1==!origemdub[_0xe591[25]]?(origemdub[_0xe591[25]]=!0,autoWootButton[_0xe591[67]][_0xe591[75]]=Color[_0xe591[42]],autoWoot()):(origemdub[_0xe591[25]]=!1,autoWootButton[_0xe591[67]][_0xe591[75]]=Color[_0xe591[76]])}),origemdub[_0xe591[14]](_0xe591[78])}function checkForEmotes(){}function commandListener(e){if(keyCode=e[_0xe591[79]],command=commandBox[_0xe591[80]],13==keyCode){if(command[_0xe591[82]](_0xe591[81])){if(command===_0xe591[83]&&(API[_0xe591[35]](origemdub[_0xe591[84]]+_0xe591[85]),API[_0xe591[35]](_0xe591[86]),API[_0xe591[35]](_0xe591[87]),API[_0xe591[35]](_0xe591[88]),API[_0xe591[35]](_0xe591[89]),API[_0xe591[35]](_0xe591[90]),Dubtrack[_0xe591[7]][_0xe591[6]][_0xe591[92]][_0xe591[91]]()),command[_0xe591[82]](_0xe591[93])){{command[_0xe591[96]](_0xe591[13],_0xe591[95])[_0xe591[94]](7)}API[_0xe591[11]](parseInt(command[_0xe591[94]](8))),API[_0xe591[35]](_0xe591[97]+parseInt(command[_0xe591[94]](8))),Dubtrack[_0xe591[7]][_0xe591[6]][_0xe591[92]][_0xe591[91]]()}command===_0xe591[98]&&(API[_0xe591[35]](_0xe591[99]),Dubtrack[_0xe591[7]][_0xe591[6]][_0xe591[92]][_0xe591[91]]()),command===_0xe591[100]&&API[_0xe591[102]](_0xe591[101]),command===_0xe591[103]&&terminateorigemdub()}$(_0xe591[104])[_0xe591[8]](_0xe591[95]),document[_0xe591[107]](_0xe591[106])[0][_0xe591[105]](!1)}}function autoWoot(){origemdub[_0xe591[25]]&&wootButton[_0xe591[73]]()}function connectHTML(){wootButton=$(_0xe591[108]),mehButton=$(_0xe591[109]),origemdubGuiButton=document[_0xe591[30]](_0xe591[68]),autoWootButton=document[_0xe591[30]](_0xe591[110]),commandBox=document[_0xe591[30]](_0xe591[111]),origemdub[_0xe591[14]](_0xe591[112])}function startUp(){loadGUI(),connectHTML(),loadListeners(),customEmoteInterval=setInterval(checkForEmotes,100),document[_0xe591[30]](_0xe591[29])[_0xe591[28]]=1e20,commandBox[_0xe591[113]](_0xe591[31],commandListener),API[_0xe591[35]](origemdub[_0xe591[84]]+_0xe591[114]),document[_0xe591[107]](_0xe591[106])[0][_0xe591[105]](!1),origemdub[_0xe591[14]](origemdub[_0xe591[84]]+_0xe591[114]),Dubtrack[_0xe591[117]][_0xe591[116]](_0xe591[115],autoWoot)}var _0xe591=["OrigemDub","V2.2.1.20","<li id='chatlog'><b>","<b></li>","append","_messagesEl","chat","room","val","#chat-txt-message","sendMessage","setVolume","playerController"," ","log","#FF0000","#FF6600","#FFFF00","#00FF00","#0000FF","#FF00FF","#000000","#FFFFFF","#00FFFF","#99CC00","isAutoWoot","isCustomTheme","isGUIHidden","maxLength","chat-txt-message","getElementById","keydown","removeEventListener","remove","origemdub has been terminated! All features are no longer active.","chatLog","#origemdub-gui-main{z-index:99999;display:none;position:fixed;width:300px;height:100%;font-size:0.75em;text-align:center;cursor:pointer;background-color:","BLACK",";color:","CYAN",";padding:0.5em;border-radius:5px;border:1px solid gray;}","#origemdub-autowoot{ font-size: 16px; color:","GREEN",";}","#chatlog{font-size:0.75em;color:","GREEN_YELLOW","}","#origemdub-gui-main h3{color: #FFF; font-size: 20px;}","<style>#origemdub-gui-options { background-color: black; cursor: pointer; }</style>","<style>","</style>","body",'<button id="origemdub-gui-options">Origem Dub</button>',".header-left-navigation","#main-section","insertBefore",'<div id="origemdub-gui-main"></div>','<div><span id="origemdub-gui"></span></div>',"#origemdub-gui-main","<div><h3>Settings</h3></div>","#origemdub-gui",'<div><span id="origemdub-autowoot" class="origemdub-toggle">AutoDub</span></div>','<div><input id="origemdub-commandbox" class="origemdub-toggle" placeholder="Command Box (ex: /cmd)"></div>',"fast","hide","GUI Contents Loaded!","display","style","origemdub-gui-main","block","show","none","slow","click","#origemdub-gui-options","color","RED","#origemdub-autowoot","GUI Listeners Loaded!","keyCode","value","/","startsWith","/cmd","origemdub"," Commands:","- /cmd - Displays the commands","- /vol (Value) - Sets the volume to value (0-100)","- /emojis - Links to a website that has available Emojis to use","- /origem - Shares a link to get Origem-Dub","- /off - Turn Off the Origem-Dub","play","chatSound","/vol","substring","","replace","Volume set to: ","/emojis","Emoji Cheat Sheet - <a href='http://www.emoji-cheat-sheet.com/' target='_blank'>Click Here</a>","/origem","Origem-Dub: http://origem-dub.weebly.com","sendChat","/off","#origemdub-commandbox","scrollIntoView","chat-main","getElementsByClassName",".icon-arrow-up",".icon-arrow-down","origemdub-autowoot","origemdub-commandbox","HTML Variables connected to their HTML parts!","addEventListener"," Started!","realtime:room_playlist-update","on","Events"],NAME=_0xe591[0],VERSION=_0xe591[1],wootButton,mehButton,origemdubGuiButton,autoWootButton,commandBox,autoWootInterval,customEmoteInterval;API={chatLog:function(e){Dubtrack[_0xe591[7]][_0xe591[6]][_0xe591[5]][_0xe591[4]](_0xe591[2]+e+_0xe591[3])},sendChat:function(e){$(_0xe591[9])[_0xe591[8]](e),Dubtrack[_0xe591[7]][_0xe591[6]][_0xe591[10]]()},setVolume:function(e){Dubtrack[_0xe591[12]][_0xe591[11]](e)}},origemdub={origemdub:NAME+_0xe591[13]+VERSION,log:function(e){console[_0xe591[14]](e)},isAutoWoot:!0,isGUIHidden:!0},Color={RED:_0xe591[15],ORANGE:_0xe591[16],YELLOW:_0xe591[17],GREEN:_0xe591[18],BLUE:_0xe591[19],PURPLE:_0xe591[20],BLACK:_0xe591[21],WHITE:_0xe591[22],CYAN:_0xe591[23],GREEN_YELLOW:_0xe591[24]},startUp();
