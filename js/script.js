var flag = false;
document.getElementById("inputid").onfocus = function () {
	document.getElementById("searchboxid").style.boxShadow = "0 3px 6px 0 rgba(0, 0, 0, 0.16)";
	flag = true;
};
document.getElementById("inputid").onblur = function () {
	document.getElementById("searchboxid").style.boxShadow = "0 1px 1px 0 rgba(0, 0, 0, 0.16)";
	flag = false;
};
document.getElementById("searchboxid").onmouseover = function () {
	document.getElementById("searchboxid").style.boxShadow = "0 3px 6px 0 rgba(0, 0, 0, 0.16)";
};
document.getElementById("searchboxid").onmouseout = function () {
	if (!flag) document.getElementById("searchboxid").style.boxShadow = "0 1px 1px 0 rgba(0, 0, 0, 0.16)";
};
document.getElementById("voiceid").onmouseover = function () {
	document.getElementById("tooltipid").style.visibility = "visible";
}
document.getElementById("voiceid").onmouseout = function () {
	document.getElementById("tooltipid").style.visibility = "hidden";
}