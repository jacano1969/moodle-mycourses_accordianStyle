function doMenu(item) {
	
	 
	 obj=document.getElementById(item);
	 col=document.getElementById("x" + item);
	 
	 if (obj.style.display=="none") {
	  obj.style.display="block";
	  col.innerHTML="<img src='../course/arw_on.gif'>";

	 }
	 else {
	  obj.style.display="none";
	  col.innerHTML="<img src='../course/arw_off.gif'>";
	 }
	}





