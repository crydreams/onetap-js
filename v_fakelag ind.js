Render.Arc = function (x, y, radius, radius_inner, start_angle, end_angle, segments, color)
{
    segments = 360 / segments;

    for (var i = start_angle; i < start_angle + end_angle; i = i + segments)
    {

        var rad = i * Math.PI / 180;
        var rad2 = (i + segments) * Math.PI / 180;

        var rad_cos = Math.cos(rad);
        var rad_sin = Math.sin(rad);

        var rad2_cos = Math.cos(rad2);
        var rad2_sin = Math.sin(rad2);

        var x1_inner = x + rad_cos * radius_inner;
        var y1_inner = y + rad_sin * radius_inner;

        var x1_outer = x + rad_cos * radius;
        var y1_outer = y + rad_sin * radius;

        var x2_inner = x + rad2_cos * radius_inner;
        var y2_inner = y + rad2_sin * radius_inner;

        var x2_outer = x + rad2_cos * radius;
        var y2_outer = y + rad2_sin * radius;
        Render.Polygon( [
            [ x1_outer, y1_outer ],
            [ x2_outer, y2_outer ],
            [ x1_inner, y1_inner ] ],
            color
        );

        Render.Polygon( [
            [ x1_inner, y1_inner ],
            [ x2_outer, y2_outer ],
            [ x2_inner, y2_inner ] ],
            color
        );
    }
}
Render.Back = function (x,y)
{
    Render.GradientRect(x,y,25,26,1,[0,0,0,0],[0,0,0,30])
    Render.GradientRect(x+25,y,25,26,1,[0,0,0,30],[0,0,0,0])
}
function skeet()
{
    var choked = Globals.ChokedCommands()
    var font = Render.GetFont('Calibrib.ttf',23,true)
    var screensize = Render.GetScreenSize()
    var y = screensize[1]/4
    Render.Back(25,y*3+37)
    Render.String(35,y*3+39,0,'FL',[199, 209, 255,255],font)
    Render.Arc(70,y*3+50,10,6,0,360,120,[10,10,10,130])
    Render.Arc(70,y*3+50,9,7,0,choked*25.714,120,[199, 209, 255,255])


}
Cheat.RegisterCallback('Draw','skeet')