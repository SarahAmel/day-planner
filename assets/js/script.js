// $(document).ready(function () {
// var hour9El = document.querySelector('#hour-9');
// $('#hour-9')
//console.log(moment().format("l"))

//var currentDay = document.querySelector('#currentDay');
// currentDay.textContent = moment().format("l");

$("#currentDay").text(moment().format("l"));

// Event listener for Save Button

//   const savebutton = document.getElementsByClassName("saveBtn");
//   savebutton.addEventListener("click", function (Event) {
//     Event.preventDefault();
//     console.log("hello")
//     const TimeBlock =this.getElementById
//   });


$("#hour-9 .description").text(localStorage.getItem("hour-9"))
$("#hour-10 .description").text(localStorage.getItem("hour-10"))
$("#hour-11 .description").text(localStorage.getItem("hour-11"))
$("#hour-12 .description").text(localStorage.getItem("hour-12"))
$("#hour-13 .description").text(localStorage.getItem("hour-13"))
$("#hour-14 .description").text(localStorage.getItem("hour-14"))
$("#hour-15 .description").text(localStorage.getItem("hour-15"))
$("#hour-16 .description").text(localStorage.getItem("hour-16"))
$("#hour-17 .description").text(localStorage.getItem("hour-17"))




$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  console.log("hello");

  //what ever is in this box that has been clicked based off of its parent that has two attributes which are id and class
  var box = $(this).parent().attr("id");

  var output = $(this).siblings(".description").val();
  console.log(box);
  console.log(output);
  localStorage.setItem(box,output)
});

//Save text area content to local storage

//Local storage get item to pull saved data from local storage

// color code text area based on past/present/future
// });

function colorCode(){

    var actualTime= moment().hours()
    console.log(actualTime);
    $(".time-block").each(function(){
        var rowTime=JSON.parse($(this).attr("id").split("-")[1])
//uses row time twice to lable it
        console.log("Row Time:", rowTime)

        if(rowTime<actualTime){
            $(this).addClass("past")
        } else if(rowTime===actualTime){
            $(this).addClass("present");
        } else {
           $(this).addClass("future");
        }


    })

}

colorCode();

