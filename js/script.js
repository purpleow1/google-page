var flag = false;
inputid.onfocus = function () {
	searchboxid.style.boxShadow = "0 3px 6px 0 rgba(0, 0, 0, 0.16)";
	flag = true;
};
inputid.onblur = function () {
	searchboxid.style.boxShadow = "0 1px 1px 0 rgba(0, 0, 0, 0.16)";
	flag = false;
};
searchboxid.onmouseover = function () {
	searchboxid.style.boxShadow = "0 3px 6px 0 rgba(0, 0, 0, 0.16)";
};
searchboxid.onmouseout = function () {
	if (!flag) searchboxid.style.boxShadow = "0 1px 1px 0 rgba(0, 0, 0, 0.16)";
};

voiceid.onmouseover = function () {
	tooltip.style.visibility = "visible";
}
voiceid.onmouseout = function () {
	tooltip.style.visibility = "hidden";
}