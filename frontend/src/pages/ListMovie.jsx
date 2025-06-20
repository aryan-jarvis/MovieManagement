import HeadProfile from "../components/HeadProfile";

export default function ListMovie() {
  const breadcrumbStyle = {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    fontSize: "1rem",
    marginBottom: "1rem",
    color: "#555",
  };

  const headerContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#fff",
    color: "#FF5295",
    border: "2px solid #FF5295",
    borderRadius: "1rem",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <div style={{ padding: "2rem" }}>
      <HeadProfile />

      <div style={breadcrumbStyle}>
        <a href="/home" style={{ textDecoration: "none", color: "#FF5295" }}>
          <p>Home</p>
        </a>
        <p>/</p>
        <a href="/listM" style={{ textDecoration: "none", color: "#FF5295" }}>
          <p>Movie Management</p>
        </a>
      </div>

      <div style={headerContainerStyle}>
        <h1 style={titleStyle}>Manage Movies</h1>
        <button style={buttonStyle}>+ Add New Movie</button>
      </div>
    </div>
  );
}
