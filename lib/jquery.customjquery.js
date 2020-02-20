;(function($, undefined){


 





function addCss(){
	this.each(function(){
        let element = $(this);
        element.css('color', 'red') ;

      return ;
    });

}


$.fn.customjquery = function(){

	addCss.apply(this, [arguments]);
 
}


 
})(jQuery);