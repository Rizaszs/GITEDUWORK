import Table from "./mini-library.js";

const table = new Table({
  columns: ["Name", "Email", "Address"],
  data: [
    ["Uciha Rizal", "rizaluzia@akansuci.com", "konohagakure"],
    ["uzumaki santoso", "usanto@gmail.com", "amegakure"],
    ["Senju harjuna", "junasenju@integer.com", "depokagakure"],
  ],
});
const app = document.getElementById("app");
table.render(app);
