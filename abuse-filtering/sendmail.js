function sendMail() {
         var link = "mailto:aniksharif@gmail.com"
         + "?cc=aniksharif@gmail.com"
         + "&subject=" + escape("This is my subject")
         + "&body=" + escape(document.getElementById('Body').value)
     ;

     window.location.href = link;
 }