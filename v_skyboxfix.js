var wasmadetransparent = false;

function ensure_requirements_met(){
    UI.SetValue(["Misc.", "Helpers", "SHEET_MGR", "Client", "Bypass sv_pure"], 1);
    UI.SetValue(["Misc.", "Helpers", "SHEET_MGR", "Client", "Force sv_cheats"], 1);
}

function get_skybox(){
 if (UI.GetString(["Visuals", "World", "SHEET_MGR", "General", "Skybox"]) == "Custom")
    return UI.GetString(["Visuals", "World", "SHEET_MGR", "General", "Custom skybox"]);
 else
    return UI.GetString(["Visuals", "World", "SHEET_MGR", "General", "Skybox"]);
}

function maketransparent(){
    Cheat.ExecuteCommand ("mat_suppress \"models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_clouds_001\"");
    Cheat.ExecuteCommand ("mat_suppress \"models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_clouds_002\"");
    Cheat.ExecuteCommand ("mat_suppress \"models\props\de_cbble\dist_mountain_a\dist_mountain_a.mdl\"");
    Cheat.ExecuteCommand ("mat_suppress \"models/props/de_nuke/hr_nuke/nuke_skydome_001/nuke_skydome_001\"");
    Cheat.ExecuteCommand ("mat_suppress \"models/props/de_dust/hr_dust/dust_skybox/sky_dust2\"");
    Cheat.ExecuteCommand ("mat_suppress \"models/props/de_dust/hr_dust/dust_skybox/sky_dust2\"");
    Cheat.ExecuteCommand ("mat_suppress \"models/props/de_vertigo/hr_vertigo/vertigo_skybox/sky_vertigo\"");
    wasmadetransparent = true;
}

function fix_skybox() {
    var map = World.GetMapName();
    ensure_requirements_met()

    if (map == "de_inferno" || map == "de_nuke" || map == "de_dust2" || map == "de_train" || map == "de_cbble" || map == "de_vertigo")
    {
    if (wasmadetransparent == false)
        maketransparent();

    Convar.SetString("sv_skyname", get_skybox());
    }
}

function init(){
  if (World.GetServerString() != '')
    fix_skybox();   
}
init();

function reset_trasnparent(){
    wasmadetransparent = false;
}

Cheat.RegisterCallback("round_start", "fix_skybox")
Cheat.RegisterCallback("player_connect_full", "reset_trasnparent")