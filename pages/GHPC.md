<head>
    <title>GHPC</title>
	<link href="/twentytwenty/css/twentytwenty.css" rel="stylesheet" type="text/css" />
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
	<script src="/twentytwenty/js/jquery.event.move.js"></script>
	<script src="/twentytwenty/js/jquery.twentytwenty.js"></script>
	<script>$(window).on('load', function() { $(".twentytwenty-container").twentytwenty({move_with_handle_only:0, click_to_move:1}); });</script>
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/default.min.css">
    <link rel="stylesheet" href="/index.css">
</head>

# [Gunner, HEAT, PC! (GHPC)](https://gunnerheatpc.com/ "https://store.steampowered.com/app/1705180/Gunner_HEAT_PC/")
*Early Access "Cold War Gone Hot" tank simulation game.<br>Short for "Gunner, use High Explosive Anti Tank round on enemy Personnel Carrier!" (yes, its nerdy)*

<div class="picture_grid">
	{% include image.html src="/content/GHPC/T-55s_small.jpg" href="/content/GHPC/T-55s.jpg" inline=1 %}
	{% include image.html src="/content/GHPC/Night Fire.jpg" inline=1 %}
	{% include image.html src="/content/GHPC/T-72s.jpg" inline=1 %}
	{% include image.html src="/content/GHPC/Abrams_small.jpg" href="/content/GHPC/Abrams.jpg" inline=1 %}
</div>

## Reticles
Gunsight crosshairs are integrated with the ballistics system, elements are procedurally placed to ensure projectiles always hit their mark as we tweak our amunition over the course of development. Supports both ["old-fashoned" light-blocking reticles](https://i.ebayimg.com/images/g/Hw8AAOSwArNdQ7DZ/s-l1600.jpg "reticle plane"), & [holographic/reflex reticles](https://upload.wikimedia.org/wikipedia/commons/4/49/Mark_III_free_gun_reflector_sight_mk_9_variant_reflex_sight_animation.gif "reflector sight").
All <span class="tooltip" tip="Crosshair & visual aids seen through a scope">reticles</span> were meticulously recreated from their real-world counterparts, using written & photographic reference (often difficult to find).

{% capture c %}{% include image.html src="/content/GHPC/Reticles/reticles_small.jpg" href="/content/GHPC/Reticles/reticles.png" inline=1 w=980 h=490 %}{% endcapture %}
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

{% capture c %}{% include compare.html a="/content/GHPC/Reticles/t72-day.jpg" b="/content/GHPC/Reticles/t72-night.jpg" labelA="Day" labelB="Night" pos="0.55" style="width=100%; aspect-ratio:980/551" %}{% endcapture %}
{% capture f %}Nearly every gunsight since WW2 has an internal light for use at night<br>(<a href="https://i.ebayimg.com/images/g/Hw8AAOSwArNdQ7DZ/s-l1600.jpg" title="reticle plane">reticles are actually white!</a>).{% endcapture %}
{% include figure.html content=c footer=f footerStyle="max-width:600px" %}

{% capture c %}{% include image.html src="/content/GHPC/Reticles/t55_labeled_small.jpg" href="/content/GHPC/Reticles/t55_labeled.jpg" inline=1 w=980 h=729 %}{% endcapture %}
{% capture f %}Russian T-55 gunsight with labels{% endcapture %}
{% include figure.html content=c footer=f style="max-width:720px" %}

{% capture h %}<a href="https://en.wikipedia.org/wiki/Stadiametric_rangefinding" title="wikipedia">Stadiametric rangefinding</a> allows quickly determining the distance of a target based on its apparent size.{% endcapture %}
{% capture c %}{% include image.html src="/content/GHPC/Reticles/stadia_small.jpg" href="/content/GHPC/Reticles/stadia.png" inline=1 w=605 h=200 %}{% endcapture %}
{% capture f %}<a href="https://en.wikipedia.org/wiki/T-72" title="wikipedia">T-72</a> stadia showing a US <a href="https://en.wikipedia.org/wiki/M60_tank#M60A3_series" title="wikipedia">M60A3</a> at 500 meter distance increments{% endcapture %}
{% include figure.html header=h content=c footer=f %}

## Thermal Imaging (FLIR)
Approximation of [Infrared](https://en.wikipedia.org/wiki/Forward-looking_infrared "Forward Looking InfraRed wikipedia") light, used to identify heat sources such as vehicles & infantry.
Vehicle engines, gun barrels, & tracks are heat sources that can change temperature independently. In addition, the sun's position is used to determine the ambient environement temperature.
Surface details are obtained using a semi-physically-based light model: surface brightness, roughness, & metalness are used to estimate [heat emittance](https://en.wikipedia.org/wiki/Emissivity "Emissivity wikipedia"), determining how bright or dark it appears in thermal imagers. This achieves decently realistic results without needing much manual labor.

<center style="margin: 1em 0 1em 0">
	<div class="picture_grid">
		{% include image.html src="/content/GHPC/FLIR/m60a3_1.jpg" href="/content/GHPC/FLIR/m60a3_1.png" inline=1 %}
		{% include image.html src="/content/GHPC/FLIR/m60a3_3.jpg" href="/content/GHPC/FLIR/m60a3_3.png" inline=1 %}
		{% include image.html src="/content/GHPC/FLIR/m60a3_5.jpg" href="/content/GHPC/FLIR/m60a3_5.png" inline=1 %}
		{% include image.html src="/content/GHPC/FLIR/m60a3_4.jpg" href="/content/GHPC/FLIR/m60a3_4.png" inline=1 %}
	</div>
	<figcaption><em><a href="https://en.wikipedia.org/wiki/M60_tank#M60A3_series" title="wikipedia">M60A3 TTS</a>'s FLIR at night, losely based on <a href="/content/GHPC/FLIR/TTS-real.png">real sources</a> (early WIP).</em></figcaption>
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
		{% capture c %}{% include image.html src="/content/GHPC/SDF/contour.gif" inline=1 style="width=100%; aspect-ratio:1" %}{% endcapture %}
		{% capture f %}Anti-aliased contour lines rendered directly from the heightmap file.{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:490px" %}
	</div>
	<div>
		{% capture c %}{% include image.html src="/content/GHPC/SDF/map.gif" inline=1 style="width=100%; aspect-ratio:1" %}{% endcapture %}
		{% capture f %}Multiple SDFs allow multiple colors & are combined with shaded relief.{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:490px" %}
	</div>
</div>

## Day-Night Cycle
Realtime sky simulation, based on a simplified solar system model. Takes into account the map's global coordinates. Includes seasonal sun elevation, moon phases, & [earthshine](https://en.wikipedia.org/wiki/Planetshine#/media/File:New_Moon.jpg "real life earthshine (wikipedia)"). The moon is also simulated as a light source & its brightness is affected by phase.

{% capture c %}{% include image.html src="/content/GHPC/Sky/sunpath_small.jpg" href="/content/GHPC/Sky/sunpath.png" inline=1 w=702 h=394 %}{% endcapture %}
{% capture f %}Sunpath over the course of a year{% endcapture %}
{% include figure.html content=c footer=f %}

{% capture c %}{% include image.html src="/content/GHPC/Sky/moon2.gif" inline=1 w=615 h=122 %}{% endcapture %}
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

{% capture c %}{% include image.html src="/content/GHPC/Vision Collider.jpg" inline=1 w=1905 h=893 %}{% endcapture %}
{% capture f %}Red is the invisible mesh. This prevents AI from seeing through forests.{% endcapture %}
{% include figure.html content=c footer=f %}