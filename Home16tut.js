import { useState, useEffect } from "react";
import BlogList from "./BlogList";

/* const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]); */
//setting value to null as we are getting blogs through apiend point
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const [name, setName] = useState("mario");

  //this is the function that is going to run every time their is a rerender  or anytime the data changes due to useEffect state.
  //when given the 2nd argument the useEffect would run only when their is any change in the dependencies(2nd argument is dependencies)
  //means whenever their will be a change in 2nd argument. And when an empty array is passed as an argument then it'll run the useEffect
  // function only once. And that is for the first time when their is data change or the page is load.
  /*   useEffect(() => {
    console.log("use effect run");
  }, [name]); */
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          handleDelete={handleDelete}
        />
      )}
      {/*       <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
