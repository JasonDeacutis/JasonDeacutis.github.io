<head>
    <title>Raymarching</title>
    <link rel="stylesheet" href="/index.css">
</head>

## Realtime Raymarcher
[Raytracing](https://en.wikipedia.org/wiki/Ray_tracing_(graphics) "wikipedia"), [Pathtracing](https://en.wikipedia.org/wiki/Path_tracing "wikipedia"), & [Raymarching](https://youtu.be/svLzmFuSBhk "YouTube") all form images by simulating rays of light entering a camera for every pixel. They're compulationally expensive compared to traditional <span class="tooltip" tip="Drawing images using trangles to represent objects, as any shape can be made given enough triangles.">[triangle rasterization](https://en.wikipedia.org/wiki/Rasterisation "wikipedia")</span>, but they can handle much more complicated graphical effects. **They are not necessarily challenging to program, but they are difficult to optimize.** All renderers here were made from scratch in Unity running on a GTX 1070 Ti without the use of RTX.

{% capture c %}{% include image.html src="/content/Shader/Raymarcher/raymacher1_small.jpg" href="/content/Shader/Raymarcher/raymacher1.png" inline=1 %}{% endcapture %}
{% capture f %}<strong><a href="https://youtu.be/svLzmFuSBhk" title="YouTube">Raymarching</a></strong> has a high upfront cost, but it can also achieve complexity otherwise impossible with triangles (<strong><a href="/content/Shader/Raymarcher/raymarch_offline.png">extreme non-realtime example</a></strong>).{% endcapture %}
{% include figure.html content=c footer=f %}

<center>
    <figure>
        <img src="/content/Shader/Raymarcher/raymarched terrain.gif">
        <figcaption>Raymarched terrain heightmap</figcaption>
    </figure>
</center>