function initSiteMap(){
    $('#siteMapToggle').on('click', function(e){
        e.preventDefault();
        $('#siteMap').toggleClass('active');
    });
}

function initSearch(){
    $('#searchToggle').on('click', function(e){
        e.preventDefault();
        $('#search').toggleClass('active');
        if($('#search').is('.active')){
            $('#searchInput').focus();  
        } 
    });
}

function carrousel(){
    $('#slider').slick({
       autoplay: true,
       autoplaySpeed: 8000,
       arrows:false
    });
}

$(function(){
    initSiteMap();
    initSearch();
    carrousel();
})