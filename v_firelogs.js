UI.AddCheckbox(["Misc", "Viev", ],"Rage bot fire logs");
function onRagebotLogs() {
    var e = "";
    Event.GetInt("exploit");
    tick = Globals.Tickcount(), 0 != tick && Globals.Tickcount() - tick < 16 && (e = (Globals.Tickcount() - tick).toString(), tick = 0);
    var t = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (saikatotsuka.hasOwnProperty(t)) {
        var a = [];
        a = UI.GetValue(["Config", "SUBTAB_MGR", "sweetyaw", "sweetyaw", "Override damage on weapons"]) && UI.GetValue(["Config", "Scripts", "JS Keybinds"], "Override damage key") ? kazutokirigaya : UI.GetValue(["Rage", "Target", saikatotsuka[t], "Minimum damage"]);
        var i = [];
        i = UI.GetValue(["Rage", "Exploits", "Key assignment", "Double tap"]) ? " | dt: " + e : "", UI.GetValue(["Config", "SUBTAB_MGR", "sweetyaw", "sweetyaw", "Ragebot logs"]) && (ragebot_target = Event.GetInt("target_index"), ragebot_target_hitbox = Event.GetInt("hitbox"), ragebot_target_hitchance = Event.GetInt("hitchance"), ragebot_target_safepoint = Event.GetInt("safepoint"), ragebot_target_exploit = Event.GetInt("exploit"), targetName = Entity.GetName(ragebot_target), pp("fired shot at " + targetName + "'s " + x3(ragebot_target_hitbox) + " [ " + ragebot_target + " ] ( hc: " + UI.GetValue(["Rage", "Accuracy", saikatotsuka[t], "Hitchance"]) + " | md: " + a + i + " | view: [ " + parseInt(Local.GetViewAngles()[0]) + " | " + parseInt(Local.GetViewAngles()[1]) + " ] | fl: " + UI.GetValue(["Rage", "Fake Lag", "General", "Limit"]) + " | vel: " + parseInt(loadgalax(Entity.GetLocalPlayer())) + " ) \n"))
    }
}