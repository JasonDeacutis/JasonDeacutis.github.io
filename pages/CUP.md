<head>
	<link href="/twentytwenty/css/twentytwenty.css" rel="stylesheet" type="text/css" />
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
	<script src="/twentytwenty/js/jquery.event.move.js"></script>
	<script src="/twentytwenty/js/jquery.twentytwenty.js"></script>
	<script>$(window).on('load', function() { $(".twentytwenty-container").twentytwenty({move_with_handle_only:0, click_to_move:1}); });</script>
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/default.min.css">
    <link rel="stylesheet" href="/index.css">
</head>

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
{% include compare.html a="/content/CUP/A2.jpg" b="/content/CUP/A3.jpg" labelA="ArmA 2" labelB="CUP" style="width=100%; aspect-ratio:16/9" %}
## Blender Material Importer
Blender addon that allows the importing of ArmA's .rvmat materials and textures.<br>
Hopefully soon to be integrated into Alwarren's [ArmA Toolbox](https://www.armaholic.com/page.php?id=20519 "armaholic.com") addon for [Blender](https://www.blender.org/features/).
<img src="/content/CUP/barracks.jpg">
<img src="/content/CUP/rvmat.png">
A very nice optimization of ArmA's material system is the combining of materials into a single "[Multi Material](https://community.bistudio.com/wiki/Multimaterial "bikipedia")". This can drastically reduce the amount of CPU <span class="tooltip" tip="Command sent to the graphics card to draw a set of triangles.">drawcalls</span>, especially when there are hundreds of models on screen.
{% include compare.html a="/content/CUP/ATC-multi.jpg" b="/content/CUP/ATC-mask.jpg" labelA="Combined" labelB="Mask" pos="0.42" style="width=100%; aspect-ratio:980/495" %}