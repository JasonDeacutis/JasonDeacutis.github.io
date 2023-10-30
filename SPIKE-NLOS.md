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

# [Inter-Coastal Electronics](https://www.faac.com/inter-coastal/) - SPIKE NLOS Simulator
Prototype Embedded Simulator for Rafael's <a href="https://www.youtube.com/watch?v=r8xAqqZ_Z08" target="_blank">SPIKE NLOS</a> Missile using Unity Engine.

SPIKE Non-Line-Of-Sight is a ground or helicopter based long range anti-tank missile.
The video feed allows it to engage targets *much* further than previous missiles.
The non-line-of-sight nature also allows it to engage targets while the operator remains well hidden.

The goal is to train air crews on SPIKE without the hastle of live fire.
SPIKE's analog video feed is replaced with realtime rendered video from a fully simulated missile.
Our hardware is minatureized & ruggedized enough to be placed on the aircraft (AH-64, Blackhawk, etc) &
connected to the aircraft's data bus. The actual cockpit display & controls are used as if a live missile is being fired.

<div class="media_grid">
    <figure>
        <img src="content/SPIKE/Full Flight/1. prelaunch.gif">
        <figcaption class="media_caption">Prelaunch on an Apache<br>The dashed box indicates unable to fire</figcaption>
    </figure>
    <figure>
        <img src="content/SPIKE/Full Flight/2. launch.gif">
        <figcaption class="media_caption">Missile Launch. Small box indicates the current target destination, dots indicate ground track.</figcaption>
    </figure>
    <figure>
        <img src="content/SPIKE/Full Flight/3. spike midflight.gif">
        <figcaption class="media_caption">Operator can slew & zoom the camera while the autopilot flies.</figcaption>
    </figure>
    <figure>
        <img src="content/SPIKE/Full Flight/4. manual warning.gif">
        <figcaption class="media_caption">Flashing indicates manual control is about to be entered.</figcaption>
    </figure>
    <figure>
        <img src="content/SPIKE/Full Flight/5. terminal.gif">
        <figcaption class="media_caption">Manual control mode, hitting a T-72 tank</figcaption>
    </figure>
    <figure>
        <img src="content/SPIKE/old hud.gif" style="display:block; margin:auto">
        <figcaption class="media_caption">Old OSD</figcaption>
    </figure>
    <figure>
        <img src="content/SPIKE/SPIKE old font.png" style="width:466px; height:58px; image-rendering:pixelated; display:block; margin:auto; background-color:#808080">
        <figcaption class="media_caption">Old font reconstructed from videos</figcaption>
    </figure>
</div>

A huge challenge was getting the graphics realistically low quality, as the real video feed is low resolution & can be heavily distorted.
Unrealistically clear video would be bad training, as half the difficulty is identifying the target.
Unity was instrumental in running on an embedded device with less GPU power than some smartphones.
Also it was difficult to match the real OSD (On Screen Display) because *they kept changing it!!* 