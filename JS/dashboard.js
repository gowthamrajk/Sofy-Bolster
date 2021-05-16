function getuser(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('un')
}
function getdevice(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('dn')
}

document.querySelector('#username').textContent=getuser()
const deviceName=getdevice();
const cbesouth=['','','Location','Coimabatore South','Most Sold Pad Name','xyz','Number of times refilled','5','Most Sold Size','x','Total Pads Sold','647','Percentage Of Sales Increased','5%']
const cbenorth=['','','Location','Coimabatore North','Most Sold Pad Name','xyz','Number of times refilled','8','Most Sold Size','x','Total Pads Sold','475','Percentage Of Sales Increased','5%']
const chennai=['','','Location','Chennai','Most Sold Pad Name','xyz','Number of times refilled','3','Most Sold Size','xl','Total Pads Sold','545','Percentage Of Sales Increased','4%']
const madurai=['','','Location','Madurai','Most Sold Pad Name','xyz','Number of times refilled','10','Most Sold Size','x','Total Pads Sold','354','Percentage Of Sales Increased','8%']
const general=['','','Location','Tamilnadu','Most Sold Pad Name','xyz','Number of times refilled','7','Most Sold Size','xl','Total Pads Sold','530','Percentage Of Sales Increased','7%']
var temp="<table>"
const display=document.querySelector(".containner")
document.querySelector("#devicename").textContent=getdevice()+"-";
const print = (device)=>{
    for(var i=0;i<device.length;i=i+2){
        var test="<tr><th>"+device[i]+"</th><th>"+device[i+1]+"</th></tr>"
        temp=temp+test;
    }
    temp=temp+"</table>"
    display.innerHTML=temp;
}
if(deviceName=='Chennai'){
    print(chennai)
}
else if(deviceName=="Madurai"){
    print(madurai)
}
else if(deviceName=="Coimbatore"){
    print(cbesouth)
}
else if(deviceName=="Mettupalayam"){
    print(cbenorth)
}
else{
    print(general)
}