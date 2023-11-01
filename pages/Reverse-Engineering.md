<head>
	<link href="/twentytwenty/css/twentytwenty.css" rel="stylesheet" type="text/css" />
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
	<script src="/twentytwenty/js/jquery.event.move.js"></script>
	<script src="/twentytwenty/js/jquery.twentytwenty.js"></script>
	<script>$(window).on('load', function() { $(".twentytwenty-container").twentytwenty({move_with_handle_only:0, click_to_move:1}); });</script>
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/default.min.css">
	<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/highlight.min.js"></script>
	<script>hljs.initHighlightingOnLoad();</script>
    <link rel="stylesheet" href="/index.css">
</head>

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
<div style="display:flex; flex-wrap:wrap; justify-content:space-between">
	<div style="margin:auto; margin-top:0px; max-width:100%">
		{% capture c %}{% include assembly.html %}{% endcapture %}
		{% capture f %}M4A1 rifle DirectX <span class="tooltip" tip="Code responsible for coloring every pixel on screen.">pixel shader</span> assembly{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:475px" %}
	</div>
	<div style="width:max-content; margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="/content\Reverse Engineer\BF3\dxbc_normal.jpg" inline=1 %}{% endcapture %}
		{% capture f %}Example section responsible for reading the <span class="tooltip" tip="Texture used to aproximate the lighting of a bumpy surface.">normal map</span>{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:490px" %}
	</div>
</div>

<center>Converted to Blender Material Node Network</center>
{% include image.html src="/content\Reverse Engineer\BF3\bf3_m4a1_dxbc_nodes.jpg" href="/content\Reverse Engineer\BF3\bf3_m4a1_dxbc_nodes.png" %}

<center>The result is a near pixel perfect recreation of how the rifle appears ingame.</center>
<div style="display:flex; flex-wrap:wrap; justify-content:space-between">
	<div style="margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="/content\Reverse Engineer\BF3\bf3_m4a1_desert.jpg" href="/content\Reverse Engineer\BF3\bf3_m4a1_desert.png" inline=1 %}{% endcapture %}
		{% capture f %}Desert camoflague variant, with every bumb & scratch exactly as ingame{% endcapture %}
		{% include figure.html content=c footer=f style="max-width:485px" footerStyle="max-width:80%" %}
	</div>
	<div style="width:max-content; margin:auto; margin-top:0px;">
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
	<div style="display:grid; grid-template-columns: auto auto auto; grid-gap: 1px; background-color:black">
		{% include image.html src="/content\Reverse Engineer\ArmA\Stratis_satellite.jpg" inline=1 a_style="width:100%; aspect-ratio:1;" %}
		{% include image.html src="/content\Reverse Engineer\ArmA\Stratis_heightmap.jpg" inline=1 a_style="width:100%; aspect-ratio:1;" %}
		{% include image.html src="/content\Reverse Engineer\ArmA\Stratis_mask.jpg" inline=1 a_style="width:100%; aspect-ratio:1;" %}
	</div>
	<figcaption style="font-size:initial; background-color:white; max-width:650px"><em>ArmA 3's <a href="https://armedassault.fandom.com/wiki/Stratis#Stratis_Air_Base">Stratis</a> satellite, heightmap, & surface type textures extracted & stitched together (8192x8192, reduced here for legal reasons).</em></figcaption>
</center>

<center style="margin: 1em 0 1em 0">
	<div style="display:grid; grid-template-columns: auto auto auto; grid-gap: 1px; background-color:black">
		{% include image.html src="/content\Reverse Engineer\ArmA\stratis_mesh.jpg" href="/content\Reverse Engineer\ArmA\stratis_mesh.png" inline=1 a_style="width:100%; aspect-ratio:490/276;" %}
		{% include image.html src="/content\Reverse Engineer\ArmA\stratis_objects.jpg" href="/content\Reverse Engineer\ArmA\stratis_objects.png" inline=1 a_style="width:100%; aspect-ratio:490/276;" %}
		{% include image.html src="/content\Reverse Engineer\ArmA\stratis_bounding_boxes.jpg" href="/content\Reverse Engineer\ArmA\stratis_bounding_boxes.png" inline=1 a_style="width:100%; aspect-ratio:490/276;" %}
	</div>
	<figcaption style="font-size:initial; background-color:white;"><em>Terrain heightmap as a mesh, followed by bounding boxes of all the objects on the map (to debug before replacing with models).</em></figcaption>
</center>