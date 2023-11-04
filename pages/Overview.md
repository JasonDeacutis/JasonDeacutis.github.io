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
        <a href="GHPC" title="GHPC"><img src="/content/GHPC/T-55s_small.jpg"></a>
        <div>GHPC</div>
    </div>
    <div>
        <a href="GHPC" title="GHPC"><img src="/content/GHPC/Abrams_small.jpg"></a>
        <div>GHPC</div>
    </div>
    <div>
        <a href="SPIKE" title="SPIKE NLOS"><img src="/content/SPIKE/spike.gif"></a>
        <div>SPIKE</div>
    </div>
    <div>
        <a href="M240" title="MR M240"><img src="/content/MR M240/mr_m240_small.gif"></a>
        <div>MR M240</div>
    </div>
    <div>
        <a href="Atmosphere" title="Atmosphere"><img src="/content/Shader/Atmosphere/sunset2.jpg"></a>
        <div>Atmosphere</div>
    </div>
    <div>
        <a href="Physics" title="Physics"><img src="/content/Physics/thumb.gif"></a>
        <div>Physics</div>
    </div>
    <div>
        <a href="Raytracing" title="Realtime Raytracer & Pathtracer"><img src="/content/Shader/Raytracer/rt thumb.jpg"></a>
        <div>Raytracing</div>
    </div>
    <div>
        <a href="Raymarching" title="Raymarcher"><img src="/content/Shader/Raymarcher/raymarch_thumb.jpg"></a>
        <div>Raymarching</div>
    </div>
    <div>
        <a href="Icoplanet" title="Icoplanet"><img src="/content/Icoplanet/beachball_small.gif"></a>
        <div>Icoplanet</div>
    </div>
    <div>
        <a href="Blender-Addons#ue4-uasset-importer" title="UE4 Importer"><img src="/content/Blender/addons_thumb.jpg"></a>
        <div>UE4 Importer</div>
    </div>
    <div>
        <a href="Blender-Addons#x-plane-obj-importer" title="X-Plane Importer"><img src="/content/Blender/X-Plane/thumb.jpg" style=""></a>
        <div>X-Plane Importer</div>
    </div>
    <div>
        <a href="Blender-Addons#dcs-edm-importer" title="DCS EDM Importer"><img src="/content/Blender/EDM/thumb2.jpg"></a>
        <div>DCS Importer</div>
    </div>
    <div>
        <a href="Blender-Addons#valve-bsp-importer" title="Valve BSP Importer"><img src="/content/Blender/BSP/thumb.jpg"></a>
        <div>Source Importer</div>
    </div>
    <div>
        <a href="Blender-Addons#mjolnir---halo-reach-map-editor" title="Blender Addons"><img src="/content/Blender/Mjolnir/thumb.jpg"></a>
        <div>Mjolnir</div>
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
        <a href="Art" title="3D Art"><img src="/content/Art/thumb.jpg"></a>
        <div>3D Art</div>
    </div>
</div>