$("#gobtn").click(go)
$("#resetbtnforlevel").click(resetforlevel)
$("#level").hide()



function go(){
    let mark = Number($("#txtmark").val());
    if(mark >=80 && mark <=100)
        {
            $("#txtmark").css("background","green");
            $("#level").css("background","green");
            $("#level").html("Level 4");
            $("#level").slideDown();
            
        }
    
    else if(mark>=70 && mark < 80){
         $("#txtmark").css("background","yellow");
            $("#level").css("background","yellow");
            $("#level").html("Level 3");
        $("#level").slideDown();
    }
    
     else if(mark>=60 && mark < 70){
         $("#txtmark").css("background","orange");
            $("#level").css("background","orange");
            $("#level").html("Level 2");
        $("#level").slideDown();
    }
    
     else if(mark>=50 && mark < 60){
         $("#txtmark").css("background","grey");
            $("#level").css("background","grey");
            $("#level").html("Level 1");
        $("#level").slideDown();
    }
    
     else if(mark>=0 && mark < 50){
         $("#txtmark").css("background","red");
            $("#level").css("background","red");
            $("#level").html("Level R");
        $("#level").slideDown();
         
    }
    
    else{
        $("#level").css("background","black");
        $("#level").css("color","white");
        $("#level").html("INVALID MARK");
        $("#level").slideDown();
    }
    
    
    
    
    
    
}

function resetforlevel(){
     $("#txtmark").css("background","white");
    $("#level").slideUp();
    $("#level").html("");
    $("#level").css("background","white");
    $("#txtmark").val("");
    
    
    
    
    
}

//speed ticket=================================================================================================================
$("#setPenalty").click(setPenalty)

let limit=50;
let speed=80;

$("#limitrange").on('input',updateSpeeds)
$("#speedrange").on('input',updateSpeeds)


function updateSpeeds(){
    limit=Number($("#limitrange").val())
    speed=Number($("#speedrange").val())
    $("#speedbox").html(`${speed} km/hr`)
    $("#limitbox").html(`${limit} km/hr`)
    
    
}

function setPenalty(){
    let amountover = speed-limit;
    let points=0;
    let fine=0;
    
    $("#penaltybox").html(`Amount over: ${amountover} <br> `);

    
    if(amountover <= 0){
        $("#penaltybox").append(`Did not pass over the speed limit, no demirit points, No fine`);

    }
    
    else if(amountover >0 && amountover <=15){
        $("#penaltybox").append(`Minor infraction, no demirit points`);
    }

    else if(amountover >=16 && amountover <=29){
        points +=3;
        $("#penaltybox").append(`Minor infraction, 3 demirit points`);
    }

    else if(amountover >=30 && amountover <=49){
        points +=4;
        $("#penaltybox").append(`Major infraction, 4 demirit points`);
    }

    else if(amountover >=50){
        points +=6;
        $("#penaltybox").append(`Major infraction, 6 demirit points +30 day license suspension`);
    }

    //fines

    if(amountover>=1 && amountover <=19 ){
        fine= amountover*2.5;
    }
    else if(amountover>=20 && amountover <=29){
        fine = amountover*3.75;
    }
    else if(amountover>=30 && amountover <=49){
        fine = amountover*6;
    }
    else if(amountover>=50){
        fine = amountover*9.75*1.25;
    }
    
    $("#penaltybox").append(`<br> Fine:$${fine}`);

        
    
}
























