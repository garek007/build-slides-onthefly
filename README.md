# build-slides-onthefly
A handy PHP script for taking a folder of images and making a quick and dirty JS slideshow.

There are two parts. 

The first is the jquery on the main HTML page. That passes two variables to the php script, folder and title. The PHP then looks in the folder for another folder that matches the title sent. When it finds it, it takes every image in the folder and makes a slideshow. To make things easy I just give each thumbnail a class name that matches the folder to look for.

Also, for my needs each folder contains three more folders, lg, md, and sm (large, medium and small). There are PHP scripts which can size an image on the fly, but I wanted specific sizing and compression. I'm a bit OCD about this stuff, so I ran Dr. Brown's Image Processor in photoshop and presized the images first. The performance gain may only be slight, but that's OK. The JS looks at the window size and selects a folder based on the size of the window. If you don't like this setup and you just want one size of images, you'll need to adjust the JS accordingly. 
