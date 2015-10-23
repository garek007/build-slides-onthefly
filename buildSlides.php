<?php

	$title = htmlentities($_GET['title']);
	$folder = htmlentities($_GET['folder']);

	//$title = trim($title);  // uncomment if you want to remove whitespaces
	
	//$article = preg_replace('/\s+/', '', $title);//ignore this

  /*====================================================
  then go through each folder and see if there is a match, 
  if there is, build slideshow
  ======================================================*/

  if($dirname=opendir($title.'/'.$folder.'/')){
  $pattern="/(\.jpg$)|(\.png$)|(\.jpeg$)|(\.gif$)/i"; //valid image extensions
  $files = array();
	//$files = new StdClass;
	
	
	$size = array();
  $curimage=0;
  while($file = readdir($dirname)) {
	  if(preg_match($pattern, $file)){ //if this file is a valid image
			list($width,$height) = getimagesize($title.'/'.$folder.'/'.$file);  

		  $files[] = [$file, $width, $height];//push array with filename, width and height into array
			//$files->name = $file;
	  }			
  }
  closedir($dirname);
  }
  sort($files);	  

  echo '<div id="projectImageHolder">';
	echo '<div id="close"><i class="fa fa-times fa-3x"></i></div>';//I'm using font awesome here
  echo '<i class="fa fa-chevron-left fa-2x"></i>';
  echo '<i class="fa fa-chevron-right fa-2x"></i>';
	
  //this loop outputs the unordered list
  //and builds the slideshow

  for($b=0;$b<count($files);$b++){
		if($files[$b][1]>$files[$b][2])		{
			$addClass = 'landscape';
		}else{
			$addClass = 'portrait';
		}
		echo '<img id="slide'.$b.'" class="'.$addClass; 
		
		echo ($b==0) ? ' active"' : '"';
			
		echo ' src="'.$title.'/'.$folder.'/'.$files[$b][0].'" />';
		echo "\n";
	
  }
  echo '</div>';//ends projectImageHolder DIV
?>
