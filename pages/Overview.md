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
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4.5cqmin;
        font-weight: bold;
        text-shadow: 0px 0px 8px rgba(0,0,0,0.5);
        pointer-events: none;
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

<!-- Test
<div class="categories" style="grid-template-columns: auto auto auto auto">
    <img src="/content\GHPC\T-55s.jpg">
    <img src="/content\GHPC\Night Fire.jpg">
    <img src="/content\GHPC\T-72s.jpg">
    <img src="/content\GHPC\Abrams.jpg">
</div>
<p> -->

<div class="categories">
    <div>
        <a href="index" title="GHPC"><img src="/content\GHPC\T-55s.jpg"></a>
        <div>GHPC</div>
    </div>
    <div>
        <a href="index" title="GHPC"><img src="/content\GHPC\Night Fire.jpg"></a>
        <div>GHPC</div>
    </div>
    <div>
        <a href="index" title="GHPC"><img src="/content\GHPC\T-72s.jpg"></a>
        <div>GHPC</div>
    </div>
    <div>
        <a href="index" title="GHPC"><img src="/content\GHPC\Abrams.jpg"></a>
        <div>GHPC</div>
    </div>
    <!-- <div>
        <a href="index" title="Photogrammetry"><img src="/content\Scans\MLRS_normal.gif"></a>
        <div>Photogrammetry</div>
    </div> -->
    <!-- <div>
        <a href="index" title="Photogrammetry">
            <img src="/content\Scans\MLRS_normal_static.jpg" class="static">
            <img src="/content\Scans\MLRS_normal.gif">
        </a>
        <div>Photogrammetry</div>
    </div> -->
    <div>
        <a href="index" title="Photogrammetry"><img src="/content\Scans\MLRS_normal_static.jpg"></a>
        <div>Photogrammetry</div>
    </div>
    <div>
        <a href="index" title="3D Art"><img src="/content\Art\an-prc-117g.png"></a>
        <div>3D Art</div>
    </div>
</div>