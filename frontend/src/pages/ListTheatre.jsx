import HeadProfile from "../components/HeadProfile";

export default function ListTheatre() {
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
    <div>
      <HeadProfile />
      <div style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
        <div style={breadcrumbStyle}>
          <a href="/home" style={{ textDecoration: "none", color: "#FF5295" }}>
            <p>Home</p>
          </a>
          <p>/</p>
          <a href="/listT" style={{ textDecoration: "none", color: "#FF5295" }}>
            <p>Theatre Management</p>
          </a>
        </div>

        <div style={headerContainerStyle}>
          <h1 style={titleStyle}>Manage Theatres</h1>
          <button style={buttonStyle}>+ Add New Theatre</button>
        </div>
      </div>
    </div>
  );
}
