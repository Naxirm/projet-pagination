import useFetch from "./useFetch";
import Follower from "./Follower";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

function App() {
  const { setPage, loading, followers, page } = useFetch(url);

  // const [page, setPage] = useState(0);
  // const [loading, setLoading] = useState(false);
  // const [followers, setFollowers] = useState([]);

  // const fetchPerson = async (url) => {
  //   setLoading(true);

  //   try {
  //     const response = await fetch(url);
  //     const followers = await response.json();
  //     setFollowers(paginate(followers)[page]);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  const nextPage = () => {
    if (page === 9) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page === 0) {
      setPage(9);
    } else {
      setPage(page - 1);
    }
  };

  const choosePage = (e) => {
    setPage(Number(e.target.textContent) - 1);
  };

  // useEffect(() => {
  //   fetchPerson(url);
  // }, [page]);

  return (
    <>
      <main className="section-title">
        <div className="section-title">
          <h1>{loading ? "Loading..." : "Pagination"}</h1>
          <div className="underline"></div>
        </div>
        <section className="followers">
          <div className="container">
            {followers.map((item) => (
              <Follower key={item.id} item={item} />
            ))}
          </div>
          {!loading && (
            <div className="btn-container">
              <button className="prev-btn" onClick={() => prevPage()}>
                préc
              </button>
              {followers.map((_, i) => (
                <button
                  key={i}
                  className={`page-btn ${page === i ? "active-btn" : ""}`}
                  onClick={(e) => choosePage(e)}
                >
                  {i + 1}
                </button>
              ))}
              <button className="next-btn" onClick={() => nextPage()}>
                suiv
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
