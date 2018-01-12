var flag = false;
inputid.onfocus = function () {
	boxid.style.boxShadow = "0 3px 6px 0 rgba(0, 0, 0, 0.16)";
	flag = true;
};
inputid.onblur = function () {
	boxid.style.boxShadow = "0 1px 1px 0 rgba(0, 0, 0, 0.16)";
	flag = false;
};
boxid.onmouseover = function () {
	boxid.style.boxShadow = "0 3px 6px 0 rgba(0, 0, 0, 0.16)";
};
boxid.onmouseout = function () {
	if (!flag) boxid.style.boxShadow = "0 1px 1px 0 rgba(0, 0, 0, 0.16)";
};