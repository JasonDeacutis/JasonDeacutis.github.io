<head>
    <title>Icoplanet</title>
    <link rel="stylesheet" href="/index.css">
</head>

## Icoplanet - Icosphere Based Planetary Rendering
Experiment of subdividing an icosahedron ("Icosphere" when subdivided) on the CPU for adaptive level of detail, allowing an Earth or Moon sized sphere to have detail down to the meter level.

I mostly made this because I was toying with the retro wireframe aesthetic, its intentionally similar to terrain rendering before GPUs.
For proper planetary rendering, a quadtree based solution is still probably ideal.
Its currently CPU heavy and doesn't take advantage of the GPU's ability to displace hundreds of thousands of vertices.
*That being said*, its still faster than a fixed detail high poly mesh, and naive GPU tesselation.
I could only get ~6 levels of subdivision with GPU tesselation, which isn't nearly enough to get to meter-level detail, this can easily get to *18 levels of subdivision*.
The recursive nature makes it addictingly simple, but its difficult to keep memory access patterns linear.
I believe there to be many CPU optimizations that could still be performed.

<div class="media_grid" style="gap:10px">
    <figure>
        <img src="/content/Icoplanet/beachball.gif">
        <figcaption>Adaptive subdivision and culling based on screenspace triangle size.</figcaption>
    </figure>
    <figure>
        <img src="/content/Icoplanet/tree_step.gif">
        <figcaption>During each iteration, the leaves of the tree are evaluated to determine if they should be subdivided.</figcaption>
    </figure>
    <figure>
        <a href="/content/Icoplanet/frustum_cull_far.png"><img src="/content/Icoplanet/frustum_cull_far.jpg"></a>
        <figcaption>Frustum & backface culling are also performed.</figcaption>
    </figure>
    <figure>
        <img src="/content/Icoplanet/terrain.gif">
        <figcaption>Perlin noise based height displacement, smooth LOD transition.</figcaption>
    </figure>
    <figure>
        <img src="/content/Icoplanet/polyplanet.gif">
        <figcaption>Used as a traditional triangle mesh</figcaption>
    </figure>
</div>