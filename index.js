console.log("Working");



var hour = document.getElementById("hour");
var mins = document.getElementById("mins");
var secs = document.getElementById("secs");
var card1= document.getElementById('card1');

var clock = setInterval(
    function time(){
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();
if(hr<10){
    hr  = "0"+hr;
}
if(min<10){
    min="0"+min;
}
if(sec<10){
    sec="0"+sec;
}
if(hour==0){
    hour-=12;
    am_pm=''
}

hour .textContent=hr;
mins.textContent=min;
secs.textContent=sec;
card1.innerText=pm;


    },1000);
 



var word = new Date().getHours();
        if (word >= 0 && word <= 11){
         document.getElementById("word").innerHTML='GOOD MORNING!! WAKE UP!!  '
        }else if (word >= 12 && word <= 17){
            document.getElementById("word").innerHTML='GOOD AFTERNOON !! TAKE SOME SLEEP'
        }else if(word>=18 && word<=23) {
            document.getElementById("word").innerHTML='GOOD EVENING !!'
        }else{
			document.getElementById("word").innerText="GOOD NIGHT !!"
		}

		let text = new Date().getHours();
		if(text>=0 && text<=12){
			document.getElementById('text').innerText="GRAB SOME HEALTHY BREAKFAST!!!"
		}else if(text>=13 && text<=23){
document.getElementById("text").innerText="LET'S HAVE SOME LUNCH !!"
		}
		else{
			document.getElementById('text').innerText="CLOSE YOUR EYES AND GO TO SLEEP"
		};

		/*let text1 = new Date().getHours();
		if(text1>=0 && text1<=12){
			document.getElementById('image1').src='GM.jpg.svg'
		}else if(text1>=12 && text<=17){
document.getElementById("image1").src='GA.jpg'
		}else{
			document.getElementById('image1').src="gN.jpg"
		}
*/
        let  image = new Date().getHours();
        if(image>=00 && image<=12){
            document.getElementById('image1').src="GM.jpg.svg";
        }else if(image=>13 && image<=23) {
            document.getElementById('image1').src="lun.jpg";
        }
        else{
            document.getElementById('image1').src="gN.jpg";
        };
        

       function data() {  
            var S = document.getElementById("name");  
            document.getElementById("wrap2").value = S.options[S.selectedIndex].text;  
            }  ;







		 
		