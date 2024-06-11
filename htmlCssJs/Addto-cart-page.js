function createListItem() {
    let it = "JavaScript";
  
   
    const container = document.createElement("div");
    container.className = "container";
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = it;
    checkbox.id = it;
  
    const checkboxSpan = document.createElement("span");
    checkboxSpan.appendChild(checkbox);
  
    const label = document.createElement("label");
    label.htmlFor = it;
    label.textContent = it;
  
    container.appendChild(checkboxSpan);
    container.appendChild(label);
    document.body.appendChild(container);
  }
  
  createListItem();