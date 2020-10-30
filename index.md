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
		  $(".twentytwenty-container").twentytwenty({move_with_handle_only:0, click_to_move:1});
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
{% include image.html alt="Reticles" src="content\GHPC\Reticles\reticles_small.jpg" link_src="content\GHPC\Reticles\reticles.png" %}

[Stadiametric rangefinding](https://en.wikipedia.org/wiki/Stadiametric_rangefinding "wikipedia") allows quickly determining the distance of a target based on its apparent size.<br>
*[T-72](https://en.wikipedia.org/wiki/T-72 "wikipedia") stadia showing a [M60A3](https://en.wikipedia.org/wiki/M60_tank#M60A3_series "wikipedia") at 500 meter distance increments*<br>
{% include image.html alt="Stadia" src="content\GHPC\Reticles\stadia_small.jpg" link_src="content\GHPC\Reticles\stadia.png" %}

### Thermal Imaging (FLIR)
Approximation of heat for vehicle's [FLIR](https://en.wikipedia.org/wiki/Forward-looking_infrared "Forward Looking InfraRed wikipedia") sights.
Engines, gun barrels, tracks, (and infantry in the future) are "heat sources" that can change temperature.
Surface details are obtained using a semi-physically-based light model: surface brightness, roughness, metalness, and sun illumination are used to estimate [heat emittance](https://en.wikipedia.org/wiki/Emissivity "Emissivity wikipedia"), determining how bright or dark it appears in thermal imagers.

{% include image.html alt="FLIR" src="content\GHPC\FLIR\TTS_small.png" link_src="content\GHPC\FLIR\TTS.png" %}
[M60A3 TTS](https://en.wikipedia.org/wiki/M60_tank#M60A3_series "wikipedia")'s FLIR gunsight spotting [T-55](https://en.wikipedia.org/wiki/T-54/T-55 "wikipedia")s.

{% include compare.html a="content\GHPC\FLIR\vehicles_visible.jpg" b="content\GHPC\FLIR\vehicles_FLIR.jpg" labelA="Visible" labelB="FLIR" pos="0.45" %}
Visible light vs FLIR. Notice one vehicle's engine ([T-55](https://en.wikipedia.org/wiki/T-54/T-55 "wikipedia")) has been running for a while, and the sky appears darker.

{% include compare.html a="content\GHPC\FLIR\leslie-cube-visible.jpg" b="content\GHPC\FLIR\leslie-cube-FLIR.jpg" labelA="Visible" labelB="FLIR" orientation="vertical" %}
A [Leslie Cube](https://en.wikipedia.org/wiki/Leslie_cube "wikipedia"), where all sides are 56°C (132°F) but some *appear* colder than others, demonstrating surface materials reflect IR differently.

### Day-Night Cycle
Realtime sky simulation, based on a simplified solar system model.<br>Includes seasonal sun elevation, moon phases, & [earthshine](https://en.wikipedia.org/wiki/Planetshine#/media/File:New_Moon.jpg "real life earthshine (wikipedia)").<br>The moon is also simulated as a light source & brightness is affected by phase.
{% include image.html alt="Sunpath" src="content\GHPC\Sky\sunpath_small.jpg" link_src="content\GHPC\Sky\sunpath.png" %}
{% include image.html alt="Moon Phases" src="content\GHPC\Sky\moon2.gif" link_src="content\GHPC\Sky\moon2.gif" %}
{% include embed-youtube.html id="kvQDc_CfAFo" %}

# ArmA 3 - [Community Upgrade Project](https://steamcommunity.com/workshop/filedetails/?id=583575232 "Steam Workshop")
*Crowd-sourced mod to port content to Arma 3 from preceding games (military sandbox).*
## [Terrains](https://www.cup-arma3.org/terrains "www.cup-arma3.org/terrains")
{% include image.html alt="Chernarus" src="content/CUP/chernarus_small.jpg" link_src="content/CUP/chernarus.png" %}
{% include compare.html a="content\CUP\A2.jpg" b="content\CUP\A3.jpg" labelA="ArmA 2" labelB="CUP" %}
## Vehicles

# Personal Projects
## Minecraft Clone
*1-Month sprint to attempt to recreate [Minecraft](https://en.wikipedia.org/wiki/Minecraft "wikipedia") for fun. Implemented dynamic voxels and infinite terrain.*<br>
{% include image.html alt="Sunset" src="content/MC-sunset.jpg" link_src="content/MC-sunset.png" %}

## [WebGL Demo](WebGL\index.html)

# 3D Art
### [AN-PRC-117G](content\Art\AN-PRC-117-Harris-Falcon-3.jpg) Radio + [Display Shield](content\Art\AN-PRC-117G_FALCON_III_shield.jpg)
{% include image.html alt="AN-PRC-117G" src="content\Art\an-prc-117_small.jpg" link_src="content\Art\an-prc-117.png" %}
### [World Machine](https://www.world-machine.com/ "www.world-machine.com") Terrain
{% include image.html alt="World Machine" src="content\Art\WM_small.jpg" link_src="content\Art\WM.jpg" %}
### Earth
{% include image.html alt="Earth" src="content\Art\earth_small.jpg" link_src="content\Art\earth.jpg" %}
### Retro Vector Satellite
{% include image.html alt="Orbit" src="content\Art\orbit.gif" link_src="content\Art\orbit.gif" %}