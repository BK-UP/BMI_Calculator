import {BMI} from './BMI.js'; 
$(document).ready(()=>{
    const BMICal = new BMI(0,0,true);
    $(".imperialBtn").on("click", ()=>{
        if(BMICal.isMetric){
            let weight = Math.round(parseFloat($("#WeightInput").val())*2.205*100)/100;
            let height = Math.round(parseFloat($("#HeightInput").val())/2.54*100)/100;
            $("#WeightInput").val(weight);
            $("#HeightInput").val(height);
        }
        BMICal.setIsMetric(false);
        setplaceHolder(BMICal.isMetric);
        $(".imperialBtn").addClass("active");
        $(".metricBtn").removeClass("active");
    });
    $(".metricBtn").on("click", ()=>{
        if(BMICal.isMetric==false){
            let weight = Math.round(parseFloat($("#WeightInput").val())/2.205*100)/100;
            let height = Math.round(parseFloat($("#HeightInput").val())*2.54*100)/100;
            $("#WeightInput").val(weight);
            $("#HeightInput").val(height);
        }
        BMICal.setIsMetric(true);
        setplaceHolder(BMICal.isMetric);
        $(".imperialBtn").removeClass("active");
        $(".metricBtn").addClass("active");
    });
    $(".genBttn").on("click",()=>{
        $('.s1').removeClass("activeSlide");
        $('.s2').addClass("activeSlide");
        $('.B1').addClass("fadeOutL");
        $('.B1').removeClass("fadeIn");
        $('.B2').addClass("fadeIn");
        setTimeout(()=>{$('.B1').css('zIndex', '1'); $('.B2').css('zIndex', '2');},800);
        BMICal.setHeight($("#HeightInput").val());
        BMICal.setWeight($("#WeightInput").val());
        if(BMICal.isMetric){
            let amount = (BMICal.calcualteBMIForMetric());
            console.log(amount);
            let calDeg = (amount/40)*180 - 90;
            $(".arm").css("rotate", `${calDeg}deg`);
            $("#BMIamount").html(amount);
            populate(amount);
        }
        else{
            let amount = (BMICal.calcualteBMIUS());
            console.log(amount);
            let calDeg = (amount/40)*180 - 90;
            $(".arm").css("rotate", `${calDeg}deg`);
            $("#BMIamount").html(amount);
            populate(amount);

        }

    });
    $(".leftS").on('click',()=>{
        $('.s1').removeClass("activeSlide");
        $('.s2').addClass("activeSlide");
        $('.B1').addClass("fadeOutL");
        $('.B1').removeClass("fadeIn");
        $('.B2').addClass("fadeIn");
        setTimeout(()=>{$('.B1').css('zIndex', '1'); $('.B2').css('zIndex', '2');},800);
    });
    $(".rightS").on('click',()=>{
        $('.s1').addClass("activeSlide");
        $('.s2').removeClass("activeSlide");
        $('.B2').addClass("fadeOutR");
        $('.B2').removeClass("fadeIn");
        $('.B1').addClass("fadeIn");
        setTimeout(()=>{$('.B1').css('zIndex', '2'); $('.B2').css('zIndex', '1');},800);
    });
});

let setplaceHolder = (isMet)=>{
    if(isMet){
        $("#WeightInput").attr('placeholder', 'kg');
        $("#HeightInput").attr('placeholder', 'cm');
    }else{
        $("#WeightInput").attr('placeholder', 'lbs');
        $("#HeightInput").attr('placeholder', 'inch');
    }
}

let populate = (amount)=>{
    let stat = 1;
    if(amount<18.5)
        stat=0;
    else if(amount>=18.5&&amount<25)
        stat=1;
    else
        stat=2;
    $.getJSON("./info.json",(data)=>{
            let obj = data.data[stat];
            $(".stat").html(obj.status);
            $(".descrip").html(obj.advice);

    });
}