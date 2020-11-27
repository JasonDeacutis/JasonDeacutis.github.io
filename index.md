<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-YQYH8LPF2Y"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-YQYH8LPF2Y');
	</script>

	<link rel="shortcut icon" type="image/x-icon" href="portfolio.png">
	<link href="twentytwenty/css/twentytwenty.css" rel="stylesheet" type="text/css" />
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
	<script src="twentytwenty/js/jquery.event.move.js"></script>
	<script src="twentytwenty/js/jquery.twentytwenty.js"></script>
	<script>$(window).on('load', function() { $(".twentytwenty-container").twentytwenty({move_with_handle_only:0, click_to_move:1}); });</script>
	
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/default.min.css">
	<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/highlight.min.js"></script>
	<script>hljs.initHighlightingOnLoad();</script>
	
	<style>
	.tooltip {
		display: inline;
		position: relative;
		border-bottom: 1px dotted black;
	}
	.tooltip:hover:after {
		position: absolute;
		bottom: 150%;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(0,0,0,0.9);
		color: white;
		border-radius: 6px;
		padding: 6px;
		content: attr(tip);
		text-align: center;
		font-size: 16px;
		font-weight:normal;
		width: max-content;
		max-width: min(500px, 50vw);
	}
	.tooltip:hover:before {
		position: absolute;
		bottom: 150%;
		left: 50%;
		transform: translate(-50%, 100%);
		border: solid;
		border-color: rgba(0,0,0,0.9) transparent;
		border-width: 6px 6px 0px;
		content: "";
	}
	
	img {
		transition: .25s ease;
	}
	img:hover {
		filter: brightness(75%);
	}
	</style>
</head>

Jason Deacutis<br>
jasondeacutis@gmail.com<br>

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
	- [Battlefield 3 Reverse Engineering](/#reverse-engineering---battlefield-3)
	- [ArmA Terrain Reverse Engineering](/#reverse-engineering---arma-terrain)
- 3D Art
	- [AN-PRC-117G Radio](/#an-prc-117g-radio--display-shield)
	- [World Machine Terrain](/#world-machine-terrain)
	- [Planetary](/#planetary)

# [Gunner, HEAT, PC! (GHPC)](https://gunnerheatpc.com/ "https://gunnerheatpc.com/")
*In development tank combat simulation game, a cross between accessible arcade & military simulation. Translates to the crew command  "Gunner, use High Explosive Anti Tank ammunition on enemy Personnel Carrier!" (yes, its nerdy)*

<div style="display:grid; grid-template-columns: 50% 50%; grid-gap: 1px; background-color:black">
	{% include image.html src="content\GHPC\T-55A.jpg" href="content\GHPC\T-55A.png" inline="" %}
	{% include image.html src="content\GHPC\germany2.jpg" href="content\GHPC\germany2.png" inline="" %}
	{% include image.html src="content\GHPC\T-72.jpg" href="content\GHPC\T-72.png" inline="" %}
	{% include image.html src="content\GHPC\FLIR\m60a3_4.jpg" href="content\GHPC\FLIR\m60a3_4.png" inline="" %}
</div>

## Vehicle Driver AI
Integrated AI into our physics vehicle controller, allowing vehicles to autonomously navigate to a destination while avoiding obstacles.
<p>
	<video controls autoplay playsinline loop muted poster="content/loading.png" style="width:100%">
		<source src="content/GHPC/pathfinding.mp4" type="video/mp4">
	</video>
</p>
{% include embed-youtube.html id="PD_lZp6V75Q" %}

## Reticle System
Dynamic gunsight crosshairs integrated with the ballistics system, ensuring projectiles always hit their mark as we tweak our amunition over the course of development. Supports both ["old-fashoned" light-blocking reticles](https://i.ebayimg.com/images/g/Hw8AAOSwArNdQ7DZ/s-l1600.jpg "reticle plane"), & [holographic/reflected reticles](https://upload.wikimedia.org/wikipedia/commons/4/49/Mark_III_free_gun_reflector_sight_mk_9_variant_reflex_sight_animation.gif "reflector sight").
All <span class="tooltip" tip="Crosshair & visual aids seen through a scope">reticles</span> were meticulously recreated from their real-world counterparts, using written & photographic reference (often difficult to find).

{% capture c %}{% include image.html src="content\GHPC\Reticles\reticles_small.jpg" href="content\GHPC\Reticles\reticles.png" inline="" %}{% endcapture %}
{% capture f %}
	Reticles for 
	<a href="https://en.wikipedia.org/wiki/T-54/T-55" title="50s Russian Main Battle Tank">T-55</a>, 
	<a href="https://en.wikipedia.org/wiki/BRDM-2" title="60s Russian Scout Car">BRDM-2</a>, 
	<a href="https://en.wikipedia.org/wiki/T-72" title="70s Russian Main Battle Tank">T-72</a>, 
	<a href="https://en.wikipedia.org/wiki/9K111_Fagot" title="Russian Wire-Guided Anti-Tank Missile">AT-4 Spigot</a>, 
	TPKU-2B (Russian Commander Periscope), 
	<a href="https://en.wikipedia.org/wiki/BGM-71_TOW" title="US Wire-Guided Anti-Tank Missile">TOW</a>, 
	& <a href="&quot;70s US Main Battle Tank&quot;">M60A3</a>.
{% endcapture %}
{% include figure.html content=c footer=f %}

<!--<center>{% include embed-youtube.html id="9ALBTiN3ifQ" options="start=39; end=61" %}</center>-->

{% capture c %}{% include compare.html a="content\GHPC\Reticles\t72-day.jpg" b="content\GHPC\Reticles\t72-night.jpg" labelA="Day" labelB="Night" pos="0.55" %}{% endcapture %}
{% capture f %}Nearly every gunsight since WW2 has an internal light to illuminate the reticle at night (<a href="https://i.ebayimg.com/images/g/Hw8AAOSwArNdQ7DZ/s-l1600.jpg" title="reticle plane">reticles are white</a>, they just appear black without light).{% endcapture %}
{% include figure.html content=c footer=f footerStyle="max-width:600px" %}

{% capture c %}{% include image.html src="content\GHPC\Reticles\t55_labeled_small.jpg" href="content\GHPC\Reticles\t55_labeled.jpg" inline="" %}{% endcapture %}
{% capture f %}Russian T-55 gunsight with labels{% endcapture %}
{% include figure.html content=c footer=f style="max-width:720px" %}

{% capture h %}<a href="https://en.wikipedia.org/wiki/Stadiametric_rangefinding" title="wikipedia">Stadiametric rangefinding</a> allows quickly determining the distance of a target based on its apparent size.{% endcapture %}
{% capture c %}{% include image.html src="content\GHPC\Reticles\stadia_small.jpg" href="content\GHPC\Reticles\stadia.png" inline="" %}{% endcapture %}
{% capture f %}<a href="https://en.wikipedia.org/wiki/T-72" title="wikipedia">T-72</a> stadia showing a US <a href="https://en.wikipedia.org/wiki/M60_tank#M60A3_series" title="wikipedia">M60A3</a> at 500 meter distance increments{% endcapture %}
{% include figure.html header=h content=c footer=f %}

## Thermal Imaging (FLIR)
***Disclaimer:** Work in progress, many features are still missing and are subject to change.*

Approximation of [FLIR](https://en.wikipedia.org/wiki/Forward-looking_infrared "Forward Looking InfraRed wikipedia") light, used to identify heat sources such as vehicles and infantry.
Vehicle engines, gun barrels, & tracks are heat sources that can change temperature independently. In addition, the sun's position is used to determine the ambient environement temperature.
Surface details are obtained using a semi-physically-based light model: surface brightness, roughness, & metalness are used to estimate [heat emittance](https://en.wikipedia.org/wiki/Emissivity "Emissivity wikipedia"), determining how bright or dark it appears in thermal imagers. This achieves decently realistic results without needing much manual labor.

{% capture c %}{% include image.html src="content\GHPC\FLIR\TTS_small.png" href="content\GHPC\FLIR\TTS.png" inline="" %}{% endcapture %}
{% capture f %}US FLIR gunsight spotting Russian <a href="https://en.wikipedia.org/wiki/T-54/T-55" title="wikipedia">T-55</a>s.{% endcapture %}
{% include figure.html content=c footer=f %}

<center style="margin: 1em 0 1em 0">
	<div style="display:grid; grid-template-columns: 50% 50%; grid-gap: 1px; background-color:black">
		{% include image.html src="content\GHPC\FLIR\m60a3_1.jpg" href="content\GHPC\FLIR\m60a3_1.png" inline="" %}
		{% include image.html src="content\GHPC\FLIR\m60a3_3.jpg" href="content\GHPC\FLIR\m60a3_3.png" inline="" %}
		{% include image.html src="content\GHPC\FLIR\m60a3_5.jpg" href="content\GHPC\FLIR\m60a3_5.png" inline="" %}
		{% include image.html src="content\GHPC\FLIR\m60a3_4.jpg" href="content\GHPC\FLIR\m60a3_4.png" inline="" %}
	</div>
	<figcaption style="font-size:initial; background-color:white"><em><a href="https://en.wikipedia.org/wiki/M60_tank#M60A3_series" title="wikipedia">M60A3 TTS</a>'s FLIR at night, losely based on <a href="content\GHPC\FLIR\TTS-real.png">real sources</a> (early WIP).</em></figcaption>
</center>

{% capture c %}{% include compare.html a="content\GHPC\FLIR\vehicles_visible.jpg" b="content\GHPC\FLIR\vehicles_FLIR.jpg" labelA="Visible" labelB="FLIR" pos="0.45" inline="" %}{% endcapture %}
{% capture f %}Visible light vs FLIR. Notice one vehicle’s engine (<a href="https://en.wikipedia.org/wiki/T-54/T-55" title="wikipedia">T-55</a>) has been running for a while, & the sky appears darker.{% endcapture %}
{% include figure.html content=c footer=f %}

<div style="display:flex; flex-wrap:wrap; justify-content:space-between">
	<div style="margin:auto; margin-top:0px;">
		{% capture c %}{% include compare.html a="content\GHPC\FLIR\UAZ-VIS.jpg" b="content\GHPC\FLIR\UAZ-FLIR.jpg" labelA="Visible" labelB="FLIR" pos="0.5" inline="" %}{% endcapture %}
		{% capture f %}Demonstrating the mirrors of a Russian <a href="https://en.wikipedia.org/wiki/UAZ-469" title="wikipedia">UAZ</a> approximately reflect the colder background temperature.{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:475px" %}
	</div>
	<div style="width:max-content; margin:auto; margin-top:0px;">
		{% capture c %}{% include compare.html a="content\GHPC\FLIR\leslie-cube-visible.jpg" b="content\GHPC\FLIR\leslie-cube-FLIR.jpg" labelA="Visible" labelB="FLIR" orientation="vertical" inline="" %}{% endcapture %}
		{% capture f %}A <a href="https://en.wikipedia.org/wiki/Leslie_cube" title="wikipedia">Leslie Cube</a>, where all sides are 56°C (132°F) but some <strong>appear</strong> colder than others, demonstrating surface materials reflect IR differently.{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:490px" %}
	</div>
</div>

## Day-Night Cycle
Realtime sky simulation, based on a simplified solar system model. Includes seasonal sun elevation, moon phases, & [earthshine](https://en.wikipedia.org/wiki/Planetshine#/media/File:New_Moon.jpg "real life earthshine (wikipedia)"). The moon is also simulated as a light source & its brightness is affected by phase.

{% capture c %}{% include image.html src="content\GHPC\Sky\sunpath_small.jpg" href="content\GHPC\Sky\sunpath.png" inline="" %}{% endcapture %}
{% capture f %}Sunpath over the course of a year{% endcapture %}
{% include figure.html content=c footer=f %}

{% capture c %}{% include image.html src="content\GHPC\Sky\moon2.gif" inline="" %}{% endcapture %}
{% capture f %}Moon phase cycle {% endcapture %}
{% include figure.html content=c footer=f %}

<center>{% include embed-youtube.html id="kvQDc_CfAFo" %}</center>

# ArmA 3 - [Community Upgrade Project](https://steamcommunity.com/workshop/filedetails/?id=583575232 "Steam Workshop")
*Crowd-sourced mod to port content to Arma 3 from preceding games (military sandbox).*
## [Terrains](https://www.cup-arma3.org/terrains "www.cup-arma3.org/terrains")
{% include image.html src="content/CUP/chernarus_small.jpg" href="content/CUP/chernarus.png" %}
{% include compare.html a="content\CUP\A2.jpg" b="content\CUP\A3.jpg" labelA="ArmA 2" labelB="CUP" %}
## Blender Material Tool
Hopefully soon to be integrated into Alwarren's [ArmA Toolbox](https://www.armaholic.com/page.php?id=20519 "armaholic.com") addon for [Blender](https://www.blender.org/features/).
{% include image.html src="content/CUP/barracks.jpg" %}
{% include image.html src="content/CUP/rvmat.jpg" href="content/CUP/rvmat.png" %}
ArmA is not known for being well optimized, but one thing they did get right was the combining of materials into a single "[Multi Material](https://community.bistudio.com/wiki/Multimaterial "bikipedia")". This can drastically reduce the amount of work the CPU needs to do (<span class="tooltip" tip="Command sent to the graphics card to draw a set of triangles.">drawcalls</span>), especially when there are hundreds of models on screen.
{% include compare.html a="content\CUP\ATC-multi.jpg" b="content\CUP\ATC-mask.jpg" labelA="Combined" labelB="Mask" pos="0.42" %}

# Personal Projects

## Minecraft Clone
1-Month stab at recreating [Minecraft](https://en.wikipedia.org/wiki/Minecraft "wikipedia") for fun. Implemented dynamic voxels & infinite terrain.
{% include image.html src="content/MC-sunset.jpg" href="content/MC-sunset.png" %}

## N-Body Gravity Physics
A [N-Body simulation](https://en.wikipedia.org/wiki/N-body_simulation "wikipedia") simulates all objects as sources of gravity. *For example, all the stars in the Milky Way galaxy pull on the Sun, & the Sun pulls on all the stars.* This is particularly expensive because the calculations increase exponentially with the body count ([O(n^2)](https://www.bigocheatsheet.com/ "Big-O Cheat Sheet")).

<div style="display:flex; flex-wrap:wrap; justify-content:space-between">
	<div style="width:max-content; margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="content/BH.gif" inline="" %}{% endcapture %}
		{% capture f %}<a href="https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation" title="wikipedia">Barnes-Hut</a> algorithm reduces # of calculations by simulating clumps of bodies as one (<a href="https://www.bigocheatsheet.com/" title="Big-O Cheat Sheet">O(n*log(n))</a>).{% endcapture %}
		{% include figure.html content=c footer=f footerStyle="max-width:475px" %}
	</div>
	<div style="margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="content/nbody.gif" inline="" %}{% endcapture %}
		{% capture f %}Multi-threaded, <span class="tooltip" tip="Keeping memory access grouped together. Extremely important for high performance code.">cache-coherent</span>, <span class="tooltip" tip="Unity's new low-level C# compiler that attempts to convert code to a more parallel form (vectorization).">Burst compiled</span>, brute-force approach. For 4096 bodies, compared to the unoptimized starting point, this resulted in a speed up from <strong>~600ms</strong> per frame to <strong>~6ms</strong> (mostly from cache-coherency). PhysX collisions are now the bottleneck. {% endcapture %}
		{% include figure.html content=c footer=f footerStyle="max-width:390px" %}
	</div>
</div>

## Realtime Raytracer, Pathtracer, & Raymarcher
[Raytracing](https://en.wikipedia.org/wiki/Ray_tracing_(graphics) "wikipedia"), [Pathtracing](https://en.wikipedia.org/wiki/Path_tracing "wikipedia"), & [Raymarching](https://youtu.be/svLzmFuSBhk "YouTube") all form images by simulating rays of light entering a camera for every pixel. They're compulationally expensive compared to traditional <span class="tooltip" tip="Drawing images using trangles to represent objects, as any shape can be made given enough triangles.">[triangle rasterization](https://en.wikipedia.org/wiki/Rasterisation "wikipedia")</span>, but they can handle much more complicated graphical effects. **They are not necessarily challenging to program, but they are difficult to optimize.** All renderers here were made from scratch in Unity running on a GTX 1070 Ti without the use of RTX.

{% capture c %}{% include image.html src="content/RT.jpg" href="content/RT.png" inline="" %}{% endcapture %}
{% capture f %}Traditional lights are simulated as "point" sources, meaning they are infinetly small & cast sharp shadows (rare in reality). Raytracing can properly simulate light sources with shape & size, creating soft shadow <a href="https://en.wikipedia.org/wiki/Umbra,_penumbra_and_antumbra#/media/File:Diagram_of_umbra,_penumbra_&_antumbra.png" >penumbra</a>.{% endcapture %}
{% include figure.html content=c footer=f footerStyle="max-width:850px" %}
{% include video.html src="content/soft.mp4" %}

{% capture h %}<strong><a href="https://en.wikipedia.org/wiki/Path_tracing" title="wikipedia">Pathtracing</a></strong> is an extension of raytracing where every collision "bounces" the light ray. When a ray hits a mirror, a ray is reflected. An impefect mirror defocuses the ray into a cone (blurry reflection). A white wall defocuses the ray across a hemisphere. These bounces results in a grainy image when too few rays are used, but given enough time the result is a near perfect simulation of light.{% endcapture %}
{% capture c %}{% include video.html src="content/PT.mp4" inline="" %}{% endcapture %}
{% capture f %}Notice the slightly blurry reflections, & indirect illumination of the sphere’s dark side from light bouncing off the ground.{% endcapture %}
{% include figure.html header=h content=c footer=f %}

{% capture c %}{% include image.html src="content/raymacher1_small.jpg" href="content/raymacher1.png" inline="" %}{% endcapture %}
{% capture f %}<strong><a href="https://youtu.be/svLzmFuSBhk" title="YouTube">Raymarching</a></strong> has a high upfront cost, but it can also achieve complexity otherwise impossible with triangles (<strong><a href="/content/raymarch_offline.png">extreme non-realtime example</a></strong>).{% endcapture %}
{% include figure.html content=c footer=f %}

## Reverse Engineering - <span class="tooltip" tip="AAA 2011 first-person-shooter game, revolutionary for its graphics at the time">Battlefield 3</span>
***Disclaimer:** All reverse engineering I conduct is purely for educational purposes. I do not claim to be responsible for any of the original work.*

{% capture c %}{% include compare.html a="content\Reverse Engineer\BF3\bf3_alley_ingame.jpg" b="content\Reverse Engineer\BF3\bf3_alley_blender.jpg" labelA="BF3" labelB="Blender" inline="" %}{% endcapture %}
{% capture f %}An alley (from the <a href="https://youtu.be/HlOwEFJJBnA?t=441" title="YouTube">first campaign level</a>) imported into Blender without textures for analysis.{% endcapture %}
{% include figure.html content=c footer=f %}

{% capture c %}{% include image.html src="content\Reverse Engineer\BF3\bf3_alley_blender_dof.jpg" href="content\Reverse Engineer\BF3\bf3_alley_blender_dof.png" inline="" %}{% endcapture %}
{% capture f %}Fully textured scene coming soon™{% endcapture %}
{% include figure.html content=c footer=f %}

<center><strong>Render Analysis</strong></center>
{% capture c %}{% include image.html src="content\Reverse Engineer\BF3\alley_drawcalls.gif" inline="" %}{% endcapture %}
{% capture f %}
A wireframe is shown for each <span class="tooltip" tip="Command sent to the graphics card to draw a set of triangles.">drawcall</span> issued.
BF3 makes heavy use of <span class="tooltip" tip="Drawing many copies of a mesh in one drawcall."><a href="https://docs.unity3d.com/Manual/GPUInstancing.html">instancing</a></span>, so most of the geometry is drawn in relatively few drawcalls (~300 here).
Only unlit surface color is shown, but simultaneously <strong><a href="content/RenderDoc/render-targets.gif" title="Render Targets">other PBR data is being drawn</a></strong> (<span class="tooltip" tip="Lighting calculations are delayed until all geometry is drawn, avoiding expensive shading on hidden pixels & allowing many light sources.">deferred rendering</span>).
{% endcapture %}
{% include figure.html content=c footer=f %}

To understand how the texturing was achieved, I wrote a Python script in Blender to convert shader assembly to a material node network.
<div style="display:flex; flex-wrap:wrap; justify-content:space-between">
	<div style="margin:auto; margin-top:0px; max-width:100%">
		{% capture c %}{% include assembly.html %}{% endcapture %}
		{% capture f %}M4A1 rifle DirectX <span class="tooltip" tip="Code responsible for coloring every pixel on screen.">pixel shader</span> assembly{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:475px" %}
	</div>
	<div style="width:max-content; margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="content\Reverse Engineer\BF3\dxbc_normal.jpg" inline="" %}{% endcapture %}
		{% capture f %}Example section responsible for reading the <span class="tooltip" tip="Texture used to aproximate the lighting of a bumpy surface.">normal map</span>{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:490px" %}
	</div>
</div>

<center>Converted to Blender Material Node Network</center>
{% include image.html src="content\Reverse Engineer\BF3\bf3_m4a1_dxbc_nodes.jpg" href="content\Reverse Engineer\BF3\bf3_m4a1_dxbc_nodes.png" %}

<center>The result is a near pixel perfect recreation of how the rifle appears ingame.</center>
<div style="display:flex; flex-wrap:wrap; justify-content:space-between">
	<div style="margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="content\Reverse Engineer\BF3\bf3_m4a1_desert.jpg" href="content\Reverse Engineer\BF3\bf3_m4a1_desert.png" inline="" %}{% endcapture %}
		{% capture f %}Desert camoflague variant, with every bumb & scratch exactly as ingame{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:485px" footerStyle="max-width:80%" %}
	</div>
	<div style="width:max-content; margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="content\Reverse Engineer\BF3\bf3_m4a1_black.jpg" href="content\Reverse Engineer\BF3\bf3_m4a1_black.png" inline="" %}{% endcapture %}
		{% capture f %}Ordinary black variant uncovered by bypassing the desert camo part of the node network{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:485px" footerStyle="max-width:80%" %}
	</div>
</div>
Ultimately the goal was to fully automate this process to work for all art on screen, but developing the automation proved to be time consuming and I never got around to finishing it.


## Reverse Engineering - ArmA Terrain
***Disclaimer:** All reverse engineering I conduct is purely for educational purposes. I do not claim to be responsible for any of the original work.*

{% capture c %}{% include image.html src="content\Reverse Engineer\ArmA\utes.jpg" href="content\Reverse Engineer\ArmA\utes_4k.jpg" inline="" %}{% endcapture %}
{% capture f %}Work in progress port of ArmA 2's <a href="https://armedassault.fandom.com/wiki/Utes">Utes</a> map into Blender, by reverse engineering and extracting from the gamefiles (Enlarge for 4k).{% endcapture %}
{% include figure.html content=c footer=f %}

<center style="margin: 1em 0 1em 0">
	<div style="display:grid; grid-template-columns: auto auto auto; grid-gap: 1px; background-color:black">
		{% include image.html src="content\Reverse Engineer\ArmA\Stratis_satellite.jpg" inline="" %}
		{% include image.html src="content\Reverse Engineer\ArmA\Stratis_heightmap.jpg" inline="" %}
		{% include image.html src="content\Reverse Engineer\ArmA\Stratis_mask.jpg" inline="" %}
	</div>
	<figcaption style="font-size:initial; background-color:white; max-width:650px"><em>ArmA 3's <a href="https://armedassault.fandom.com/wiki/Stratis#Stratis_Air_Base">Stratis</a> satellite, heightmap, and surface type textures extracted and stitched together (8192x8192, reduced here for legal reasons).</em></figcaption>
</center>

<center style="margin: 1em 0 1em 0">
	<div style="display:grid; grid-template-columns: auto auto auto; grid-gap: 1px; background-color:black">
		{% include image.html src="content\Reverse Engineer\ArmA\stratis_mesh.jpg" href="content\Reverse Engineer\ArmA\stratis_mesh.png" inline="" %}
		{% include image.html src="content\Reverse Engineer\ArmA\stratis_objects.jpg" href="content\Reverse Engineer\ArmA\stratis_objects.png" inline="" %}
		{% include image.html src="content\Reverse Engineer\ArmA\stratis_bounding_boxes.jpg" href="content\Reverse Engineer\ArmA\stratis_bounding_boxes.png" inline="" %}
	</div>
	<figcaption style="font-size:initial; background-color:white;"><em>Terrain heightmap as a mesh, followed by bounding boxes of all the objects on the map (to debug before replacing with models).</em></figcaption>
</center>

# 3D Art
While I'm not technically an artist, I like to dabble in it when I can.
### [AN-PRC-117G](content\Art\AN-PRC-117-Harris-Falcon-3.jpg) Radio + [Display Shield](content\Art\AN-PRC-117G_FALCON_III_shield.jpg)
Fully procedurally modeled & textured using [Blender](https://www.blender.org/features/), with some artistic liberties taken.
{% include image.html src="content\Art\an-prc-117g_small.jpg" href="content\Art\an-prc-117g.png" %}
### [World Machine](https://www.world-machine.com/ "www.world-machine.com") Terrain
Fully procedurally modeled & textured using World Machine's erosion simulation.
{% include image.html src="content\Art\WM_small.jpg" href="content\Art\WM.jpg" %}
### Planetary
<div style="display:flex; flex-wrap:wrap; justify-content:space-between">
	<div style="margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="content\Art\earth_small.jpg" href="content\Art\earth.jpg" inline="" %}{% endcapture %}
		{% capture f %}Earth {% endcapture %}
		{% include figure.html content=c footer=f %}
	</div>
	<div style="width:max-content; margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="content\Art\orbit.gif" inline="" %}{% endcapture %}
		{% capture f %}Retro Vector Orbit{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:480px" %}
	</div>
</div>