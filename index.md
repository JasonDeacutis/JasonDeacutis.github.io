<head>
	<!-- Slide Comparison -->
	<link href="/twentytwenty/css/twentytwenty.css" rel="stylesheet" type="text/css" />
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
	<script src="/twentytwenty/js/jquery.event.move.js"></script>
	<script src="/twentytwenty/js/jquery.twentytwenty.js"></script>
	<script>$(window).on('load', function() { $(".twentytwenty-container").twentytwenty({move_with_handle_only:0, click_to_move:1}); });</script>
	<!-- Code syntax highlighting -->
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/default.min.css">
	<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/highlight.min.js"></script>
	<script>hljs.initHighlightingOnLoad();</script>
	<link rel="stylesheet" href="/index.css">
	<style>
		iframe[seamless]{
			background-color: transparent;
			border: 0px none transparent;
			padding: 0px;
			overflow: hidden;
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
*Early Access "Cold War Gone Hot" tank simulation game.<br>GHPC is short for "Gunner, use High Explosive Anti Tank round on enemy Personnel Carrier!" (yes, its nerdy)*

<div class="picture_grid">
	{% include image.html src="/content\GHPC\T-55s.jpg" inline=1 %}
	{% include image.html src="/content\GHPC\Night Fire.jpg" inline=1 %}
	{% include image.html src="/content\GHPC\T-72s.jpg" inline=1 %}
	{% include image.html src="/content\GHPC\Abrams.jpg" inline=1 %}
</div>

## Reticles
Gunsight crosshairs are integrated with the ballistics system, elements are procedurally placed to ensure projectiles always hit their mark as we tweak our amunition over the course of development. Supports both ["old-fashoned" light-blocking reticles](https://i.ebayimg.com/images/g/Hw8AAOSwArNdQ7DZ/s-l1600.jpg "reticle plane"), & [holographic/reflex reticles](https://upload.wikimedia.org/wikipedia/commons/4/49/Mark_III_free_gun_reflector_sight_mk_9_variant_reflex_sight_animation.gif "reflector sight").
All <span class="tooltip" tip="Crosshair & visual aids seen through a scope">reticles</span> were meticulously recreated from their real-world counterparts, using written & photographic reference (often difficult to find).

{% capture c %}{% include image.html src="/content\GHPC\Reticles\reticles_small.jpg" href="/content\GHPC\Reticles\reticles.png" inline=1 w=980 h=490 %}{% endcapture %}
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

{% capture c %}{% include compare.html a="/content\GHPC\Reticles\t72-day.jpg" b="/content\GHPC\Reticles\t72-night.jpg" labelA="Day" labelB="Night" pos="0.55" style="width=100%; aspect-ratio:980/551" %}{% endcapture %}
{% capture f %}Nearly every gunsight since WW2 has an internal light for use at night<br>(<a href="https://i.ebayimg.com/images/g/Hw8AAOSwArNdQ7DZ/s-l1600.jpg" title="reticle plane">reticles are actually white!</a>).{% endcapture %}
{% include figure.html content=c footer=f footerStyle="max-width:600px" %}

{% capture c %}{% include image.html src="/content\GHPC\Reticles\t55_labeled_small.jpg" href="/content\GHPC\Reticles\t55_labeled.jpg" inline=1 w=980 h=729 %}{% endcapture %}
{% capture f %}Russian T-55 gunsight with labels{% endcapture %}
{% include figure.html content=c footer=f style="max-width:720px" %}

{% capture h %}<a href="https://en.wikipedia.org/wiki/Stadiametric_rangefinding" title="wikipedia">Stadiametric rangefinding</a> allows quickly determining the distance of a target based on its apparent size.{% endcapture %}
{% capture c %}{% include image.html src="/content\GHPC\Reticles\stadia_small.jpg" href="/content\GHPC\Reticles\stadia.png" inline=1 w=605 h=200 %}{% endcapture %}
{% capture f %}<a href="https://en.wikipedia.org/wiki/T-72" title="wikipedia">T-72</a> stadia showing a US <a href="https://en.wikipedia.org/wiki/M60_tank#M60A3_series" title="wikipedia">M60A3</a> at 500 meter distance increments{% endcapture %}
{% include figure.html header=h content=c footer=f %}

## Thermal Imaging (FLIR)
Approximation of [Infrared](https://en.wikipedia.org/wiki/Forward-looking_infrared "Forward Looking InfraRed wikipedia") light, used to identify heat sources such as vehicles & infantry.
Vehicle engines, gun barrels, & tracks are heat sources that can change temperature independently. In addition, the sun's position is used to determine the ambient environement temperature.
Surface details are obtained using a semi-physically-based light model: surface brightness, roughness, & metalness are used to estimate [heat emittance](https://en.wikipedia.org/wiki/Emissivity "Emissivity wikipedia"), determining how bright or dark it appears in thermal imagers. This achieves decently realistic results without needing much manual labor.

<center style="margin: 1em 0 1em 0">
	<div class="picture_grid">
		{% include image.html src="/content\GHPC\FLIR\m60a3_1.jpg" href="/content\GHPC\FLIR\m60a3_1.png" inline=1 %}
		{% include image.html src="/content\GHPC\FLIR\m60a3_3.jpg" href="/content\GHPC\FLIR\m60a3_3.png" inline=1 %}
		{% include image.html src="/content\GHPC\FLIR\m60a3_5.jpg" href="/content\GHPC\FLIR\m60a3_5.png" inline=1 %}
		{% include image.html src="/content\GHPC\FLIR\m60a3_4.jpg" href="/content\GHPC\FLIR\m60a3_4.png" inline=1 %}
	</div>
	<figcaption><em><a href="https://en.wikipedia.org/wiki/M60_tank#M60A3_series" title="wikipedia">M60A3 TTS</a>'s FLIR at night, losely based on <a href="/content\GHPC\FLIR\TTS-real.png">real sources</a> (early WIP).</em></figcaption>
</center>

## SDF Maps
<p>
2D map rendering is <i>harder than you'd think</i>. GHPC has terrains over 8x8km in size & players need a zoomable map.<br>
A static image needs to be very high resolution, it takes a lot of space, & even still it doesn't support a lot of zooming.<br>
A mesh based map allows infinite zoom, but may be difficult to generate or require level of detail for performance.<br>
</p>
<p>
<b>Signed Distance Fields</b> compromise & allow low resolution textures to encode vector graphics that can be infinetly zoomed.
They enable easy styling of borders & anti aliasing cheaper than traditional triangle MSAA.
The SDFs are procedurally generated based on the forest, road, & building masks that we already use for vegetation generation & terrain materials.
There's a lot of room for optimization, but there was no need given how fast it was already running (<1ms).
</p>

<div class="media_grid">
	<div>
		{% capture c %}{% include image.html src="/content\GHPC\SDF\contour.gif" inline=1 style="width=100%; aspect-ratio:1" %}{% endcapture %}
		{% capture f %}Anti-aliased contour lines rendered directly from the heightmap file.{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:490px" %}
	</div>
	<div>
		{% capture c %}{% include image.html src="/content\GHPC\SDF\map.gif" inline=1 style="width=100%; aspect-ratio:1" %}{% endcapture %}
		{% capture f %}Multiple SDFs allow multiple colors & are combined with shaded relief.{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:490px" %}
	</div>
</div>

## Day-Night Cycle
Realtime sky simulation, based on a simplified solar system model. Takes into account the map's global coordinates. Includes seasonal sun elevation, moon phases, & [earthshine](https://en.wikipedia.org/wiki/Planetshine#/media/File:New_Moon.jpg "real life earthshine (wikipedia)"). The moon is also simulated as a light source & its brightness is affected by phase.

{% capture c %}{% include image.html src="/content\GHPC\Sky\sunpath_small.jpg" href="/content\GHPC\Sky\sunpath.png" inline=1 w=702 h=394 %}{% endcapture %}
{% capture f %}Sunpath over the course of a year{% endcapture %}
{% include figure.html content=c footer=f %}

{% capture c %}{% include image.html src="/content\GHPC\Sky\moon2.gif" inline=1 w=615 h=122 %}{% endcapture %}
{% capture f %}Moon phase cycle {% endcapture %}
{% include figure.html content=c footer=f %}

<center>{% include embed-youtube.html id="kvQDc_CfAFo" %}</center>

## Driver AI
Developed the first iteration of the driver AI, allowing vehicles to navigate to a destination while avoiding obstacles.
<p>
	<video controls autoplay playsinline loop muted poster="/content/loading.png" style="width:100%">
		<source src="/content/GHPC/pathfinding.mp4" type="video/mp4">
	</video>
</p>

## AI Vision Occlusion
Developed the first iteration of the AI vision occlusion.
A mesh is used to determine how obscured a target is. PhysX raycasts are very efficient for static meshes, so this actually turned out to be very performant.
Houdini procedurally generates a mesh using the forest masks that we use for procedural vegetation placement.
The masks are vectorized, extruded, & the triangle count is reduced to reasonable amounts (<10,000 tris).

{% capture c %}{% include image.html src="/content\GHPC\Vision Collider.jpg" inline=1 w=1905 h=893 %}{% endcapture %}
{% capture f %}Red is the invisible mesh. This prevents AI from seeing through forests.{% endcapture %}
{% include figure.html content=c footer=f %}

# ArmA 3 - [Community Upgrade Project](https://steamcommunity.com/workshop/filedetails/?id=583575232 "Steam Workshop")
*Crowd-sourced mod to port content to Arma 3 from preceding games (military sandbox).*<br>
I worked as a small part of a massive team of passionate community members.
## [Terrains](https://www.cup-arma3.org/terrains "www.cup-arma3.org/terrains")
<div class="picture_grid">
	{% include image.html src="/content/CUP/small/chernarus autumn.png" href="/content/CUP/chernarus autumn.png" inline=1 %}
	{% include image.html src="/content/CUP/small/chernarus summer.png" href="/content/CUP/chernarus summer.png" inline=1 %}
	{% include image.html src="/content/CUP/small/chernarus winter.png" href="/content/CUP/chernarus winter.png" inline=1 %}
	{% include image.html src="/content/CUP/small/czech.png" href="/content/CUP/czech.png" inline=1 %}
</div>
{% include compare.html a="/content\CUP\A2.jpg" b="/content\CUP\A3.jpg" labelA="ArmA 2" labelB="CUP" style="width=100%; aspect-ratio:16/9" %}
## Blender Material Tool
Hopefully soon to be integrated into Alwarren's [ArmA Toolbox](https://www.armaholic.com/page.php?id=20519 "armaholic.com") addon for [Blender](https://www.blender.org/features/).
{% include image.html src="/content/CUP/barracks.jpg" w=980 h=466 %}
{% include image.html src="/content/CUP/rvmat.png" w=980 h=430 %}
A very nice optimization of ArmA's material system is the combining of materials into a single "[Multi Material](https://community.bistudio.com/wiki/Multimaterial "bikipedia")". This can drastically reduce the amount of CPU <span class="tooltip" tip="Command sent to the graphics card to draw a set of triangles.">drawcalls</span>, especially when there are hundreds of models on screen.
{% include compare.html a="/content\CUP\ATC-multi.jpg" b="/content\CUP\ATC-mask.jpg" labelA="Combined" labelB="Mask" pos="0.42" style="width=100%; aspect-ratio:980/495" %}

# Personal Projects

## Minecraft Clone
1-Month stab at recreating [Minecraft](https://en.wikipedia.org/wiki/Minecraft "wikipedia") for fun. Implemented dynamic voxels & infinite terrain.
{% include image.html src="/content/MC-sunset.jpg" href="/content/MC-sunset.png" style="width:100%; aspect-ratio: 16/9;" %}

## N-Body Gravity Physics
A [N-Body simulation](https://en.wikipedia.org/wiki/N-body_simulation "wikipedia") simulates all objects as sources of gravity. *For example, all the stars in the Milky Way galaxy pull on the Sun, & the Sun pulls on all the stars.* This is particularly expensive because the calculations increase exponentially with the body count ([O(n^2)](https://www.bigocheatsheet.com/ "Big-O Cheat Sheet")).

<div class="media_grid">
	<div style="width:max-content">
		{% capture c %}{% include image.html src="/content/Gravity/BH.gif" inline=1 %}{% endcapture %}
		{% capture f %}<a href="https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation" title="wikipedia">Barnes-Hut</a> algorithm reduces # of calculations by simulating clumps of bodies as one (<a href="https://www.bigocheatsheet.com/" title="Big-O Cheat Sheet">O(n*log(n))</a>).{% endcapture %}
		{% include figure.html content=c footer=f footerStyle="max-width:475px" %}
	</div>
	<div>
		{% capture c %}{% include image.html src="/content/Gravity/nbody.gif" inline=1 %}{% endcapture %}
		{% capture f %}Multi-threaded, <span class="tooltip" tip="Keeping memory access grouped together. Extremely important for high performance code.">cache-coherent</span>, <span class="tooltip" tip="Unity's new low-level C# compiler that attempts to convert code to a more parallel form (vectorization).">Burst compiled</span>, brute-force approach. For 4096 bodies, compared to the unoptimized starting point, this resulted in a speed up from <strong>~600ms</strong> per frame to <strong>~6ms</strong> (mostly from cache-coherency). PhysX collisions are now the bottleneck. {% endcapture %}
		{% include figure.html content=c footer=f footerStyle="max-width:390px" %}
	</div>
</div>

## Realtime Raytracer, Pathtracer, & Raymarcher
[Raytracing](https://en.wikipedia.org/wiki/Ray_tracing_(graphics) "wikipedia"), [Pathtracing](https://en.wikipedia.org/wiki/Path_tracing "wikipedia"), & [Raymarching](https://youtu.be/svLzmFuSBhk "YouTube") all form images by simulating rays of light entering a camera for every pixel. They're compulationally expensive compared to traditional <span class="tooltip" tip="Drawing images using trangles to represent objects, as any shape can be made given enough triangles.">[triangle rasterization](https://en.wikipedia.org/wiki/Rasterisation "wikipedia")</span>, but they can handle much more complicated graphical effects. **They are not necessarily challenging to program, but they are difficult to optimize.** All renderers here were made from scratch in Unity running on a GTX 1070 Ti without the use of RTX.

{% capture c %}{% include image.html src="/content/Shader/Raytracer/RT.jpg" href="/content/Shader/Raytracer/RT.png" inline=1 %}{% endcapture %}
{% capture f %}Traditional lights are simulated as "point" sources, meaning they are infinetly small & cast sharp shadows (rare in reality). Raytracing can properly simulate light sources with shape & size, creating soft shadow <a href="https://en.wikipedia.org/wiki/Umbra,_penumbra_and_antumbra#/media/File:Diagram_of_umbra,_penumbra_&_antumbra.png" >penumbra</a>.{% endcapture %}
{% include figure.html content=c footer=f footerStyle="max-width:850px" %}
{% include video.html src="/content/Shader/Raytracer/soft.mp4" %}

{% capture h %}<strong><a href="https://en.wikipedia.org/wiki/Path_tracing" title="wikipedia">Pathtracing</a></strong> is an extension of raytracing where every collision "bounces" the light ray. When a ray hits a mirror, a ray is reflected. An impefect mirror defocuses the ray into a cone (blurry reflection). A white wall defocuses the ray across a hemisphere. These bounces results in a grainy image when too few rays are used, but given enough time the result is a near perfect simulation of light.{% endcapture %}
{% capture c %}{% include video.html src="/content/Shader/Raytracer/PT.mp4" inline=1 %}{% endcapture %}
{% capture f %}Notice the slightly blurry reflections, & indirect illumination of the sphere’s dark side from light bouncing off the ground.{% endcapture %}
{% include figure.html header=h content=c footer=f %}

{% capture c %}{% include image.html src="/content/Shader/Raymarcher/raymacher1_small.jpg" href="/content/Shader/Raymarcher/raymacher1.png" inline=1 %}{% endcapture %}
{% capture f %}<strong><a href="https://youtu.be/svLzmFuSBhk" title="YouTube">Raymarching</a></strong> has a high upfront cost, but it can also achieve complexity otherwise impossible with triangles (<strong><a href="/content/Shader/Raymarcher/raymarch_offline.png">extreme non-realtime example</a></strong>).{% endcapture %}
{% include figure.html content=c footer=f %}

## Reverse Engineering - <span class="tooltip" tip="AAA 2011 first-person-shooter game, revolutionary for its graphics at the time">Battlefield 3</span>
***Disclaimer:** All reverse engineering I conduct is purely for educational purposes. I do not claim to be responsible for any of the original work.*

{% capture c %}{% include compare.html a="/content\Reverse Engineer\BF3\bf3_alley_ingame.jpg" b="/content\Reverse Engineer\BF3\bf3_alley_blender.jpg" labelA="BF3" labelB="Blender" inline=1 %}{% endcapture %}
{% capture f %}An alley (from the <a href="https://youtu.be/HlOwEFJJBnA?t=441" title="YouTube">first campaign level</a>) imported into Blender without textures for analysis.{% endcapture %}
{% include figure.html content=c footer=f %}

{% capture c %}{% include image.html src="/content\Reverse Engineer\BF3\bf3_alley_blender_dof.jpg" href="/content\Reverse Engineer\BF3\bf3_alley_blender_dof.png" inline=1 style="width:100%; aspect-ratio: 16/9;" %}{% endcapture %}
{% capture f %}Fully textured scene coming soon™{% endcapture %}
{% include figure.html content=c footer=f %}

<center><strong>Render Analysis</strong></center>
{% capture c %}{% include image.html src="/content\Reverse Engineer\BF3\alley_drawcalls.gif" inline=1 style="width:100%; aspect-ratio: 16/9;" %}{% endcapture %}
{% capture f %}
A wireframe is shown for each <span class="tooltip" tip="Command sent to the graphics card to draw a set of triangles.">drawcall</span> issued.
BF3 makes heavy use of <span class="tooltip" tip="Drawing many copies of a mesh in one drawcall."><a href="https://docs.unity3d.com/Manual/GPUInstancing.html">instancing</a></span>, so most of the geometry is drawn in relatively few drawcalls (~300 here).
Only unlit surface color is shown, but simultaneously <strong><a href="/content/RenderDoc/render-targets.gif" title="Render Targets">other PBR data is being drawn</a></strong> (<span class="tooltip" tip="Lighting calculations are delayed until all geometry is drawn, avoiding expensive shading on hidden pixels & allowing many light sources.">deferred rendering</span>).
{% endcapture %}
{% include figure.html content=c footer=f %}

To understand how the texturing was achieved, I wrote a Python script in Blender to convert shader assembly to a material node network.
<div class="media_grid">
	<div style="max-width:100%">
		{% capture c %}{% include assembly.html %}{% endcapture %}
		{% capture f %}M4A1 rifle DirectX <span class="tooltip" tip="Code responsible for coloring every pixel on screen.">pixel shader</span> assembly{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:475px" %}
	</div>
	<div style="width:max-content">
		{% capture c %}{% include image.html src="/content\Reverse Engineer\BF3\dxbc_normal.jpg" inline=1 %}{% endcapture %}
		{% capture f %}Example section responsible for reading the <span class="tooltip" tip="Texture used to aproximate the lighting of a bumpy surface.">normal map</span>{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:490px" %}
	</div>
</div>

<center>Converted to Blender Material Node Network</center>
{% include image.html src="/content\Reverse Engineer\BF3\bf3_m4a1_dxbc_nodes.jpg" href="/content\Reverse Engineer\BF3\bf3_m4a1_dxbc_nodes.png" %}

<center>The result is a near pixel perfect recreation of how the rifle appears ingame.</center>
<div class="media_grid">
	<div>
		{% capture c %}{% include image.html src="/content\Reverse Engineer\BF3\bf3_m4a1_desert.jpg" href="/content\Reverse Engineer\BF3\bf3_m4a1_desert.png" inline=1 %}{% endcapture %}
		{% capture f %}Desert camoflague variant, with every bumb & scratch exactly as ingame{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:485px" footerStyle="max-width:80%" %}
	</div>
	<div style="width:max-content">
		{% capture c %}{% include image.html src="/content\Reverse Engineer\BF3\bf3_m4a1_black.jpg" href="/content\Reverse Engineer\BF3\bf3_m4a1_black.png" inline=1 %}{% endcapture %}
		{% capture f %}Ordinary black variant uncovered by bypassing the desert camo part of the node network{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:485px" footerStyle="max-width:80%" %}
	</div>
</div>
Ultimately the goal was to fully automate this process to work for all art on screen, but developing the automation proved to be time consuming & I never got around to finishing it.


## Reverse Engineering - ArmA Terrain
***Disclaimer:** All reverse engineering I conduct is purely for educational purposes. I do not claim to be responsible for any of the original work.*

{% capture c %}{% include image.html src="/content\Reverse Engineer\ArmA\utes.jpg" href="/content\Reverse Engineer\ArmA\utes_4k.jpg" inline=1 style="width:100%; aspect-ratio: 16/9;" %}{% endcapture %}
{% capture f %}Work in progress port of ArmA 2's <a href="https://armedassault.fandom.com/wiki/Utes">Utes</a> map into Blender, by reverse engineering & extracting from the gamefiles (Enlarge for 4k).{% endcapture %}
{% include figure.html content=c footer=f %}

<center style="margin: 1em 0 1em 0">
	<div class="picture_grid" style="grid-template-columns: auto auto auto">
		{% include image.html src="/content\Reverse Engineer\ArmA\Stratis_satellite.jpg" inline=1 a_style="width:100%; aspect-ratio:1;" %}
		{% include image.html src="/content\Reverse Engineer\ArmA\Stratis_heightmap.jpg" inline=1 a_style="width:100%; aspect-ratio:1;" %}
		{% include image.html src="/content\Reverse Engineer\ArmA\Stratis_mask.jpg" inline=1 a_style="width:100%; aspect-ratio:1;" %}
	</div>
	<figcaption style="max-width:650px"><em>ArmA 3's <a href="https://armedassault.fandom.com/wiki/Stratis#Stratis_Air_Base">Stratis</a> satellite, heightmap, & surface type textures extracted & stitched together (8192x8192, reduced here for legal reasons).</em></figcaption>
</center>

<center style="margin: 1em 0 1em 0">
	<div class="picture_grid" style="grid-template-columns: auto auto auto">
		{% include image.html src="/content\Reverse Engineer\ArmA\stratis_mesh.jpg" href="/content\Reverse Engineer\ArmA\stratis_mesh.png" inline=1 a_style="width:100%; aspect-ratio:490/276;" %}
		{% include image.html src="/content\Reverse Engineer\ArmA\stratis_objects.jpg" href="/content\Reverse Engineer\ArmA\stratis_objects.png" inline=1 a_style="width:100%; aspect-ratio:490/276;" %}
		{% include image.html src="/content\Reverse Engineer\ArmA\stratis_bounding_boxes.jpg" href="/content\Reverse Engineer\ArmA\stratis_bounding_boxes.png" inline=1 a_style="width:100%; aspect-ratio:490/276;" %}
	</div>
	<figcaption><em>Terrain heightmap as a mesh, followed by bounding boxes of all the objects on the map (to debug before replacing with models).</em></figcaption>
</center>

# 3D Art
I'm more of a programmer than an artist, but I dabble when I can.
### [AN-PRC-117G](content\Art\AN-PRC-117-Harris-Falcon-3.jpg) Radio + [Display Shield](content\Art\AN-PRC-117G_FALCON_III_shield.jpg)
Fully procedurally modeled & textured using [Blender](https://www.blender.org/features/), with some artistic liberties taken.
{% include image.html src="/content\Art\an-prc-117g_small.jpg" href="/content\Art\an-prc-117g.png" style="width:100%; aspect-ratio: 16/9;" %}
### [World Machine](https://www.world-machine.com/ "www.world-machine.com") Terrain
Fully procedurally modeled & textured using World Machine's erosion simulation.
{% include image.html src="/content\Art\WM_small.jpg" href="/content\Art\WM.jpg" style="width:100%; aspect-ratio: 16/9;" %}
### Planetary
{% capture c %}{% include image.html src="/content\Art\earf3.png" href="/content\Art\earf3.png" inline=1 style="width:100%; aspect-ratio: 16/9;" %}{% endcapture %}
{% capture f %}Earth (Realistic){% endcapture %}
{% include figure.html content=c footer=f %}
<div style="display:flex; flex-wrap:wrap; justify-content:space-between">
	<div style="margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="/content\Art\earth_small.jpg" href="/content\Art\earth.jpg" inline=1 %}{% endcapture %}
		{% capture f %}Earth{% endcapture %}
		{% include figure.html content=c footer=f %}
	</div>
	<div style="width:max-content; margin:auto; margin-top:0px">
		{% capture c %}{% include image.html src="/content\Art\orbit.gif" inline=1 %}{% endcapture %}
		{% capture f %}Retro Vector Orbit{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:480px" %}
	</div>
</div>

<!-- <iframe src="/pages/SPIKE.html" style="width:100%" seamless> -->