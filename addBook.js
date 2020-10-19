function Preview() {
  var typeSelected = "";
  var ratingSelected = "";
  var stockValue = "";


  var bookName = document.getElementById("bookName").value;
  var authorEmail = document.getElementById("authorEmail").value;
  var website = document.getElementById("website").value;
  var datepicker = document.getElementById("datepicker").value;
  var isbnNumber = document.getElementById("isbnNumber").value;
  var price = document.getElementById("price").value;
  var selectType = document.getElementById("selectType").value;
  var comment = document.getElementById("comment").value;
  var buttonClick = document.getElementById("buttonClick").value;


  var selected = [];
  for (var option of document.getElementById('categories').options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }

  if (buttonClick == 0) {
    alert("Please Select Image and Press Upload Button");
  }


  if (selectType == 1) {
    typeSelected = "Novel"
  } else if (selectType == 2) {
    typeSelected = "Magazine"
  } else if (selectType == 3) {
    typeSelected = "Textbook"
  } else {
    alert("Please Select Type");
  }


  var checkboxes = document.getElementsByName('format');
  var format = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      format.push(checkboxes[i].value);
    }
  }


  var rating = document.getElementsByName("customRadioInline1");

  if (rating[0].checked) {
    ratingSelected = rating[0].value;

  } else if (rating[1].checked) {
    ratingSelected = rating[1].value;

  } else if (rating[2].checked) {
    ratingSelected = rating[2].value;

  } else if (rating[3].checked) {
    ratingSelected = rating[3].value;

  } else {
    ratingSelected = rating[4].value
  }


  var stock = document.getElementById("stock");

  var isChecked = document.getElementById("stock").checked;

  if (isChecked) {
    stockValue = document.getElementById("stock").getAttribute("data-on");
  } else {
    stockValue = document.getElementById("stock").getAttribute("data-off");
  }


  //saving the values in local storage
  localStorage.setItem("bookName", bookName);
  localStorage.setItem("authorEmail", authorEmail);
  localStorage.setItem("website", website);
  localStorage.setItem("categories", selected);
  localStorage.setItem("datepicker", datepicker);
  localStorage.setItem("price", price);
  localStorage.setItem("isbnNumber", isbnNumber);
  localStorage.setItem("typeSelected", typeSelected);
  localStorage.setItem("format", format);
  localStorage.setItem("ratingSelected", ratingSelected);
  localStorage.setItem("stockValue", stockValue);
  localStorage.setItem("comment", comment);


}

document.getElementById('coverImg').addEventListener('change', (e) => {

  document.getElementById('upload').addEventListener('click', () => {
    document.getElementById("buttonClick").value = 1;
    const coverImg = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      localStorage.setItem('coverImg', base64String);

    };
    reader.readAsDataURL(coverImg);
  });
});


// pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please Enter Correct Email"

function validateForm() {
  var bookName = document.forms["addBook"]["bookName"].value;
  var buttonClick = document.forms["addBook"]["buttonClick"].value;
  var authorEmail = document.forms["addBook"]["authorEmail"].value;
  var website = document.forms["addBook"]["website"].value;
  var datepicker = document.forms["addBook"]["datepicker"].value;
  var isbnNumber = document.forms["addBook"]["isbnNumber"].value;
  var price = document.forms["addBook"]["price"].value;
  var selectType = document.forms["addBook"]["selectType"].value;
  var comment = document.forms["addBook"]["comment"].value;
  var format = document.forms["addBook"]["format"].value;
  var letters = /^[a-zA-Z\s]+$/;
  var emailValidation = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  var websiteVal = /^[a-zA-Z]+\.[a-z]{2,}$/;
  var number = /^[0-9]+$/;
  // var isbn=/^[0-1]{3}+\-[0-9]{1}+\-[0-9]{2}+\-[0-9]{6}+\-[1-9]{1}$/;


  if (letters.test(bookName) == false) {
    alert("enter correct name");
  } else if (emailValidation.test(authorEmail) == false) {
    alert("enter correct email");
  } else if (websiteVal.test(website) == false) {
    alert("enter correct website name");
  } else if (!letters.test(datepicker) == false) {
    alert("Select Date");
  } else if (number.test(price) == false) {
    alert("enter amount");
  }
  else {
    Preview();
  }

  // else if(isbn.test(isbnNumber) == false) { 
  //             alert("enter Isbn number in eg. 987-1-32-231652-0");
  //         }

  // else if(format.length == 0) { 
  //             alert("Plaese select any format ");
  //         }       
  


}