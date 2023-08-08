const div = document.createElement("div");
const heading = document.createElement("h1");
heading.textContent = "My Name is Abhishek!";
heading.className = "headingH1";
const para = document.createElement("p");
para.textContent =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur tempore cupiditate nesciunt veniam accusantium. Molestias sit repudiandae maiores eius laudantium laboriosam ullam illo cumque esse, fugit sapiente veniam vel accusamus.";

div.append(heading);
div.append(para);

document.getElementById("root").append(div);
console.log(div);
console.log(heading);
