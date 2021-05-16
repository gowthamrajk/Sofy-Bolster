function getzone(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('zone')
}
function getuser(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('un')
}
var zonevalue=getzone();
var Coimbatore_South=['XYZ','Mettupalayam']
var Coimbatore_North=['XYZ','Coimbatore']
var Chennai=['XYZ','Chennai']
var Madurai=['XYZ','Madurai']
var zone=[Coimbatore_South,Coimbatore_North,Chennai,Madurai]
var zoneList=['Coimbatore_South','Coimbatore_North','Chennai','Madurai']
const zoneDisplay=()=>{
        for(var i=0;i<zoneList.length;i++){
            if(zoneList[i]==zonevalue){
                displayAvailable(zone[i])
            }
        }
}

const displayAvailable=(zones)=>{
    const displaybox=document.querySelector(".available")
    document.getElementById('available').focus()
    displaybox.style.display="block"
    var temp='';
    for(var i=0;i<zones.length;i++){
	var test='<b>'+zones[i]+'</b>'+'<button onclick="viewDetails('+"'"+zones[i]+"'"+')">View Details</button><br>';
    temp=temp+test;
    }
    displaybox.innerHTML = temp;
}
const viewDetails = (deviceName) =>{
    //alert('dashboard.html?dn="'+deviceName+'"&un="'+getuser()+'"')
   window.location='loadingDashboard.html?dn='+deviceName+'&un='+getuser()
}
document.querySelector('#available').textContent=zonevalue
document.querySelector('#username').textContent=getuser()
zoneDisplay()
//alert(zone)