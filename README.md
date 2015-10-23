# build-slides-onthefly
A handy PHP script for taking a folder of images and making a quick and dirty JS slideshow.

There are two parts. 

The first is the jquery on the main HTML page. That passes two variables to the php script, folder and title. The PHP then looks in the folder for another folder that matches the title sent. When it finds it, it takes every image in the folder and makes a slideshow. To make things easy I just give each thumbnail a class name that matches the folder to look for.
