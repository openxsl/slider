define([],function(){
  return {
    init:function($mod){
    	var $div=$mod.children('[data-on]');
    	var curIndex=($div.attr('data-on')||1)-1;
    	var count=$div.attr('data-count')-0;
    	setInterval(function(){
    		curIndex++;
    		curIndex=curIndex%count;
    		$div.attr('data-on',curIndex+1)
    	},3000)

    }
  }
})
