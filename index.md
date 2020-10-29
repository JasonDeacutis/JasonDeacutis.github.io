<head>
	<link href="twentytwenty/css/foundation.css" rel="stylesheet" type="text/css" />
	<link href="twentytwenty/css/twentytwenty.css" rel="stylesheet" type="text/css" />
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
			  integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
			  crossorigin="anonymous"></script>
	<script src="twentytwenty/js/jquery.event.move.js"></script>
	<script src="twentytwenty/js/jquery.twentytwenty.js"></script>
	<script>
		$(window).on('load', function() {
		  $(".twentytwenty-container").twentytwenty({default_offset_pct: 0.5, move_with_handle_only:0, click_to_move:1});
		});
	</script>
</head>

Jason Deacutis<br>
jasondeacutis@gmail.com

## [Gunner, HEAT, PC! (GHPC)](https://gunnerheatpc.com/ "https://gunnerheatpc.com/")
*Tank combat simulation game, a cross between accessible arcade & military simulation. Translates to the crew command  "Gunner, use High Explosive Anti Tank ammunition on enemy Personnel Carrier!" (yes, its nerdy)*
### Vehicle Driver AI
Integrated AI into our physics vehicle controller, allowing vehicles to autonomously navigate to a destination while avoiding obstacles.
{% include embed-youtube.html id="Yss-8LuLG_k" %}
{% include embed-youtube.html id="bV-npNsO1-w" %}

### Reticle System
Procedural crosshairs integrated with the ballistics system, allowing projectile trajectories to change on-the-fly for faster design iteration.
All in-game reticles are based on firsthand sources (often difficult to find).
[![Reticles](content\GHPC\Reticles\reticles_small.png)](content\GHPC\Reticles\reticles_full.png "Enlarge")

[Stadiametric rangefinding](https://en.wikipedia.org/wiki/Stadiametric_rangefinding "wikipedia") allows quickly determining the distance of a target based on its apparent size.<br>
*[T-72](https://en.wikipedia.org/wiki/T-72 "wikipedia") stadia showing a [M60A3](https://en.wikipedia.org/wiki/M60_tank#M60A3_series "wikipedia") at 500 meter distance increments*<br>
[![Stadia](content\GHPC\Reticles\stadia_small.png)](content\GHPC\Reticles\stadia_full.png "Enlarge")

### Thermal Imaging (FLIR)
[![FLIR](content\GHPC\FLIR\TTS_small.png)](content\GHPC\FLIR\TTS.png "Enlarge")
{% include compare.html a="content\GHPC\FLIR\vehicles_visible.png" b="content\GHPC\FLIR\vehicles_FLIR.png" labelA="Visible" labelB="FLIR" orientation="horizontal" %}
{% include compare.html a="content\GHPC\FLIR\leslie-cube-visible.jpg" b="content\GHPC\FLIR\leslie-cube-FLIR.jpg" labelA="Visible" labelB="FLIR" orientation="vertical" %}

### Day-Night Cycle
Realtime sky simulation, based on a simplified solar system model.<br>Includes seasonal sun elevation, moon phases, & [earthshine](https://en.wikipedia.org/wiki/Planetshine#/media/File:New_Moon.jpg "real life earthshine (wikipedia)").<br>The moon is also simulated as a light source & brightness is affected by phase.
[![Moon Phases](content\GHPC\Sky\sunpath_small.png)](content\GHPC\Sky\sunpath_full.png "Enlarge")
[![Moon Phases](content\GHPC\Sky\moon2.gif)](content\GHPC\Sky\moon2.gif "Enlarge")
{% include embed-youtube.html id="kvQDc_CfAFo" %}

# ArmA 3 - [Community Upgrade Project](https://steamcommunity.com/workshop/filedetails/?id=583575232 "Steam Workshop")
*Crowd-sourced mod to port content to Arma 3 from preceding games (military sandbox).*
## [Terrains](https://www.cup-arma3.org/terrains "www.cup-arma3.org/terrains")
[![Chernarus](content/CUP/chernarus.png)](content/CUP/chernarus_full.png "Enlarge")
{% include compare.html a="content\CUP\A2.jpg" b="content\CUP\A3.jpg" labelA="ArmA 2" labelB="CUP" orientation="horizontal" %}
## Vehicles

# Personal Projects
## Minecraft Clone
*1-Month sprint to attempt to recreate [Minecraft](https://en.wikipedia.org/wiki/Minecraft "wikipedia") for fun. Implemented dynamic voxels and infinite terrain.*<br>
[![Sunset](content/MC-sunset.png)](content/MC-sunset.png "Enlarge")
## [WebGL Demo](WebGL\index.html)
