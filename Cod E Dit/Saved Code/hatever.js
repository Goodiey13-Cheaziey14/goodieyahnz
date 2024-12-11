function fileclick() {
	document.getElementById("file-div").style.display = "inline";
};
function framenameok() {
	document.getElementById("iframe").src= document.getElementById("framename").innerHTML;
	document.getElementById("iframe").style.display = "inline";
	document.getElementById("opeo-div").style.color = "black";
	document.getElementById("framename").style.display = "none";
	document.getElementById("framenameok").style.display = "none";
	document.getElementById("opeo-div").style.color = "black";
};
function preclick() {
  window.open("./");
};
function helpclick() {
  window.open("Cod E Dit Help and How To");
};
function prefclick() {
	document.getElementById("framename").style.display = "inline";
	document.getElementById("framenameok").style.display = "inline";
};
function cpreclick() {
	document.getElementById("iframe").style.display = "none";
	document.getElementById("opeo-div").style.color = "grey";
};
function prevclick() {
	document.getElementById("preview-div").style.display = "inline";
};
function fileclick0() {
	document.getElementById("file-div").style.display = "none";
};
function prevclick0() {
	document.getElementById("preview-div").style.display = "none";
};
function opeclick() {
  window.open("./");
};
function newclick() {
 window.open("./COD E DIT.hta");
 alert("New COD E DIT File opened");
};
function cloclick() {
 window.close("./COD E DIT.hta");
};
function settingsclick() {
	document.getElementById("settings-div").style.display = "inline";
};
function settingsclick0() {
	document.getElementById("settings-div").style.display = "none";
};
function styclick() {
	document.getElementById("htm").style.display = "none";
	document.getElementById("css").style.display = "inline";
	document.getElementById("js").style.display = "none";
	document.getElementById("htmlcodechecker").style.backgroundColor = "white";
	document.getElementById("stycodechecker").style.backgroundColor = "blue";
};
function scrclick() {
	document.getElementById("htm").style.display = "none";
	document.getElementById("css").style.display = "none";
	document.getElementById("js").style.display = "inline";
	document.getElementById("htmlcodechecker").style.backgroundColor = "white";
	document.getElementById("stycodechecker").style.backgroundColor = "white";
	document.getElementById("scrcodechecker").style.backgroundColor = "blue";
};
function htmclick() {
	document.getElementById("htm").style.display = "inline";
	document.getElementById("css").style.display = "none";
	document.getElementById("js").style.display = "none";
	document.getElementById("htmlcodechecker").style.backgroundColor = "blue";
	document.getElementById("stycodechecker").style.backgroundColor = "white";
	document.getElementById("scrcodechecker").style.backgroundColor = "white";
};
         function savclick() {
			document.getElementById("opendiv").style.display = "inline";
			document.getElementById("openfile").value = "./My app.hta";
}
	function saveclick() {
	document.getElementById("open1div").style.display = "inline";
	document.getElementById("openfile1").value = "./index.html/hta";
	};
	function savcclick() {
	document.getElementById("open2div").style.display = "inline";
	document.getElementById("openfile2").value = "./style.css";
	};
	function savjclick() {
	document.getElementById("open3div").style.display = "inline";
	document.getElementById("openfile3").value = "./script.js";
	};
	
         function openok() {
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var file = fso.OpenTextFile(document.getElementById("openfile").value, 2, true);  // 2 = write mode, true = create if not exist
            var content = document.body.innerHTML;
            file.WriteLine(content);
            file.Close();
            alert("File saved successfully!");
        }
         function open3ok() {
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var file = fso.OpenTextFile(document.getElementById("openfile1").value, 2,  true);  // 2 = write mode, true = create if not exist
            var content = document.getElementById("htm").innerText;
            file.WriteLine(content);
            file.Close();
            alert("File saved successfully!");
        }
		  function open2ok() {
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var file = fso.OpenTextFile(document.getElementById("openfile2").value, 2, true);  // 2 = write mode, true = create if not exist
            var content = document.getElementById("css").innerText;
            file.WriteLine(content);
            file.Close();
            alert("File saved successfully!");
        }
		  function open1ok() {
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var file = fso.OpenTextFile(document.getElementById("openfile3").value, 2, true);  // 2 = write mode, true = create if not exist
            var content = document.getElementById("js").innerText;
            file.WriteLine(content);
            file.Close();
            alert("File saved successfully!");
        }
		function closeopen() {
	document.getElementById("open3div").style.display = "none";
	document.getElementById("open2div").style.display = "none";
	document.getElementById("open1div").style.display = "none";
	document.getElementById("opendiv").style.display = "none";	
		};
	         function savaclick() {
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var file = fso.OpenTextFile("./Combined.html", 2, true);  // 2 = write mode, true = create if not exist
            var content = document.getElementById("full").innerHTML;
            file.WriteLine(content);
            file.Close();
            alert("File saved successfully!");
        }