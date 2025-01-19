cvbtn = document.getElementsByClassName("cv-button")[0];
hireMenBtn = document.getElementsByClassName("btn-design")[0];
whatsppnBtn = document.getElementsByClassName("btn-design")[1];
/**
 * Select Button and add event listener to open CV
 */
console.log(cvbtn);
cvbtn.addEventListener("click", function () {
  window.open(
    "https://drive.google.com/file/d/1AG_KezQrcb3xy5ZcHhMpcIUil8SKl23B/view?usp=drive_link"
  );
});
whatsppnBtn.addEventListener("click", function () {
  window.open("https://wa.me/01157173830");
});
hireMenBtn.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/hany-abdou-731b831a1/");
});
