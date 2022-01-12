function getData(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      return cb(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
const data = getData(
  "https://jsonplaceholder.typicode.com/users",
  function (data) {
    let text =
      "<table class='border-collapse'> <thead class='bg-gray-200'>  <tr>" +
      "<th class='px-6 py-2 text-3sm border-b border-gray-200 uppercase tracking-wider text-dark'>ID</th>" +
      "<th class='px-6 py-2 text-3sm border-b border-gray-200 uppercase tracking-wider text-dark'>Name</th>" +
      "<th class='px-6 py-2 text-3sm border-b border-gray-200 uppercase tracking-wider text-dark'>Username</th>" +
      "<th class='px-6 py-2 text-3sm border-b border-gray-200 uppercase tracking-wider text-dark'>Email</th>" +
      "<th class='px-6 py-2 text-3sm border-b border-gray-200 uppercase tracking-wider text-dark'>Address</th>" +
      "<th class='px-6 py-2 text-3sm border-b border-gray-200 uppercase tracking-wider text-dark'>Company</th>" +
      "</tr> </thead>";
    data.forEach((item) => {
      text +=
        "<tbody class='bg-white border-b divide-y divide-gray-200'><tr class='hover:bg-gray-100'><td class='px-6 py-4 text-3sm'>" +
        item.id +
        "</td><td class='px-6 py-4 text-3sm text-gray-500'>" +
        item.name +
        "</td><td class='px-6 py-4 text-3sm text-gray-500'>" +
        item.username +
        "</td><td class='px-6 py-4 text-3sm text-gray-500'>" +
        item.email +
        "</td><td class='px-6 py-4 text-3sm text-gray-500'>" +
        item.address.street +
        ", " +
        item.address.suite +
        ", " +
        item.address.city +
        "</td><td class='px-6 py-4 text-3sm text-gray-500'>" +
        item.company.name +
        "</td></tr></tbody>";
    });
    text += "</table>";
    document.getElementById("app").innerHTML = text;
  },
);
