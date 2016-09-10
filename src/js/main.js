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


$(function(){
    initSiteMap();
    initSearch();
})