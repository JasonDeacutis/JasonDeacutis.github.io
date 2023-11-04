<head>
    <link rel="stylesheet" href="subject.css">
    <style>
    img {
        border-radius: 8px;
    }
	</style>
</head>

## [UE4 UAsset Importer](https://github.com/Waffle1434/Blender-UE4-Importer)
Blender addon to one-click import Unreal Engine 4's .uasset & .umap files.
Maps, static & skeletal meshes, & materials are imported in full and replicated as best as possible in Blender.
Unreal's shader nodes are emulated using Blender's equivalents, custom functions are imported as node groups.
Painstakingly reverse engineered the binary file format.
Unfortunately, there are literal hundreds of microchanges made to the file format that I can't keep up with, so not all versions are supported.

<figure style="margin-left:0px; margin-right:0px">
    <a href="/content/Blender/UAsset/uasset.png"><img src="/content/Blender/UAsset/uasset.jpg"></a>
    <figcaption>Entire <a href="https://www.unrealengine.com/marketplace/en-US/product/modular-scifi-season-2-starter-bundle">.umap</a> & all its meshes and materials imported</figcaption>
</figure>

<div class="media_grid">
	<figure>
        <a href="/content/Blender/UAsset/import.gif"><img src="/content/Blender/UAsset/import_small.gif"></a>
        <figcaption>Import process example</figcaption>
    </figure>
	<figure>
        <a href="/content/Blender/UAsset/blue room.png"><img src="/content/Blender/UAsset/blue room.jpg"></a>
    </figure>
</div>

Ironically, what I wasn't expecting was to learn *just how far behind* Blender's Eevee render engine is in performance compared to UE4. I hope future versions are improved, cause if not you're much better off doing realtime animations in UE4 or using Cycles.

## Valve BSP Importer
Work-In-Progress Blender addon to one-click import Source Engine BSP map files including all of their models & textures.

<figure style="margin-left:0px; margin-right:0px">
    <a href="/content/Blender/BSP/citadel.png"><img src="/content/Blender/BSP/citadel.jpg"></a>
	<figcaption>Half Life 2 Red Letter Day Render</figcaption>
</figure>

<div class="media_grid">
	<figure>
		<a href="/content/Blender/BSP/BSP_untextured.png"><img src="/content/Blender/BSP/BSP_untextured.jpg"></a>
		<figcaption>Half Life 2 Train Station Level</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/BSP/storage_room.png"><img src="/content/Blender/BSP/storage_room.jpg"></a>
	</figure>
	<figure>
		<a href="/content/Blender/BSP/station_interior_untextured.png"><img src="/content/Blender/BSP/station_interior_untextured.jpg"></a>
	</figure>
	<figure>
		<a href="/content/Blender/BSP/station.png"><img src="/content/Blender/BSP/station.jpg"></a>
	</figure>
</div>

## X-Plane OBJ Importer
Work-In-Progress importer for [X-Plane](https://store.steampowered.com/app/2014780/XPlane_12/) 11 & 12's OBJ model file format, including the skeleton & materials.
Animations are in progress, but X-Plane's animation system is very matrix based and difficult to translate to a more artist friendly Blender setup. 

<figure style="margin-left:0px; margin-right:0px">
	<a href="/content/Blender/X-Plane/F-14D.png"><img src="/content/Blender/X-Plane/F-14D.jpg"></a>
	<figcaption>F-14D</figcaption>
</figure>
<div class="media_grid">
	<figure>
		<a href="/content/Blender/X-Plane/Cirrus SF-50.png"><img src="/content/Blender/X-Plane/Cirrus SF-50.jpg"></a>
		<figcaption>Cirrus SF-50</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/X-Plane/F-14D front.png"><img src="/content/Blender/X-Plane/F-14D front.jpg"></a>
		<figcaption>F-14D</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/X-Plane/S-76.png"><img src="/content/Blender/X-Plane/S-76.jpg"></a>
		<figcaption>Sikorsky S-76</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/X-Plane/C172.png"><img src="/content/Blender/X-Plane/C172.jpg"></a>
		<figcaption>Cessna 172</figcaption>
	</figure>
</div>

## DCS EDM Importer
Work-In-Progress importer for Eagle Dynamics' [Digital Combat Simulator](https://store.steampowered.com/app/223750/DCS_World_Steam_Edition/) EDM model file format.

<figure style="margin-left:0px; margin-right:0px">
	<a href="/content/Blender/EDM/aim9.png"><img src="/content/Blender/EDM/aim9.png"></a>
	<figcaption>AIM-9</figcaption>
</figure>

<div class="media_grid">
	<figure>
		<a href="/content/Blender/EDM/zu23.png"><img src="/content/Blender/EDM/zu23.png"></a>
		<figcaption>Russian Zu-23-2 AAA</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/EDM/M230.png"><img src="/content/Blender/EDM/M230.jpg"></a>
		<figcaption>AH-64 M230 Chaingun</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/EDM/9a310m1_ao.png"><img src="/content/Blender/EDM/9a310m1_ao.jpg"></a>
		<figcaption>BUK AA (Empty Missile Rack)</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/EDM/buk.png"><img src="/content/Blender/EDM/buk.jpg"></a>
	</figure>
</div>

## [Mjolnir - Halo Reach Map Editor](https://github.com/Waffle1434/Mjolnir-Forge-Editor)
*Halo Reach calls its map editor "Forge" (like a blacksmith), Mjolnir is the hammer of the gods.*

For 2010, Halo Reach had a very user friendly ingame editor. However, it was designed for gamepads and doesn't stand up to modern 3D tools.
For example, editing multiple objects at the same time is impossible.

Mjolnir reads and writes Halo's RAM to do more advanced edits to map variants which would otherwise be very tedious or even impossible ingame.
These edits are fully compatible with the game's save files, so maps made on PC are playable by console players.
Perhaps the largest unforseen challenege was making the tool easy to use for first-time Blender users (many of my users).

<div class="media_grid">
	<figure>
		<a href="/content/Blender/Mjolnir/import-export.gif"><img src="/content/Blender/Mjolnir/import-export.gif" style="aspect-ratio:806/619; object-position: 50% 100%"></a>
		<figcaption>Import/Export while Halo Reach is running</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/forge_props.jpg"><img src="/content/Blender/Mjolnir/forge_props_small.jpg"></a>
		<figcaption>In-game object properties available in Blender</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/rotate.gif"><img src="/content/Blender/Mjolnir/rotate_small.gif"></a>
		<figcaption>Edit multiple objects in Blender</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/rotate_ingame.png"><img src="/content/Blender/Mjolnir/rotate_ingame.jpg"></a>
		<figcaption>Export to ingame</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/curves_blender.png"><img src="/content/Blender/Mjolnir/curves_blender.jpg"></a>
		<figcaption>Use curves in Blender</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/curves_ingame.png"><img src="/content/Blender/Mjolnir/curves_ingame.jpg"></a>
		<figcaption>Exported to individual objects ingame</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/add_palette.jpg"><img src="/content/Blender/Mjolnir/add_palette_small.jpg"></a>
		<figcaption>In-game object palette available in Blender</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/array.gif"><img src="/content/Blender/Mjolnir/array_small.gif"></a>
		<figcaption>Array operator to help new users setup Blender's array modifier</figcaption>
	</figure>
</div>