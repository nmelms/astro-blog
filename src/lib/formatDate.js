function formatDate(str) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date(str);
  let day = date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

export default formatDate;
