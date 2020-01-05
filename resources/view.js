const view = {
  render(data, el) {
    el.innerHTML =
      "<ul>" +
      data
        .map(item => {
          return `<li>${item.keyword}</li>`;
        })
        .join("") +
      "</ul>";
  }
};

export default view;
