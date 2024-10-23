function isMobile() { /*function detecting movile screen width. source:https://medium.com/geekculture/detecting-mobile-vs-desktop-browsers-in-javascript-ad46e8d23ce5*/
    const minWidth = 768; // Minimum width for desktop devices
    return window.innerWidth < minWidth || screen.width < minWidth;
}

if(isMobile()){ /*sets page to mobile styling if necessary, reports device type */
    document.getElementById('style').setAttribute('href', 'stylemobile.css');
    console.log('mobile mode on')
}
else{
    console.log('mobile mode off');
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) { /*collapsible button script. source:https://www.w3schools.com/howto/howto_js_collapsible.asp */
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } 
            else {
                content.style.display = "block";
            }
    });
}

var tableRows = document.getElementsByTagName('tr'); /* alternates colors of table rows for readability */
for(i = 0; i < tableRows.length; i++){
    if(!tableRows[i].classList.contains("tableHead")){
        if(i % 2 == 0){
            tableRows[i].style.background = "white";
        }
        else{
            tableRows[i].style.background = "lightgray";
        }
    }  
}

var style = document.getElementById('style').getAttribute('href'); /* nightmode function */
var nightMode = false;
function night(){
    if(!isMobile()){
        if(!nightMode){
            document.getElementById('style').setAttribute('href', 'night.css');
            console.log("night mode on");
            nightMode = true;
        }
        else if(nightMode){
            document.getElementById('style').setAttribute('href', 'style.css');
            console.log('night mode off');
            nightMode = false;
        }
    }
    else{
        if(!nightMode){
            document.getElementById('style').setAttribute('href', 'nightmobile.css');
            console.log("night mode on");
            nightMode = true;
        }
        else if(nightMode){
            document.getElementById('style').setAttribute('href', 'stylemobile.css');
            console.log('night mode off');
            nightMode = false;
        }
    }
}