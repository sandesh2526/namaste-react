const heading2 = React.createElement("h2", {
    id: "title",
    className: "SomeClass",
    key: "heading2"
}, "This is Second Heading!")
const heading = React.createElement("h1", {key: "heading"}, "This is React!");
const div = React.createElement("div", { id: "container" }, [heading, heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading)
root.render(div);
console.log(heading2);
