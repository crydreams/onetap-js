var BreakLeg = true
var Loop = 1;
var Loop2 = 1;

function legs () {

var Amount = 10 * 0
if (BreakLeg == true) {
if ( Loop2 > Amount ) {
UI.SetValue( ["Misc." , "Movement" , "Leg movement"] , 1 )
UI.SetValue( ["Rage" , "Anti Aim" , "Jitter move"] , 1 )



Loop2 = 0;
BreakLeg = false
}
}else if (BreakLeg == false) {
if ( Loop2 > Amount ){
UI.SetValue( ["Misc." , "Movement" , "Leg movement"] , 2 )
UI.SetValue( ["Rage" , "Anti Aim" , "Jitter move"] , 0 )


Loop2 = 0;
BreakLeg = true
}
}

Loop2 = Loop2 + 1;
}

Cheat.RegisterCallback("Draw", "legs");
