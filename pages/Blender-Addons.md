<head>
    <link rel="stylesheet" href="subject.css">
    <style>
    img {
        border-radius: 8px;
    }
	</style>
</head>

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
		<a href="/content/Blender/Mjolnir/rotate.gif"><img src="/content/Blender/Mjolnir/rotate.gif"></a>
		<figcaption>Edit multiple objects in Blender</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/rotate_ingame.png"><img src="/content/Blender/Mjolnir/rotate_ingame.jpg"></a>
		<figcaption>Export to ingame</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/curves_blender.png"><img src="/content/Blender/Mjolnir/curves_blender.png"></a>
		<figcaption>Use curves in Blender</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/curves_ingame.png"><img src="/content/Blender/Mjolnir/curves_ingame.png"></a>
		<figcaption>Exported to individual objects ingame</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/add_palette.jpg"><img src="/content/Blender/Mjolnir/add_palette_small.jpg"></a>
		<figcaption>In-game object palette available in Blender</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/Mjolnir/array.gif"><img src="/content/Blender/Mjolnir/array.gif"></a>
		<figcaption>Array operator to help new users setup Blender's array modifier</figcaption>
	</figure>
</div>

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
<center>
    <figure>
        <a href="/content/Blender/UAsset/import.gif"><img src="/content/Blender/UAsset/import.gif"></a>
        <figcaption>Import process example</figcaption>
    </figure>
</center>

Ironically, what I wasn't expecting was to learn *just how far behind* Blender's Eevee render engine is in performance compared to UE4. I hope future versions are improved, cause if not you're much better off doing realtime animations in UE4 or using Cycles.

## Valve BSP Importer
Work-In-Progress Blender addon to one-click import Source Engine BSP map files including all of their models & textures.

<figure style="margin-left:0px; margin-right:0px">
    <a href="/content/Blender/BSP/citadel.png"><img src="/content/Blender/BSP/citadel.jpg"></a>
	<figcaption>Half Life 2 Render</figcaption>
</figure>

<div class="media_grid">
	<figure>
		<a href="/content/Blender/BSP/BSP_untextured.png"><img src="/content/Blender/BSP/BSP_untextured.jpg"></a>
		<figcaption>Half Life 2 Train Station Level</figcaption>
	</figure>
	<figure>
		<a href="/content/Blender/BSP/station_interior_untextured.png"><img src="/content/Blender/BSP/station_interior_untextured.png"></a>
		<figcaption>Half Life 2 Train Station Level</figcaption>
	</figure>
</div>

## X-Plane OBJ Importer

## DCS EDM Importer