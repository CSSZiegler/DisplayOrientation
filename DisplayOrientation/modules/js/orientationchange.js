/******************************************************************
*	Name    : onOrientationChange
*	Author  : Kony
*	Purpose : To change the text on changing Orientation of device
*******************************************************************/

function onOrientationChange()
{
	if(kony.os.getDeviceCurrentOrientation()==constants.DEVICE_ORIENTATION_PORTRAIT)
            frmComplex.lblComplex.text = "Please rotate the device to observe Landscape mode";
    else if(kony.os.getDeviceCurrentOrientation()==constants.DEVICE_ORIENTATION_LANDSCAPE)
            frmComplex.lblComplex.text = "Please rotate the device to observe Portrait mode";
    else
    		alert("Cannot determine the orientation!")
}