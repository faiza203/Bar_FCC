const loader = document.querySelector(".loader");
let dataArr = [];

const fetchData = async () => {
  await fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dataArr = data.data;
      createElements(dataArr);
      loader.style.visibility = "hidden";
    });
};

const createElements = (dataA) => {
  d3.select(".data")
    .data(dataA)
    .enter()
    .append("p")
    .text((d) => d[1]);
  // const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
  console.log(dataArr);
  const w = 900;
  const h = 460;

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  svg
    .selectAll("rect")
    .data(dataArr)
    .enter()
    .append("rect")
    .attr("x", (d, i) => (i * dataArr.length * 10) / w)
    .attr("data-date" , d => d[0])
    .attr("transform", "translate(60, 0)")
    .attr("y", (d, i) => 400 - (i + d[1]) / 45.8)
    .attr("fill", "rgb(51, 173, 255)")
    .attr("width", 2.909090909090909)
    .attr("height", (d, i) => (i + d[1]) / 45.8);
};

fetchData();
