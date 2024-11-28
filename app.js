// ======================= Page Change Function Start =============================

document.getElementById("pageBtn-1").addEventListener("click", () => {
  document.getElementById("container-1").classList.add("hidden-form");
  document.getElementById("container-2").classList.remove("hidden-form");
});

document.getElementById("pageBtn-2").addEventListener("click", () => {
  document.getElementById("container-2").classList.add("hidden-form");
  document.getElementById("container-1").classList.remove("hidden-form");
});

// ======================= Page Change Function End =============================

// ======================= Sign Up Function Start =============================

var userData = [];
// var userId = 1;

function signupForm(event) {
  event.preventDefault();
  var userName = document.getElementById("userName").value.toUpperCase().trim();
  var userEmail = document.getElementById("userEmail").value.toLowerCase().trim();
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (!userName || !userEmail || !password || !confirmPassword) {
    swal("Fill Out All Input Field!", "Press OK For Retry!", "error");
    return;
  }

  userData = JSON.parse(localStorage.getItem("userData")) || [];
  console.log(userData);
  var userId = Number(localStorage.getItem('userId')) || 2000;

  for (let index = 0; index < userData.length; index++) {
    if (userEmail == userData[index].userEmail) {
      swal(
        "This Email Is Already Taken Try Another Email!",
        "Press OK For Retry!",
        "error"
      );
      return;
    }
  }

  var obj = {
    userName: userName,
    userEmail: userEmail,
    password: password,
    confirmPassword: confirmPassword,
    userId: userId + 1,
  };

  
  if (password == confirmPassword) {
    userData.push(obj);
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("userId", userId + 1);
    document.getElementById("signupForm").reset();
    console.log(userData);
    swal("SignUp Success!", `${userName} Go To LogIn Page`, "success");
  } else {
    swal("Password Should Be Same!", "Press OK For Retry!", "error");
  }
}

// ======================= Sign Up Function End =============================

// ======================= Sign In Function Start =============================

function signinForm(event) {
  event.preventDefault();
  var checkEmail = document.getElementById("checkEmail").value.toLowerCase().trim();
  var CheckPassword = document.getElementById("CheckPassword").value;

  if (!checkEmail || !CheckPassword) {
    swal("Please Fill Out All Field!", "Press OK For Retry!", "error");
    return;
  }

  userData = JSON.parse(localStorage.getItem("userData")) || [];
  console.log(userData);

  if (userData.length < 1) {
    swal("Data Not Available!", "Press OK For Retry!", "error");
    return;
  }

  for (var index = 0; index < userData.length; index++) {
    if (checkEmail == userData[index].userEmail) {
      if (
        checkEmail == userData[index].userEmail &&
        CheckPassword == userData[index].password
      ) {
        swal("SuccessFully LogedIn!", `${userData[index].userName}`, "success");

        document.getElementById("loginForm").reset();
        return;
      } else {
        swal("Invalid Username Or Password!", "Press OK For Retry!", "error");
      }
    } else {
      swal("User Not Found!", "Press OK For Retry!", "error");
    }
  }
}
// ======================= Sign In Function End =============================
