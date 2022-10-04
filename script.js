const adicionaItem = () => {
  const containerList = document.getElementById("container");

  const container = document.createElement("article");

  containerList.appendChild(container);

  container.classList.add("item");

  container.setAttribute("onclick", " removeItem(event)");
};

const removeItem = (event) => {
  event.target.remove();
};
