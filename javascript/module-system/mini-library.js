class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead class='bg-gray-200'><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th class='px-6 py-2 text-3sm border-b border-gray-200 uppercase tracking-wider text-dark'>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody class='bg-white border-b divide-y divide-gray-200'>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
    <tr class='hover:bg-gray-100'>
      <td class='px-6 py-4 text-3sm'>${d[0]}</td>
      <td class='px-6 py-4 text-3sm text-gray-500'>${d[1]}</td>
      <td class='px-6 py-4 text-3sm text-gray-500'>${d[2]}</td>
    </tr>
  `;
    });

    return open + close;
  }

  render(element) {
    let table =
      "<table class='border-collapse'>" +
      this.createHeader(this.init.columns) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}

export default Table;
