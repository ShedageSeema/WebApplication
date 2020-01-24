//Function goes here
function genYears(start, end) {
  var i = 0;
  var years = new Array();

  for (i = 0; i <= end - start; i++) {
    years[i] = start + i;
  }

  return (years);
}

function process() {
  //Get the field
  var str = document.myForm.full_name.value;

  //Parse the name into first/last (based on space)
  //1. Locate the 1st space
  var space = str.indexOf(" ");

  //2. Separate name based on space
  var first = str.substring(0, space);

  //3. Get last name
  var last = str.substring(space + 1);

  //4. Set the first name
  document.myForm.first_name.value = first;

  //5. Set the last name
  document.myForm.last_name.value = last;
}

function processNumber(flag)
{
  var result;
  var i = 0;

  var str = document.myForm.number.value;

  if (flag == 1)
  {
    result = Math.sin(parseFloat(str) * Math.PI / 180);

  }
  else
  {
    result = Math.sin(parseInt(str) * Math.PI / 180);
  }
  document.write("Result " + result.toFixed(2));



}

function displayAlertPrompts()
{
  //Set alert Box!
  window.alert("Invalid Last Name - Contains numeric data");

  //Prompt and display entered data - returns string (ok) or null (cancel)
  var str = prompt("Enter Data: ","Name:");

  //Get the length of the results
  var len = str.length;

  //Write data to screen
  document.write("str: " + str + "Length: " + len);


  //Confirm (yes/no -returns true/false
  var result = confirm("Continue?");
  document.write("Result: " + result);

  //Alert using window object
  window.alert("Text added to page");


}
function processFormData()
{
  var i = 0;
  var j = 0;
  var str = "";

    for (i = 0; i < document.forms.length; i++)
    {
      for (j = 0; j < document.forms[i].elements.length; j++)
      {

      //Write out all data stored in the form (name/value)
      str += "<h1>" + document.forms[i].elements[j].name + "</h1>";
      str += "<p>" + document.forms[i].elements[j].value + "</p>";


      //Check for checkbox
      if ((document.forms[i].elements[j].type == "checkbox") || (document.forms[i].elements[j].type == "radio")) {
        str += "<p>" + document.forms[i].elements[j].checked + "</p>";
      }
    }
  }

  //Write out the data
  document.write(str);

}
//passing the events 
function event1(event, info) {
    window.alert("Event is " + event.type + " on " + info + " ");

    //Display info for text
    if (info == "Text") {
        window.alert("Text is " + document.myform.text.value);
    }

}

//return to the server
function submit_function()
{
    window.alert("In submit");
    //document.write("Value is " + document.myform.text.value);
    return true;//has to be true to return 
}

//Next, implement the setCookies function

function setCookies() {

    var key = document.loop_form.item.value;
    var value = document.loop_form.price.value;

    //Set the cookie
    document.cookie = key + "=" + value;
    //document.write(document.cookie);  
}


function processCookies() {

    //See if Cookie is empty
    if (document.cookie.length > 0)//to check if you have cookie
    {
        //document.write(document.cookie + "<BR/>");

        //Unescape cookies - only necessary if used escape
        var my_cookies = unescape(document.cookie);

        //Split cookie up based on ;
        var cookie_array = my_cookies.split(";"); //split based on semicolon

        //Get the length of the resulting array
        var length = cookie_array.length;

        var i = 0;

        for (i = 0; i < length; i++) {
            //Split key/value pairs
            var cookie_val = cookie_array[i].split("=");


            //Delete the cookie
            document.cookie = cookie_val[0] + "=" + cookie_val[1] + ";" + "expires=Thu, 01-Jan-95 00:00:01 GMT";
        }

    }

}







