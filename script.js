function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  document.addEventListener(
    "click",
    function(event) {
      if (
        event.target.matches(".open-button") ||
        !event.target.closest(".more")
      ) {
        closeModal()
      }
    },
    false
  )
  
  function closeModal() {
    document.querySelector(".myForm").style.display = "none"
  }

  // singin form


    // document.querySelector("#newAcc").addEventListener("click",signUp);
    // function signUp(){
    //     window.location.href="Project_SignUp.html";
    // }
    // document.querySelector("#home").addEventListener("click",goHome);
    // function goHome(event){
    //     window.location.href="index.html";
    // }
    // var regUser=JSON.parse(localStorage.getItem("listarr"));

    // document.querySelector("#submit").addEventListener("click",myFun);
    // function myFun(){
    //     var email=document.querySelector("#email").value;
    //     var pass=document.querySelector("#password").value;

    //     if(email =="jitu@04" && pass =="masai" ){
    //         window.location.href="index.html";
    //     }
    //     else{
    //         isuser=false;
    //     for(var i=0;i<regUser.length;i++){
    //         if(regUser[i].itememail == email && regUser[i].itempass ==passord){
    //             isuser=true;
    //             break;
    //         }
    //     }
    //     if(isuser==true){
    //         window.location.href="index.html";

    //     }
    //     else{
    //        alert("invalid Mobile No.. ");
    //     document.querySelector("#valid").innerHTML="** invalid email and password";
    //     }
            
    //     }

    // }
    

