<head>
	<style>
    .media_grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .media_grid > * {
        margin: auto;
        margin-top: 0;
        width: 490px;
    }
    .youtube {
        aspect-ratio: 16/9;
        width: 100%;
    }
    figure img {
        display: block;
    }
    figure figcaption {
        font-style: italic;
        text-align: center;
        vertical-align: top;
        text-wrap: balance;
    }
    img:hover {
        filter: brightness(75%);
    }
	</style>
</head>

# Atmosphere Shader
Realtime atmosphere shader simulating scattering in Unity Engine.
Both realistic and stylized results can be achieved.
Optionally supports casting shadows onto the atmosphere.

<div class="media_grid">
    <figure>
        <a href="content/Shader/Atmosphere/sunset1.jpg" title="Enlarge"><img src="content/Shader/Atmosphere/sunset1.jpg"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="content/Shader/Atmosphere/sunset2.jpg" title="Enlarge"><img src="content/Shader/Atmosphere/sunset2.jpg"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="content/Shader/Atmosphere/in_atmo1.jpg" title="Enlarge"><img src="content/Shader/Atmosphere/in_atmo1.jpg"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="content/Shader/Atmosphere/atmo_shadow.gif" title="Enlarge"><img src="content/Shader/Atmosphere/atmo_shadow.gif" style="aspect-ratio:16/9; object-fit:cover"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="content/Shader/Atmosphere/sunset6.jpg" title="Enlarge"><img src="content/Shader/Atmosphere/sunset6.jpg"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="content/Shader/Atmosphere/sunrise.jpg" title="Enlarge"><img src="content/Shader/Atmosphere/sunrise.jpg"></a>
        <figcaption></figcaption>
    </figure>
    <figure>
        <a href="content/Shader/Atmosphere/moon_shadow_extreme.png" title="Enlarge"><img src="content/Shader/Atmosphere/moon_shadow_extreme.png"></a>
        <figcaption>Extreme example showing shadow casting on the atmosphere itself</figcaption>
    </figure>
</div>