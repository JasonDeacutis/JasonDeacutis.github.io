<head>
	<style>
    .categories {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 4px;
        padding: 4px;
        background-color: black;
    }
    .categories > div {
        position: relative;
        text-align: center;
        color: white;
        overflow: hidden;
    }
    .categories > div > div {
        position: absolute;
        top: 35%; 
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        font-size: 4.5cqmin;
        font-weight: bold;
        text-shadow: 0px 0px 8px rgba(0,0,0,0.5);
        pointer-events: none;
    }
    .categories img {
        aspect-ratio: 16/9;
    }
    img {
        transition: .25s ease;
        display: block;
        object-fit: cover;
        height: 100%;
        background-color: rgb(16,16,16);
    }
    img:hover {
        filter: brightness(75%) saturate(0.5);
    }
    .static {
        position: absolute;
        pointer-events: none;
    }
    .static:hover {
        opacity: 0;
        filter: brightness(75%) saturate(0.5);
    }
	</style>
</head>

# Overview

<div class="categories">
    <div>
        <a href="GHPC" title="GHPC"><img src="/content/GHPC/T-55s.jpg"></a>
        <div>GHPC</div>
    </div>
    <div>
        <a href="GHPC" title="GHPC"><img src="/content/GHPC/Abrams.jpg"></a>
        <div>GHPC</div>
    </div>
    <div>
        <a href="SPIKE" title="SPIKE NLOS"><img src="/content/SPIKE/spike.gif"></a>
        <div>SPIKE</div>
    </div>
    <div>
        <a href="M240" title="MR M240"><img src="/content/MR M240/mr m240 small.gif"></a>
        <div>MR M240</div>
    </div>
    <div>
        <a href="Atmosphere" title="Atmosphere"><img src="/content/Shader/Atmosphere/sunset2.jpg"></a>
        <div>Atmosphere</div>
    </div>
    <div>
        <a href="Gravity" title="Gravity"><img src="/content/Gravity/BH.gif"></a>
        <div>Gravity</div>
    </div>
    <div>
        <a href="Raytracing" title="Realtime Raytracer & Pathtracer"><img src="/content/Shader/Raytracer/rt thumb.jpg"></a>
        <div>Raytracing</div>
    </div>
    <div>
        <a href="Raymarching" title="Raymarcher"><img src="/content/Shader/Raymarcher/raymarching thumb.jpg"></a>
        <div>Raymarching</div>
    </div>
    <div>
        <a href="Reverse-Engineering" title="Reverse Engineering Projects"><img src="/content/Reverse Engineer/BF3/bf3_alley_blender_dof.jpg" style="transform: scale(1.75) translate(-5%,10%)"></a>
        <div>Reverse Engineering</div>
    </div>
    <div>
        <a href="CUP" title="ArmA 3 - Community Upgrade Project"><img src="/content/CUP/CUP_thumb.jpg"></a>
        <div>CUP</div>
    </div>
    <div>
        <a href="Photogrammetry" title="Photogrammetry"><img src="/content/Scans/MLRS_normal_static.jpg" style="object-position: 70% 50%"></a>
        <div>Photogrammetry</div>
    </div>
    <div>
        <a href="Art" title="3D Art"><img src="/content/Art/an-prc-117g.png"></a>
        <div>3D Art</div>
    </div>
</div>