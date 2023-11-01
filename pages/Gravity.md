<head>
    <link rel="stylesheet" href="/index.css">
</head>

## N-Body Gravity Physics
A [N-Body simulation](https://en.wikipedia.org/wiki/N-body_simulation "wikipedia") simulates all objects as sources of gravity. *For example, all the stars in the Milky Way galaxy pull on the Sun, & the Sun pulls on all the stars.* This is particularly expensive because the calculations increase exponentially with the body count ([O(n^2)](https://www.bigocheatsheet.com/ "Big-O Cheat Sheet")).

<div style="display:flex; flex-wrap:wrap; justify-content:space-between">
	<div style="width:max-content; margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="content/Gravity/BH.gif" inline=1 %}{% endcapture %}
		{% capture f %}<a href="https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation" title="wikipedia">Barnes-Hut</a> algorithm reduces # of calculations by simulating clumps of bodies as one (<a href="https://www.bigocheatsheet.com/" title="Big-O Cheat Sheet">O(n*log(n))</a>).{% endcapture %}
		{% include figure.html content=c footer=f footerStyle="max-width:475px" %}
	</div>
	<div style="margin:auto; margin-top:0px;">
		{% capture c %}{% include image.html src="content/Gravity/nbody.gif" inline=1 %}{% endcapture %}
		{% capture f %}Multi-threaded, <span class="tooltip" tip="Keeping memory access grouped together. Extremely important for high performance code.">cache-coherent</span>, <span class="tooltip" tip="Unity's new low-level C# compiler that attempts to convert code to a more parallel form (vectorization).">Burst compiled</span>, brute-force approach. For 4096 bodies, compared to the unoptimized starting point, this resulted in a speed up from <strong>~600ms</strong> per frame to <strong>~6ms</strong> (mostly from cache-coherency). PhysX collisions are now the bottleneck. {% endcapture %}
		{% include figure.html content=c footer=f footerStyle="max-width:390px" %}
	</div>
</div>