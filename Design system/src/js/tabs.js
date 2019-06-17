
function tabsHander() {
    console.log('la fonction tabHandler est lancée');
    var  component = $('tabs'),
        componentNav = component.find('.tabs-nav'),
         componentNavItems = componentNav.find('li'),
         componentContents = component.find('tabs-content');

    componentNavItems.on('click', function() {
        var targetID = $(this).data('id');

        console.log('je clique sur ' + targetID);

        if ($('#' + targetID).hasclass('tab-content--inactive') ){
            console.log('mon elements est masqué');
       
        //gestion de l'affichage du contenu 
        componentContents.addClass('tabs-content--inactive');
        $('#' + targetID).removeClass('tab-content--inactive');

        //Gestion de l'affichage du menu 
        componentNavItems.removeClass('tabs-nav-item--active');
        $(this).addClass('tab-nav-item-active');
        
        }else{
            console.log('mon elements est visible');
        }

    });

};

$(document).ready(function(){
    var tabsComponent = $('.tabs');
    console.log('le dom est pret');

    if( tabsComponent.length > 0 ){
        console.log("Mon composent tabs est bien présent");
        tabHander();
    }else{
        console.log('mon tab nest pas chargé');
    }
});
