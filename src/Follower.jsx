const Follower = ({ item }) => {
  return (
    <>
      <article className="card" key={item.id}>
        <img src={item.avatar_url} />
        <h4>{item.login}</h4>
        <a href={item.html_url} target="_blank" className="btn">
          View profile
        </a>
      </article>
    </>
  );
};
export default Follower;
