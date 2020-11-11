<head>
	<link rel="shortcut icon" type="image/x-icon" href="portfolio.png">
	<link href="twentytwenty/css/foundation.css" rel="stylesheet" type="text/css" />
	<link href="twentytwenty/css/twentytwenty.css" rel="stylesheet" type="text/css" />
	<style>
		desc { text-align:center; font-style:italic; }
	</style>
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
(518) 407-5951‬<br>

## Outline
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

---

# [Gunner, HEAT, PC! (GHPC)](https://gunnerheatpc.com/ "https://gunnerheatpc.com/")
*Tank combat simulation game, a cross between accessible arcade & military simulation. Translates to the crew command  "Gunner, use High Explosive Anti Tank ammunition on enemy Personnel Carrier!" (yes, its nerdy)*
## Vehicle Driver AI
Integrated AI into our physics vehicle controller, allowing vehicles to autonomously navigate to a destination while avoiding obstacles.
<p>
	<video controls autoplay playsinline loop muted poster="content/loading.png" style="width:100%">
		<source src="content/GHPC/pathfinding.mp4" type="video/mp4">
	</video>
</p>
{% include embed-youtube.html id="4MCEmmQE4BU" %}

---

## Reticle System
Procedural crosshairs integrated with the ballistics system, allowing projectile trajectories to change on-the-fly for faster design iteration. Supports both ["old-fashoned" light-blocking reticles](https://i.ebayimg.com/images/g/Hw8AAOSwArNdQ7DZ/s-l1600.jpg "reticle plane"), and [holographic/reflected reticles](https://upload.wikimedia.org/wikipedia/commons/4/49/Mark_III_free_gun_reflector_sight_mk_9_variant_reflex_sight_animation.gif "reflector sight").
All reticles are based on firsthand sources, both written and photographic (often difficult to find).

{% capture c %}{% include image.html alt="Reticles" src="content\GHPC\Reticles\reticles_small.jpg" link_src="content\GHPC\Reticles\reticles.png" inline="" %}{% endcapture %}
{% capture f %}
	Reticles for 
	<a href="https://en.wikipedia.org/wiki/T-54/T-55" title="50s Russian Main Battle Tank">T-55</a>, 
	<a href="https://en.wikipedia.org/wiki/BRDM-2" title="60s Russian Scout Car">BRDM-2</a>, 
	<a href="https://en.wikipedia.org/wiki/T-72" title="70s Russian Main Battle Tank">T-72</a>, 
	<a href="https://en.wikipedia.org/wiki/9K111_Fagot" title="Russian Wire-Guided Anti-Tank Missile">AT-4 Spigot</a>, 
	TPKU-2B (Russian Commander Periscope), 
	<a href="https://en.wikipedia.org/wiki/BGM-71_TOW" title="US Wire-Guided Anti-Tank Missile">TOW</a>, 
	and <a href="&quot;70s US Main Battle Tank&quot;">M60A3</a>.
{% endcapture %}
{% include figure.html content=c footer=f %}

{% capture c %}{% include compare.html a="content\GHPC\Reticles\t72-day.jpg" b="content\GHPC\Reticles\t72-night.jpg" labelA="Day" labelB="Night" pos="0.55" %}{% endcapture %}
{% capture f %}Nearly every gunsight since WW2 has an internal light to illuminate the reticle at night (<a href="https://i.ebayimg.com/images/g/Hw8AAOSwArNdQ7DZ/s-l1600.jpg" title="reticle plane">reticles are white</a>, they just appear black without light).{% endcapture %}
{% include figure.html content=c footer=f footerStyle="max-width:600px" %}

{% include image.html alt="Labeled Reticle" src="content\GHPC\Reticles\t55_labeled_small.jpg" link_src="content\GHPC\Reticles\t55_labeled.jpg" %}

{% capture h %}<a href="https://en.wikipedia.org/wiki/Stadiametric_rangefinding" title="wikipedia">Stadiametric rangefinding</a> allows quickly determining the distance of a target based on its apparent size.{% endcapture %}
{% capture c %}{% include image.html alt="Stadia" src="content\GHPC\Reticles\stadia_small.jpg" link_src="content\GHPC\Reticles\stadia.png" inline="" %}{% endcapture %}
{% capture f %}<a href="https://en.wikipedia.org/wiki/T-72" title="wikipedia">T-72</a> stadia showing a US <a href="https://en.wikipedia.org/wiki/M60_tank#M60A3_series" title="wikipedia">M60A3</a> at 500 meter distance increments{% endcapture %}
{% include figure.html header=h content=c footer=f %}

---

## Thermal Imaging (FLIR)
Approximation of heat for vehicle's [FLIR](https://en.wikipedia.org/wiki/Forward-looking_infrared "Forward Looking InfraRed wikipedia") sights.
Engines, gun barrels, tracks, (and infantry in the future) are "heat sources" that can change temperature.
Surface details are obtained using a semi-physically-based light model: surface brightness, roughness, metalness, and sun illumination are used to estimate [heat emittance](https://en.wikipedia.org/wiki/Emissivity "Emissivity wikipedia"), determining how bright or dark it appears in thermal imagers.

{% capture c %}{% include image.html alt="FLIR" src="content\GHPC\FLIR\TTS_small.png" link_src="content\GHPC\FLIR\TTS.png" inline="" %}{% endcapture %}
{% capture f %}<a href="https://en.wikipedia.org/wiki/M60_tank#M60A3_series" title="wikipedia">M60A3 TTS</a>'s FLIR gunsight spotting Russian <a href="https://en.wikipedia.org/wiki/T-54/T-55" title="wikipedia">T-55</a>s.{% endcapture %}
{% include figure.html content=c footer=f %}

{% capture c %}{% include compare.html a="content\GHPC\FLIR\vehicles_visible.jpg" b="content\GHPC\FLIR\vehicles_FLIR.jpg" labelA="Visible" labelB="FLIR" pos="0.45" inline="" %}{% endcapture %}
{% capture f %}Visible light vs FLIR. Notice one vehicle’s engine (<a href="https://en.wikipedia.org/wiki/T-54/T-55" title="wikipedia">T-55</a>) has been running for a while, and the sky appears darker.{% endcapture %}
{% include figure.html content=c footer=f %}

{% capture c %}{% include compare.html a="content\GHPC\FLIR\leslie-cube-visible.jpg" b="content\GHPC\FLIR\leslie-cube-FLIR.jpg" labelA="Visible" labelB="FLIR" orientation="vertical" inline="" %}{% endcapture %}
{% capture f %}A <a href="https://en.wikipedia.org/wiki/Leslie_cube" title="wikipedia">Leslie Cube</a>, where all sides are 56°C (132°F) but some <strong>appear</strong> colder than others, demonstrating surface materials reflect IR differently.{% endcapture %}
{% include figure.html content=c footer=f style="max-width:615px" %}

{% capture c %}{% include compare.html a="content\GHPC\FLIR\UAZ-VIS.jpg" b="content\GHPC\FLIR\UAZ-FLIR.jpg" labelA="Visible" labelB="FLIR" pos="0.517" inline="" %}{% endcapture %}
{% capture f %}Demonstrating the mirrors of a Russian <a href="https://en.wikipedia.org/wiki/UAZ-469" title="wikipedia">UAZ</a> approximately reflect the colder background temperature.{% endcapture %}
{% include figure.html content=c footer=f style="max-width:475px" %}

---

## Day-Night Cycle
Realtime sky simulation, based on a simplified solar system model. Includes seasonal sun elevation, moon phases, & [earthshine](https://en.wikipedia.org/wiki/Planetshine#/media/File:New_Moon.jpg "real life earthshine (wikipedia)"). The moon is also simulated as a light source & brightness is affected by phase.
{% include image.html alt="Sunpath" src="content\GHPC\Sky\sunpath_small.jpg" link_src="content\GHPC\Sky\sunpath.png" %}
{% include image.html alt="Moon Phases" src="content\GHPC\Sky\moon2.gif" link_src="content\GHPC\Sky\moon2.gif" %}
{% include embed-youtube.html id="kvQDc_CfAFo" %}

---

# ArmA 3 - [Community Upgrade Project](https://steamcommunity.com/workshop/filedetails/?id=583575232 "Steam Workshop")
*Crowd-sourced mod to port content to Arma 3 from preceding games (military sandbox).*
## [Terrains](https://www.cup-arma3.org/terrains "www.cup-arma3.org/terrains")
{% include image.html alt="Chernarus" src="content/CUP/chernarus_small.jpg" link_src="content/CUP/chernarus.png" %}
{% include compare.html a="content\CUP\A2.jpg" b="content\CUP\A3.jpg" labelA="ArmA 2" labelB="CUP" %}
## Blender Material Tool
Hopefully soon to be integrated into Alwarren's [ArmA Toolbox](https://www.armaholic.com/page.php?id=20519 "armaholic.com") addon for [Blender](https://www.blender.org/features/).
{% include image.html alt="Barracks" src="content/CUP/barracks.jpg" link_src="content/CUP/barracks.jpg" %}
{% include image.html alt="RVMAT Nodes" src="content/CUP/rvmat.jpg" link_src="content/CUP/rvmat.png" %}
ArmA is not known for being well optimized, but one thing they did get right was the combining of materials into a single "[Multi Material](https://community.bistudio.com/wiki/Multimaterial "bikipedia")". This can drastically reduce the amount of work the CPU needs to do (drawcalls), especially when there are hundreds of models on screen.
{% include compare.html a="content\CUP\ATC-multi.jpg" b="content\CUP\ATC-mask.jpg" labelA="Combined" labelB="Mask" pos="0.42" %}

---

# Personal Projects

## Minecraft Clone
1-Month sprint to attempt to recreate [Minecraft](https://en.wikipedia.org/wiki/Minecraft "wikipedia") for fun. Implemented dynamic voxels and infinite terrain.
{% include image.html alt="Sunset" src="content/MC-sunset.jpg" link_src="content/MC-sunset.png" %}

## N-Body Gravity Physics
A [N-Body simulation](https://en.wikipedia.org/wiki/N-body_simulation "wikipedia") simulates all objects as sources of gravity. *For example, all the stars in the Milky Way galaxy pull on the Sun, and the Sun pulls on all the stars.* This is particularly expensive because the calculations increase exponentially with the body count ([O(n^2)](https://www.bigocheatsheet.com/ "Big-O Cheat Sheet")).

{% capture c %}{% include image.html alt="N-Body" src="content/nbody.gif" link_src="content/nbody.gif" inline="" %}{% endcapture %}
{% capture f %}Using a multi-threaded, cache-coherent, Brust compiled, brute-force approach. Compared to the unoptimized starting point for 4096 bodies, this resulted in a speed up from <strong>~600ms</strong> per frame to <strong>~6ms</strong> (mostly from cache-coherency).{% endcapture %}
{% include figure.html content=c footer=f %}

{% capture c %}{% include image.html alt="N-Body Barnes" src="content/BH.gif" link_src="content/BH.gif" inline="" %}{% endcapture %}
{% capture f %}Using the <a href="https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation" title="wikipedia">Barnes-Hut</a> algorithm to reduce the number of force calculations (<a href="https://www.bigocheatsheet.com/" title="Big-O Cheat Sheet">O(n*log(n))</a>).{% endcapture %}
{% include figure.html content=c footer=f %}

## Realtime Raytracer, Pathtracer, & Raymarcher
[Raytracing](https://en.wikipedia.org/wiki/Ray_tracing_(graphics) "wikipedia"), [Pathtracing](https://en.wikipedia.org/wiki/Path_tracing "wikipedia"), and [Raymaching](https://youtu.be/svLzmFuSBhk "YouTube") are all the process of simulating rays of light entering a camera for every pixel on screen to form an image. They are compulationally expensive compared to traditional [triangle rasterization](https://en.wikipedia.org/wiki/Rasterisation "wikipedia"), but they can handle much more complicated graphical effects. **They are not necessarily challenging to program, but they are difficult to optimize.**

{% capture c %}{% include image.html alt="Raytracer" src="content/RT.jpg" link_src="content/RT.png" inline="" %}{% endcapture %}
{% capture f %}<strong><a href="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)" title="wikipedia">Raytracing</a></strong> allows the simulation of advanced phenomenon such as soft shadows.{% endcapture %}
{% include figure.html content=c footer=f %}
{% include video.html src="content/soft.mp4" %}

{% capture h %}<strong><a href="https://en.wikipedia.org/wiki/Path_tracing" title="wikipedia">Pathtracing</a></strong> is an extension of raytracing, where every ray collision shoots a hemisphere of rays recursively. This results in a lot of visual noise when not enough rays are used, but given enough time the result is a near perfect simulation of light.{% endcapture %}
{% capture c %}{% include video.html src="content/PT.mp4" inline="" %}{% endcapture %}
{% capture f %}Notice the slightly blurry reflections, and indirect illumination of the sphere’s dark side from the ground.{% endcapture %}
{% include figure.html header=h content=c footer=f %}

{% capture c %}{% include image.html alt="Raymarch" src="content/raymacher1_small.jpg" link_src="content/raymacher1.png" inline="" %}{% endcapture %}
{% capture f %}<strong><a href="https://youtu.be/svLzmFuSBhk" title="YouTube">Raymaching</a></strong> has a high upfront cost, but it can also achieve complexity otherwise impossible with triangles (<a href="/content/raymarch_offline.png">extreme non-realtime example</a>).{% endcapture %}
{% include figure.html content=c footer=f %}

# 3D Art
While I'm not technically an artist, I do like to dabble in it when I can.
### [AN-PRC-117G](content\Art\AN-PRC-117-Harris-Falcon-3.jpg) Radio + [Display Shield](content\Art\AN-PRC-117G_FALCON_III_shield.jpg)
Fully procedurally modeled and textured using [Blender](https://www.blender.org/features/), with some artistic liberties taken.
{% include image.html alt="AN-PRC-117G" src="content\Art\an-prc-117g_small.jpg" link_src="content\Art\an-prc-117g.png" %}
### [World Machine](https://www.world-machine.com/ "www.world-machine.com") Terrain
{% include image.html alt="World Machine" src="content\Art\WM_small.jpg" link_src="content\Art\WM.jpg" %}
### Earth
{% include image.html alt="Earth" src="content\Art\earth_small.jpg" link_src="content\Art\earth.jpg" %}
### Retro Vector Satellite
{% include image.html alt="Orbit" src="content\Art\orbit.gif" link_src="content\Art\orbit.gif" %}