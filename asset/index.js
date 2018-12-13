define([],function(){
  return {
    init:function($mod){
    	this.initSlider($mod)

    },
    initSlider:function($mod){
        var $div=$mod.children('[data-on]'),
        $sliderWindow=$div.children('.slider-window');
        var curIndex=($div.attr('data-on')||1)-1;
        var count=$div.attr('data-count')-0;

        if(count < 2){
            return
        }
        
        var sliders=$('.slider-img',$div),
        dot1=$('.dot-1',$div);
        sliders.parent().append(sliders.eq(0).clone())
        count+=1;
        dot1.addClass('dot-'+count)

        setInterval(function(){
            if(!curIndex){
                $sliderWindow.addClass('transition')
            }
            curIndex++;
            curIndex=curIndex%count;
            
            $div.attr('data-on',curIndex+1)

            setTimeout(function(){
                if(curIndex+1 == count){
                    curIndex=0;
                    $sliderWindow.removeClass('transition')
                    $div.attr('data-on',1)
                    

                }
            },350)
            
        },3000)

    }
  }
})
