const reactHeading = React.createElement(
  "h1",
  { className: "headerH1", id: "headerMain" },
  "This is react element"
);

const reactPara = React.createElement("p", {
  className: "paragraph",
  id: "paragraph",
  children:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur tempore cupiditate nesciunt veniam accusantium. Molestias sit repudiandae maiores eius laudantium laboriosam ullam illo cumque esse, fugit sapiente veniam vel accusamus."
});

ReactDOM.createRoot(document.getElementById("root")).render(
  reactHeading,
  reactPara
);
console.log("This is reactHeading", reactHeading);
