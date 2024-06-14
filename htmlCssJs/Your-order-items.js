const List = [
    { uniqueNo: 1, dish: "Veg Biryani" },
    { uniqueNo: 2, dish: "Chicken 65" },
    { uniqueNo: 3, dish: "Paratha" },
  ];
  
  function createList() {
    let ul = document.getElementById("unorder");
  
    List.forEach((item) => {
      let li = document.createElement("li");
  
      let label = document.createElement("label");
      label.htmlFor = `item${item.uniqueNo}`;
      label.id = `item${item.uniqueNo}`;
      label.textContent = `${item.dish}`;
  
      let button = document.createElement("button");
      button.id = `button${item.uniqueNo}`;
      button.textContent = "Delete";
  
      const itemSpan = document.createElement("span");
      itemSpan.className = "item";
      itemSpan.appendChild(label);
      itemSpan.appendChild(button);
  
      li.appendChild(itemSpan);
  
      button.addEventListener("click", function () {
        deleteItem(this, label);
      });
  
      ul.appendChild(li);
    });
  }
  
  createList(List);
  
  function deleteItem(button, label) {
    label.remove();
    button.remove();
  }