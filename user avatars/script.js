document.querySelector("#clk").addEventListener("click", handleClick());

function handleClick() {
  const URL = "https://random-data-api.com/api/users/random_user?size=10";

  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      displayData(data);
    });
}

function displayData(users) {
  // Display username, avatar, employment title
  const usersDivs = users.map((user) => {
    const {
      username,
      avatar,
      employment: { title },
    } = user;

    console.log(avatar);

    return `<div>
        <p>${username}</p>
        <img src="${avatar}"/>
        <p>${title}</p>
      </div>
    `;
  });

  document.querySelector("#app").innerHTML = usersDivs;
}
