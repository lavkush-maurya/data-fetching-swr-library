import "./App.css";
import useSWR from "swr";

function App() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://649d130b9bac4a8e669d3404.mockapi.io/api/users",
    fetcher
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("data", data);
  return (
    <>
      <h1>SWR</h1>
      <div className="card">
        <p>React Hooks for Data Fetching</p>
        <div>
          {data.map((item) => (
            <section>
              {item.id} {" - "} {item.name} <img src={item.avatar} alt="" />{" "}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
