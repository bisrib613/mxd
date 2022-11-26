var googleAPI = "https://www.googleapis.com/books/v1/volumes?q=isbn:1668001225";

$.getJSON(googleAPI, function (response) {
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        var image = item.volumeInfo.imageLinks.thumbnail
        var image = image.replace(/edge=curl/g, 'fife=w400-h600')
        var title = item.volumeInfo.title
        var author = item.volumeInfo.authors
        var publisher = item.volumeInfo.publisher
        var deskripsi = item.volumeInfo.description
        var pubdate = item.volumeInfo.publisher
        var detil = `<p>Title : ${title}</p><p>Author : ${author}</p><p>Publisher : ${publisher}</p><p>Release Date : ${pubdate}</p>`;
        var tem = `<div style="text-align: center; font-size: 13.3333px;"><em>PDF, EPub, Mobi, Kindle online. Free book ${title} by ${author}.</em></div>
<p>&nbsp;</p>
<div style="text-align: center; font-size: 13.3333px;"><em>.</em><img style="background-color: transparent; text-align: left; font-size: 14px;" src="${image}" alt="${title}" width="300" height="400" border="0" /></div>
<p>&nbsp;</p>
<p>Get book ${title} by ${author} . Full supports all version of your device, includes PDF, ePub and Kindle version. All books format are mobile-friendly. Read and download online as many books as you like for personal use.</p>
<p>&nbsp;</p>
<h2>Book Details :</h2>
<div style="font-size: 13.3333px;">${detil}</div>
<div><strong>Formats:</strong>&nbsp;PDF, EPub, Kindle, Audiobook</div>
<div>&nbsp;</div>
<div>
<div>&nbsp;</div>
<center><a href="#U#" target="_blank" rel="noopener"><img src="https://farm6.staticflickr.com/5689/23786904455_64ffe9cff5.jpg" /></a></center></div>
<h2>Book Synopsis :</h2>
<div style="font-size: 13.3333px;">${deskripsi}</div>`
        // in production code, item.text should have the HTML entities escaped.
       // document.getElementById("content").innerHTML += '<br>' + item.volumeInfo.title +        ' By : ' + item.volumeInfo.authors + '<br><img src="' +image  + '" alt="EBOOK #T#" />';
       document.getElementById("relatedImage").innerHTML += tem
      }
});
