  var link = document.querySelector(".hotel-search-title");
  var popup = document.querySelector(".hotel-search");
  var dateIn = popup.querySelector("[name=date-in]");
  var dateOut = popup.querySelector("[name=date-out]");
  var numberOfAdults = popup.querySelector("[name=numb-of-adults]");
  var numberOfChildren = popup.querySelector("[name=numb-of-children]");
  var form = popup.querySelector("form");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("form-show");
    dateIn.focus();
  });

  form.addEventListener("submit", function (evt) {
    if (!dateIn.value || !dateOut.value) {
      evt.preventDefault();
      popup.classList.remove("form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("form-error");
    } else {
      localStorage.setItem("numberOfAdults", numberOfAdults.value);
      localStorage.setItem("numberOfChildren", numberOfChildren.value);
    }
  });
