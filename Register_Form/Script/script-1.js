//Setting Fields to check Whether the Input Filled Correctly or Not
var nameCheck = false
var phoneCheck=false
var emailCheck=false
var passCheck=false
var con_passCheck=false

//Containers
var usernameContainer = document.querySelector(".username")
var phoneContainer = document.querySelector(".phone")
var emailContainer=document.querySelector(".email")
var passContainer=document.querySelector(".password")
var con_passContainer=document.querySelector(".con_password")

//Selecting Icons
var usernameIcon = usernameContainer.querySelector("i")
var phoneIcon = phoneContainer.querySelector("i")
var emailIcon=emailContainer.querySelector("i")
var passIcon=passContainer.querySelector("i")
var con_passIcon=con_passContainer.querySelector("i")

//Selecting Labels
var usernameLabel = usernameContainer.querySelector("label")
var phoneLabel=phoneContainer.querySelector("label")
var emailLabel=emailContainer.querySelector("label")
var passLabel=passContainer.querySelector("label")
var con_passLabel=con_passContainer.querySelector("label")

//Selecting Input Box
var usernameInput = document.getElementById("username")
var phoneInput = document.getElementById("phone")
var emailInput=document.getElementById("email")
var passInput=document.getElementById("password")
var con_passInput=document.getElementById("con_password")

usernameInput.addEventListener("keyup",function(){
    //User Input Value
    var enteredValue = usernameInput.value

    if(enteredValue=="")
    {
        //Show Label and Hide Icon
        usernameLabel.style.visibility="visible"
        usernameIcon.style.visibility="hidden"
        nameCheck=false
    }
    else{
        //Show Icon and Hide Label
        usernameIcon.style.visibility="visible"
        usernameLabel.style.visibility="hidden"
        nameCheck=true
    }


})



//Phone Input
phoneInput.addEventListener("keyup",function(){
    //User Input Value
    var enteredValue = phoneInput.value

    if(enteredValue=="")
    {
        //Show Label and Hide Icon
        phoneLabel.style.visibility="visible"
        phoneIcon.style.visibility="hidden"
        phoneLabel.textContent="Please enter your Mobile Number"
        phoneCheck=false

    }
    else if(enteredValue.length!=10)
    {
        //Show Label and Hide Icon
        phoneLabel.style.visibility="visible"
        phoneIcon.style.visibility="hidden"
        phoneLabel.textContent="Please enter 10 Digit Mobile Number"
        phoneCheck=false
    }
    else{
        //Show Icon and Hide Label
        phoneIcon.style.visibility="visible"
        phoneLabel.style.visibility="hidden"
        phoneCheck=true 
    }


})

//Email Input

emailInput.addEventListener("keyup",function(){
    //User Input Value
    var enteredValue = emailInput.value

    if(enteredValue=="")
    {
        //Show Label and Hide Icon
        emailLabel.style.visibility="visible"
        emailIcon.style.visibility="hidden"
        emailCheck=false
    }
    else{
        //Show Icon and Hide Label
        emailIcon.style.visibility="visible"
        emailLabel.style.visibility="hidden"
        emailCheck=true
    }


})

//Password Input

passInput.addEventListener("keyup",function(){
    //User Input Value
    var enteredValue1 = passInput.value

    if(enteredValue1=="")
    {
        //Show Label and Hide Icon
        passLabel.style.visibility="visible"
        passIcon.style.visibility="hidden"
        passCheck=false
    }
    else{
        //Show Icon and Hide Label
        passIcon.style.visibility="visible"
        passLabel.style.visibility="hidden"
        passCheck=true
    }

    //Con_Password Inpit

con_passInput.addEventListener("keyup",function(){
    //User Input Value
    var enteredValue = con_passInput.value

    if(enteredValue=="")
    {
        //Show Label and Hide Icon
        con_passLabel.style.visibility="visible"
        con_passIcon.style.visibility="hidden"
        con_passCheck=false
    }
    else if(enteredValue!=enteredValue1)
    {
        //Show Icon and Hide Label
        con_passIcon.style.visibility="hidden"
        con_passLabel.style.visibility="visible"
        con_passLabel.textContent="Please Enter Correct Password"
        con_passCheck=false
    }
    else
    {
        con_passIcon.style.visibility="visible"
        con_passLabel.style.visibility="hidden"
        con_passCheck=true        
    }
})


})


//Selecting Submit Button
var submitInput = document.getElementById("submitButton")
var popup = document.querySelector(".popup")
submitInput.addEventListener("click",function(e){
    //Preventing Default Refresh
    e.preventDefault()

    if(nameCheck==true && phoneCheck==true && emailCheck==true && passCheck==true && con_passCheck==true)
    {
        popup.textContent="Form Submitted Successfully"
        popup.style.backgroundColor="blue"
        popup.style.top="10px"
        popup.style.opacity="1"
    }
    else{
        popup.textContent="Please Fill the Form"
        popup.style.backgroundColor="red"
        popup.style.top="10px"
        popup.style.opacity="1"
    }

    

    //Run this line after 3 Seconds
    //Set Timeout (What should happen, After How many milliseconds)

    setTimeout( 
        function()
        { 
            popup.style.top="-40px"
            popup.style.opacity="0"
        },2000 )
})

