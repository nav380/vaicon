var headers = ["H1","H2","H3","H4","H5","H6","IMG"];
var j = jQuery.noConflict();
j(".accordion").click(function(e) {
							   
							   
  var target = e.target,
      name = target.nodeName.toUpperCase();
  
  if(j.inArray(name,headers) > -1) {
    var subItem = j(target).next();
    
    //slideUp all elements (except target) at current depth or greater
    var depth = j(subItem).parents().length;
    var allAtDepth = j(".accordion p, .accordion div").filter(function() {
      if(j(this).parents().length >= depth && this !== subItem.get(0)) {
        return true; 
      }
    });
    j(allAtDepth).slideUp(500);
    
    //slideToggle target content and adjust bottom border if necessary
    subItem.slideToggle(500,function() {
        j(".accordion :visible:last").css("border-radius","0 0 10px 10px");
    });
    j(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
  }
});