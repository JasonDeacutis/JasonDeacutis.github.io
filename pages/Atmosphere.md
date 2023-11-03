<head>
    <link rel="stylesheet" href="subject.css">
	<style>
    .media_grid {
        gap: 4px;
    }
    .media_grid > * {
        width: 486px;
    }
    img {
        border-radius: 8px;
    }
	</style>
</head>

# Atmosphere Shader
Realtime atmosphere shader written in HLSL simulating light scattering in Unity Engine.
Both realistic & stylized results can be achieved.
Optionally supports casting shadows onto the atmosphere.

<div class="media_grid">
    <figure>
        <a href="/content/Shader/Atmosphere/sunset1.jpg" title="Enlarge"><img src="/content/Shader/Atmosphere/sunset1.jpg"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="/content/Shader/Atmosphere/sunset2.jpg" title="Enlarge"><img src="/content/Shader/Atmosphere/sunset2.jpg"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="/content/Shader/Atmosphere/in_atmo1.jpg" title="Enlarge"><img src="/content/Shader/Atmosphere/in_atmo1.jpg"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="/content/Shader/Atmosphere/atmo_shadow.gif" title="Enlarge"><img src="/content/Shader/Atmosphere/atmo_shadow.gif" style="aspect-ratio:16/9; object-fit:cover"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="/content/Shader/Atmosphere/sunset6.jpg" title="Enlarge"><img src="/content/Shader/Atmosphere/sunset6.jpg"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="/content/Shader/Atmosphere/sunrise.jpg" title="Enlarge"><img src="/content/Shader/Atmosphere/sunrise.jpg"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="/content/Shader/Atmosphere/moon_shadow_extreme.png" title="Enlarge"><img src="/content/Shader/Atmosphere/moon_shadow_extreme.png"></a>
        <figcaption>Extreme example showing shadow casting on the atmosphere itself</figcaption>
    </figure>
</div>

<figure>
    <img src="/content/Shader/Atmosphere/scatter_diagram.png">
    <figcaption>Along each pixel's ray, multiple points are evaluated to see how much light they recieve. These are combined to determine the final pixel color.</figcaption>
</figure>