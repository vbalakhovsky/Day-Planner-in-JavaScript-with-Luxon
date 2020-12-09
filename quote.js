

datetoday = new Date();

timenow = datetoday.getTime();

datetoday.setTime(timenow);

thehour = datetoday.getHours();

if (thehour >= 18)

$("body").addClass("night");


else if (thehour >= 15)

$("body").addClass("afternoon");


else if (thehour >= 4)

$("body").addClass("morning");



url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

 
$.getJSON(url, function(quote){

    console.log(quote);
  
    $(".dailyQuote").text(" Today's Quote: " + quote.quoteText + " by " + quote.quoteAuthor);
  
   
  
    $(".dailyQuote").append("<code>" + JSON.stringify(data, null, '<br/>') + "</code>");
  
  });

 

