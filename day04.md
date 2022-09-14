# Day 04

## Drawing Machines

### Paint 2.0
My first thought concerning machine-influenced drawing was the creation of a tool which hinders or completely disregards the intentions of it's user.
This first version lets the user draw with the mouse, but just randomly places dots every time he does it:

{% raw %}
<iframe src="content/day04/01/embed.html" width="100%" height="450px" frameborder="no"></iframe>
{% endraw %}

The input is recognized through the "mouseDragged()" function, which runs whenever the mouse is clicked and dragged across the canvas. This allows me to really only create new scribbles when the mouse is actually moved, creating a better immersion for the user who seems to be partially responsible for the chaos that is happening.

### Upgrading the Tool

![Screenshot Drawing Tool](content/day04/Screenshot_1.png)

The screenshot already shows an upgraded background and a feature to give your drawing a title.

I then added multiple different drawing tools and colors to choose from, as well as a feature to download the edited canvas:

{% raw %}
<iframe src="content/day04/03/embed.html" width="100%" height="450px" frameborder="no"></iframe>
{% endraw %}

Here, the pen has been improved to create connecting lines and always start from the point where the user has clicked.

The "airbrush" tool creates paint splatters in the form of different sized randomly placed circles.

For the last tool, I reused the behaviour of the first pen version mentioned above and also connected all the dots with lines of varying line weights. It is a more unpredictable version of the normal pen tool.