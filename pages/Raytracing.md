<head>
    <title>Raytracing</title>
    <link rel="stylesheet" href="/index.css">
</head>

## Realtime Raytracer, Pathtracer, & Raymarcher
[Raytracing](https://en.wikipedia.org/wiki/Ray_tracing_(graphics) "wikipedia"), [Pathtracing](https://en.wikipedia.org/wiki/Path_tracing "wikipedia"), & [Raymarching](https://youtu.be/svLzmFuSBhk "YouTube") all form images by simulating rays of light entering a camera for every pixel. They're computationally expensive compared to traditional <span class="tooltip" tip="Drawing images using triangles to represent objects, as any shape can be made given enough triangles.">[triangle rasterization](https://en.wikipedia.org/wiki/Rasterisation "wikipedia")</span>, but they can handle much more complicated graphical effects. **They are not necessarily challenging to program, but they are difficult to optimize.** All renderers here were made from scratch in Unity running on a GTX 1070 Ti without the use of RTX.

{% capture c %}{% include image.html src="/content/Shader/Raytracer/RT.jpg" href="/content/Shader/Raytracer/RT.png" inline=1 %}{% endcapture %}
{% capture f %}Traditional lights are simulated as "point" sources, meaning they are infinitely small & cast sharp shadows (rare in reality). Raytracing can properly simulate light sources with shape & size, creating soft shadow <a href="https://en.wikipedia.org/wiki/Umbra,_penumbra_and_antumbra#/media/File:Diagram_of_umbra,_penumbra_&_antumbra.png" >penumbra</a>.{% endcapture %}
{% include figure.html content=c footer=f footerStyle="max-width:850px" %}
{% include video.html src="/content/Shader/Raytracer/soft.mp4" %}

{% capture h %}<strong><a href="https://en.wikipedia.org/wiki/Path_tracing" title="wikipedia">Pathtracing</a></strong> is an extension of raytracing where every collision "bounces" the light ray. When a ray hits a mirror, a ray is reflected. An imperfect mirror defocuses the ray into a cone (blurry reflection). A white wall defocuses the ray across a hemisphere. These bounces results in a grainy image when too few rays are used, but given enough time the result is a near perfect simulation of light.{% endcapture %}
{% capture c %}{% include video.html src="/content/Shader/Raytracer/PT.mp4" inline=1 %}{% endcapture %}
{% capture f %}Notice the slightly blurry reflections, & indirect illumination of the sphere’s dark side from light bouncing off the ground.{% endcapture %}
{% include figure.html header=h content=c footer=f %}