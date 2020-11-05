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
jasondeacutis@gmail.com<br>
<br>
- Gunner, HEAT, PC! (GHPC)
	- [Vehicle Driver AI](/#vehicle-driver-ai)
	- [Reticle System](/#reticle-system)
	- [Thermal Imaging (FLIR)](/#thermal-imaging-flir)
	- [Day-Night Cycle](/#day-night-cycle)
- ArmA 3 - Community Upgrade Project
	- [Terrains](/#terrains)
	- [Blender Material Tool](/#blender-material-tool)
- Personal Projects
	- [Minecraft Clone](/#minecraft-clone)
	- [N-Body Gravity Physics](/#n-body-gravity-physics)
	- [Realtime Raytracer, Pathtracer, & Raymarcher](/#realtime-raytracer-pathtracer--raymarcher)
- 3D Art
	- [AN-PRC-117G Radio](/#an-prc-117g-radio--display-shield)
	- [World Machine Terrain](/#world-machine-terrain)
	- [Earth](/#earth)
	- [Retro Vector Satellite](/#retro-vector-satellite)

# [Gunner, HEAT, PC! (GHPC)](https://gunnerheatpc.com/ "https://gunnerheatpc.com/")
*Tank combat simulation game, a cross between accessible arcade & military simulation. Translates to the crew command  "Gunner, use High Explosive Anti Tank ammunition on enemy Personnel Carrier!" (yes, its nerdy)*
## Vehicle Driver AI
Integrated AI into our physics vehicle controller, allowing vehicles to autonomously navigate to a destination while avoiding obstacles.
{% include embed-youtube.html id="Yss-8LuLG_k" %}
{% include embed-youtube.html id="bV-npNsO1-w" %}

## Reticle System
Procedural crosshairs integrated with the ballistics system, allowing projectile trajectories to change on-the-fly for faster design iteration.
All in-game reticles are based on firsthand sources (often difficult to find).
{% include image.html alt="Reticles" src="content\GHPC\Reticles\reticles_small.jpg" link_src="content\GHPC\Reticles\reticles.png" %}
*Reticles for [T-55](https://en.wikipedia.org/wiki/T-54/T-55 "50s Russian Main Battle Tank"), [BRDM-2](https://en.wikipedia.org/wiki/BRDM-2 "60s Russian Scout Car"), [T-72](https://en.wikipedia.org/wiki/T-72 "70s Russian Main Battle Tank"), [AT-4 Spigot](https://en.wikipedia.org/wiki/9K111_Fagot "Russian Wire-Guided Anti-Tank Missile"), TPKU-2B (Russian Commander Periscope), [TOW](https://en.wikipedia.org/wiki/BGM-71_TOW "US Wire-Guided Anti-Tank Missile"), and [M60A3]("70s US Main Battle Tank").*
{% include image.html alt="Labeled Reticle" src="content\GHPC\Reticles\t55_labeled_small.jpg" link_src="content\GHPC\Reticles\t55_labeled.jpg" %}

[Stadiametric rangefinding](https://en.wikipedia.org/wiki/Stadiametric_rangefinding "wikipedia") allows quickly determining the distance of a target based on its apparent size.<br>
{% include image.html alt="Stadia" src="content\GHPC\Reticles\stadia_small.jpg" link_src="content\GHPC\Reticles\stadia.png" %}
*[T-72](https://en.wikipedia.org/wiki/T-72 "wikipedia") stadia showing a US [M60A3](https://en.wikipedia.org/wiki/M60_tank#M60A3_series "wikipedia") at 500 meter distance increments*

## Thermal Imaging (FLIR)
Approximation of heat for vehicle's [FLIR](https://en.wikipedia.org/wiki/Forward-looking_infrared "Forward Looking InfraRed wikipedia") sights.
Engines, gun barrels, tracks, (and infantry in the future) are "heat sources" that can change temperature.
Surface details are obtained using a semi-physically-based light model: surface brightness, roughness, metalness, and sun illumination are used to estimate [heat emittance](https://en.wikipedia.org/wiki/Emissivity "Emissivity wikipedia"), determining how bright or dark it appears in thermal imagers.

{% include image.html alt="FLIR" src="content\GHPC\FLIR\TTS_small.png" link_src="content\GHPC\FLIR\TTS.png" %}
*[M60A3 TTS](https://en.wikipedia.org/wiki/M60_tank#M60A3_series "wikipedia")'s FLIR gunsight spotting Russian [T-55](https://en.wikipedia.org/wiki/T-54/T-55 "wikipedia")s.*

{% include compare.html a="content\GHPC\FLIR\vehicles_visible.jpg" b="content\GHPC\FLIR\vehicles_FLIR.jpg" labelA="Visible" labelB="FLIR" pos="0.45" %}
*Visible light vs FLIR. Notice one vehicle's engine ([T-55](https://en.wikipedia.org/wiki/T-54/T-55 "wikipedia")) has been running for a while, and the sky appears darker.*

{% include compare.html a="content\GHPC\FLIR\leslie-cube-visible.jpg" b="content\GHPC\FLIR\leslie-cube-FLIR.jpg" labelA="Visible" labelB="FLIR" orientation="vertical" %}
*A [Leslie Cube](https://en.wikipedia.org/wiki/Leslie_cube "wikipedia"), where all sides are 56°C (132°F) but some *appear* colder than others, demonstrating surface materials reflect IR differently.*

{% include compare.html a="content\GHPC\FLIR\UAZ-VIS.jpg" b="content\GHPC\FLIR\UAZ-FLIR.jpg" labelA="Visible" labelB="FLIR" pos="0.517" %}
*Demonstrating the mirrors of a Russian [UAZ](https://en.wikipedia.org/wiki/UAZ-469 "wikipedia") approximately reflect the colder background temperature.*

## Day-Night Cycle
Realtime sky simulation, based on a simplified solar system model. Includes seasonal sun elevation, moon phases, & [earthshine](https://en.wikipedia.org/wiki/Planetshine#/media/File:New_Moon.jpg "real life earthshine (wikipedia)"). The moon is also simulated as a light source & brightness is affected by phase.
{% include image.html alt="Sunpath" src="content\GHPC\Sky\sunpath_small.jpg" link_src="content\GHPC\Sky\sunpath.png" %}
{% include image.html alt="Moon Phases" src="content\GHPC\Sky\moon2.gif" link_src="content\GHPC\Sky\moon2.gif" %}
{% include embed-youtube.html id="kvQDc_CfAFo" %}

# ArmA 3 - [Community Upgrade Project](https://steamcommunity.com/workshop/filedetails/?id=583575232 "Steam Workshop")
*Crowd-sourced mod to port content to Arma 3 from preceding games (military sandbox).*
## [Terrains](https://www.cup-arma3.org/terrains "www.cup-arma3.org/terrains")
{% include image.html alt="Chernarus" src="content/CUP/chernarus_small.jpg" link_src="content/CUP/chernarus.png" %}
{% include compare.html a="content\CUP\A2.jpg" b="content\CUP\A3.jpg" labelA="ArmA 2" labelB="CUP" %}
## Blender Material Tool
Hopefully soon to be integrated into Alwarren's [ArmA Toolbox](https://www.armaholic.com/page.php?id=20519 "armaholic.com") addon for [Blender](https://www.blender.org/features/).
{% include image.html alt="Barracks" src="content/CUP/barracks.jpg" link_src="content/CUP/barracks.jpg" %}
{% include image.html alt="RVMAT Nodes" src="content/CUP/rvmat.jpg" link_src="content/CUP/rvmat.png" %}
ArmA is not known for being well optimized, but one thing they did get right was the combining of materials into a single "[Multi Material](https://community.bistudio.com/wiki/Multimaterial "bikipedia")". This drastically reduces the amount of work the CPU needs to do (drawcalls), especially when there are hundreds of models on screen.
{% include compare.html a="content\CUP\ATC-multi.jpg" b="content\CUP\ATC-mask.jpg" labelA="Combined" labelB="Mask" pos="0.42" %}

# Personal Projects

## Minecraft Clone
1-Month sprint to attempt to recreate [Minecraft](https://en.wikipedia.org/wiki/Minecraft "wikipedia") for fun. Implemented dynamic voxels and infinite terrain.
{% include image.html alt="Sunset" src="content/MC-sunset.jpg" link_src="content/MC-sunset.png" %}

## N-Body Gravity Physics
A [N-Body simulation](https://en.wikipedia.org/wiki/N-body_simulation "wikipedia") simulates all objects as sources of gravity. *For example, all the stars in the Milky Way galaxy pull on the Sun, and the Sun pulls on all the stars.* This is particularly expensive because the calculations increase exponentially with the body count ([O(n^2)](https://www.bigocheatsheet.com/ "Big-O Cheat Sheet")).
{% include image.html alt="N-Body" src="content/nbody.gif" link_src="content/nbody.gif" %}
*Using a multi-threaded, cache-coherent, Brust compiled, brute-force approach. Compared to the unoptimized starting point for 4096 bodies, this resulted in a speed up from **600ms** per frame to **6ms** (mostly from cache-coherency)*
{% include image.html alt="N-Body Barnes" src="content/BH.gif" link_src="content/BH.gif" %}
*Using the [Barnes-Hut](https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation "wikipedia") algorithm to reduce the number of force calculations ([O(n*log(n))](https://www.bigocheatsheet.com/ "Big-O Cheat Sheet")).*

## Realtime Raytracer, Pathtracer, & Raymarcher
{% include image.html alt="Raytracer" src="content/RT.jpg" link_src="content/RT.png" %}
***Raytracing** allows the simulation of advanced phenomenon such as soft shadows.*
{% include video.html src="content/soft.mp4" %}
{% include video.html src="content/PT.mp4" %}
***Pathtracing** is an extension of raytracing, where every ray collision shoots a hemisphere of rays recursively. This results in a lot of visual noise when not enough rays are used, but given enough time the result is a near perfect simulation of light.*
{% include image.html alt="Raymarch" src="content/raymacher1_small.jpg" link_src="content/raymacher1.png" %}
*[Raymaching](https://youtu.be/svLzmFuSBhk "YouTube") has a high upfront cost, but it can also achieve complexity otherwise impossible with triangles ([extreme non-realtime example](content/raymarch_offline.png)).*

# 3D Art
### [AN-PRC-117G](content\Art\AN-PRC-117-Harris-Falcon-3.jpg) Radio + [Display Shield](content\Art\AN-PRC-117G_FALCON_III_shield.jpg)
Fully procedurally modeled and textured using [Blender](https://www.blender.org/features/).
{% include image.html alt="AN-PRC-117G" src="content\Art\an-prc-117g_small.jpg" link_src="content\Art\an-prc-117g.png" %}
### [World Machine](https://www.world-machine.com/ "www.world-machine.com") Terrain
{% include image.html alt="World Machine" src="content\Art\WM_small.jpg" link_src="content\Art\WM.jpg" %}
### Earth
{% include image.html alt="Earth" src="content\Art\earth_small.jpg" link_src="content\Art\earth.jpg" %}
### Retro Vector Satellite
{% include image.html alt="Orbit" src="content\Art\orbit.gif" link_src="content\Art\orbit.gif" %}