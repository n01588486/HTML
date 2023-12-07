function JobVali(){
    var first =document.getElementById("fname").value;
    var last =document.getElementById("lname").value;
    var emale =document.getElementById("emails").value;
    var app =document.getElementById("apply").value;
    var file =document.getElementById("myfile").value;
    var isValid=true;
        if(first==""){
            document.getElementById("firstResult").innerHTML="First Name is required";
            isValid=false;
        }
        if(last==""){
            document.getElementById("lastResult").innerHTML="Last Name is required";
            isValid=false;
        }
        if(emale==""){
            document.getElementById("eMailResult").innerHTML="E-mail is required";
            isValid=false;
        }
        if(app==""){
            document.getElementById("applyResult").innerHTML="Restaurant is required";
            isValid=false;
        }
        if(file==""){
            document.getElementById("fileResult").innerHTML="First Name is required";
            isValid=false;
        }
        if(isValid==true){
		    alert("The information has been saved and sent");
        }
}

function ReviewVali(){
    var fname =document.getElementById("fnames").value;
    var lname =document.getElementById("lnames").value;
    var email =document.getElementById("emails").value;
    var restaurant =document.getElementById("restus").value;
    var review =document.getElementById("reviews").value;
    var isValid=true;
        if(fname==""){
            document.getElementById("FResult").innerHTML="First Name is required";
            isValid=false;
        }
        if(lname==""){
            document.getElementById("LResult").innerHTML="Last Name is required";
            isValid=false;
        }
        if(email==""){
            document.getElementById("EResult").innerHTML="E-mail is required";
            isValid=false;
        }
        if(restaurant==""){
            document.getElementById("ResResult").innerHTML="Restaurant is required";
            isValid=false;
        }
        if(review==""){
            document.getElementById("RevResult").innerHTML="First Name is required";
            isValid=false;
        }
        if(isValid==true){
            alert("The information has been saved and sent");
        }
}
// Doing this for pushing