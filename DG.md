<head>
	<style>
    .media_grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
    }
    .media_grid > * {
        margin: auto;
        margin-top: 0;
        width: 485px;
    }
    .youtube {
        aspect-ratio: 16/9;
        width: 100%;
    }
    .media_caption {
        font-style: italic;
        text-align: center;
        vertical-align: top;
        text-wrap: balance;
    }
	</style>
</head>

# [Inter-Coastal Electronics](https://www.faac.com/inter-coastal/) - MR M240
Prototype Mixed Reality [M240](https://en.wikipedia.org/wiki/M240_machine_gun) trainer using the [HoloLens 2](https://www.microsoft.com/en-us/hololens) ([IVAS](https://en.wikipedia.org/wiki/Integrated_Visual_Augmentation_System) placeholder) & Unity Engine.
Our goal is to perform on-aircraft training for helicopter door gunners, without the hastle of live-fire.
The ACME M240 has simulated safety, trigger, belt reloading, malfunctions, & physical recoil (the firing sound is actually the recoil mechanism).
Optional visual aids: ammo counter, safety, gun faults, ballistic trajectory, impact point (CCIP).

***Disclaimer:*** Recording the HoloLens is hard. Microsoft's recorder has misleading brightness & contrast, its misaligned, has transparency artifacts, and it's at an agonizing *30fps*.
The best alternative was to tape a phone to the HoloLens, but this distorts the colors.
<div class="media_grid">
    <figure>
        <iframe
            class = "youtube"
            src = "https://www.youtube.com/embed/3thL5GhfrJg?si=OznaOa58g1HB0cjA&rel=0&modestbranding=1"
            title = "YouTube video player"
            frameborder = "0"
            allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <figcaption class="media_caption">The virtual ground is placed 50ft underground to simulate a helicopter's height. Colors are only distorted in recordings.</figcaption>
    </figure>
    <figure>
        <iframe
            class = "youtube"
            src = "https://www.youtube.com/embed/MB7aTOkW7ig?si=IqvXcnyBu1AQQ8Ad&rel=0&modestbranding=1"
            title = "YouTube video player"
            frameborder = "0"
            allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <figcaption class="media_caption">Shooting down virtual drone targets at the <a href="https://www.quad-a.org/">AAAA</a> show.</figcaption>
    </figure>
    <figure>
        <iframe
            class = "youtube"
            src = "https://www.youtube.com/embed/n3LY1NBlowk?si=Ga3XvnO84PrxEy-t&rel=0&modestbranding=1"
            title = "YouTube video player"
            frameborder = "0"
            allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <figcaption class="media_caption">Visualization of safety & fault states.</figcaption>
    </figure>
    <figure>
        <iframe
            class = "youtube"
            src = "https://www.youtube.com/embed/s_MGsTOoaIQ?si=d02Ts0tnI9bldSBc&rel=0&modestbranding=1"
            title = "YouTube video player"
            frameborder = "0"
            allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <figcaption class="media_caption">Shooting virtual humvees in the backyard.</figcaption>
    </figure>
</div>
<p></p>

<figure style="max-width:485px; margin:auto">
    <video autoplay playsinline loop muted style="width:100%; aspect-ratio:1; object-fit:cover; object-position: 0 50%; filter: saturate(75%)">
        <source src="content/MR M240/MR Outdoor Vehicle.mp4" type="video/mp4">
    </video>
    <figcaption class="media_caption">A 3D scan of the backyard was used to ground the holograms & hide them behind walls.</figcaption>
</figure>