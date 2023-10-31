const inputText = document.querySelectorAll(".input-text");
const inputline = document.querySelectorAll(".input-line");
const regText = document.querySelector(".err-text");
const showErr = document.querySelector(".alert-err-wrap");
const pwVal = document.querySelector("#userPw").value;

//클릭인풋 활성화
inputText.forEach((input) => {
  input.addEventListener("click", function (e) {
    removeClass();
    let clicked = e.target.parentNode;
    clicked.classList.add("focus");
  });
});

//클릭되면 다른 요소 비활성화
function removeClass() {
  inputline.forEach((line) => {
    if (line.classList.contains("focus")) {
      line.classList.remove("focus");
    }
  });
}
//로그인버튼 누르면 유효성 체크
const submit = document.querySelector(".btn-submit");
submit.addEventListener("click", function (e) {
  checkId(e);
});

//이메일 validation check
function checkId(e) {
  const idVal = document.querySelector("#userId").value;
  let returnVal = false;
  const idCheck = RegExp(/\S+@\S+\.\S+/);
  if (idVal == "") {
    emptyIdErr();
  } else if (idCheck.test(idVal)) {
    returnVal = true;
    if (returnVal == true && pwVal == "") {
      emptyPwErr();
    }
    return returnVal;
  } else {
    alertErr();
  }
}
//이메일 형식에 맞지않으면 알림
function alertErr() {
  showErr.classList.add("idErr");
  regText.innerText = `잘못된 이메일 형식 입니다.`;
}
//이메일 비어있으면 알림
function emptyIdErr() {
  showErr.classList.add("idErr");
  regText.innerText = `아이디를 입력해주세요`;
}
//비밀번호 입력 알림
function emptyPwErr() {
  showErr.classList.add("idErr");
  regText.innerText = `비밀번호를 입력해주세요`;
}
