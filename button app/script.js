document.querySelector("#clk").addEventListener("click", handleClick);

function handleClick() {
  const URL = "https://random-data-api.com/api/users/random_user?size=10";
  fetch(URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      displayData(data);
    });
}

function displayData(users) {
  const userDivs = data.map(function (user) {
    const {
      username,
      avatar,
      employment: { title },
    } = user;

    console.log(avatar);

    return `<div>
            <p>${username}</p>
            <img src = "${avatar}"/>
            <p>${title}</p>
            </div>
        `;
  });
  document.querySelector("#app").innerHTML = userDivs;
}
