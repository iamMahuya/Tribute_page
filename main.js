$(function() {
    $('img').addClass('img-responsive');
    setInterval(function(){
        $('div.msg').css({color: 'skyblue'});
        $('h1.nm').css({color: 'black'});
    },1000);
    setInterval(function(){
        $('div.msg').css({color: 'black'});
        $('h1.nm').css({color: 'skyblue'});
    },2000);
    
});