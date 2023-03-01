const onClickLogin = () => {
  const email = document.getElementById("imput-email").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("E-mail inválido!");
    return;
  }
  window.open("/pages/home/index.html");
};
