var url_string = document.URL;
const params = new URL(url_string).searchParams;
const c = params.get('book'); // "1"
var name = params.get('name'); // "bima"

switch (name) {
    case 'aku':
         LP = "https://forsharedpdf.site/"
        break;
    case 'ipik':
         LP = "https://kindleebs.xyz/"
        break;
    case 'eka':
         LP = "https://read.forsharedpdf.site/"
        break;
    case 'cv':
        var LP = "https://cv.kindledeals.club/"
        break;
    case 'bima':
         LP = "https://kindledeals.club/"
        break;
    case 'anas':
         LP = "https://best.kindledeals.club/"
        break;
        default:
         LP = "https://ebookbiz.info/"
   
}


if(c!=null){

setTimeout('Redirect()', 1000)
           }else{
    window.setTimeout(function(){

        
       document.getElementById('redir').href=LP;

    }, 500);
           }

function Redirect() 
{ 
window.location.replace(LP+'?book='+c);
}
