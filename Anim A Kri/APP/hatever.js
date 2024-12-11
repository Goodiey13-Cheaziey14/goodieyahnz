function fileclick() {
	document.getElementById("file-div").style.display = "inline";
};
function fileclick0() {
	document.getElementById("file-div").style.display = "none";
};
function helclick() {
	window.open("Anim A Kri Help and How To.htm");
};

function newclick() {
	window.open("./Animakri.html");
	alert("New Anim A Frame file opened");
};
function cloclick() {
	window.close("./ANIM A FRAME.html");
};

function opeclick() {
	window.open("./");
 };
         function openok() {
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var file = fso.OpenTextFile(document.getElementById("urlplace").value, 2, true);  // 2 = write mode, true = create if not exist
            var content = document.body.innerHTML;
            file.WriteLine(content);
            file.Close();
            alert("File saved successfully!");
        }
		function fileclick() {
	document.getElementById("file-div").style.display = "inline";
};
function saveTo() {
	document.getElementById("opendiv").style.display = "inline";
};
function closeopen() {
	document.getElementById("opendiv").style.display = "none";
};
function saveTono() {
	document.getElementById("opendiv2").style.display = "inline";
};
function closeopen2() {
	document.getElementById("opendiv2").style.display = "none";
};
         function openok2() {
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var file = fso.OpenTextFile(document.getElementById("urlplace2").value, 2, true);  // 2 = write mode, true = create if not exist
            var content = document.getElementById("workspace").innerHTML;
            file.WriteLine(content);
            file.Close();
            alert("File saved successfully!");
        }
		function aniclick() {
	document.getElementById("ani-div").style.display = "inline";
};
function animclick0() {
	document.getElementById("ani-div").style.display = "none";
};
	function animclick() {
	document.getElementById("animation-div").style.display = "inline";
document.getElementById("media").style.display = "inline";
	alert("YOU MIGHT WANT TO MAKE THIS 1150px x 500px ");

};
	function gettingurlimg() {
	document.getElementById("input").innerHTML = document.getElementById("imagefile").value;
};
		function animlclick() {
	document.getElementById("animation-div").style.display = "none";
document.getElementById("media").style.display = "none";
		};
		function play() {
			document.getElementById("animating-style").innerHTML = document.getElementById("animationcode").innerHTML;
			document.getElementById("myanimation").style.animationIterationCount = "70000000";
		};
		function stop() {
			document.getElementById("myanimation").style.animationIterationCount = "1";	
		};






