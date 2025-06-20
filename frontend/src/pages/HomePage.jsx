import HeadProfile from "../components/HeadProfile";

export default function HomePage() {
  const styles = {
    cardCollection: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      gap: "5rem",
      padding: "5rem",
      flexWrap: "wrap",
    },
    card: {
      border: "1px solid #B1B1B166",
      borderRadius: "1rem",
      padding: "1.5rem",
      width: "18rem",
      backgroundColor: "white",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      marginBottom: "1rem",
    },
    heading: {
      margin: "0.5rem 0",
      fontSize: "1.25rem",
    },
    paragraph: {
      fontSize: "0.95rem",
      marginBottom: "1.5rem",
    },
    primaryButton: {
      height: "2.5rem",
      width: "9rem",
      borderRadius: "0.4rem",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      backgroundColor: "#FF5295",
      color: "white",
    },
  };

  return (
    <div>
      <HeadProfile />
      <div style={styles.cardCollection}>
        <div style={styles.card}>
          <img
            src="../src/assets/img1.png"
            alt="Movie Management"
            style={styles.image}
          />
          <h3 style={styles.heading}>Movie Management</h3>
          <p style={styles.paragraph}>
            Add or update movies, posters and metadata
          </p>
          <button style={styles.primaryButton}>Go to Movies</button>
        </div>
        <div style={styles.card}>
          <img
            src="../src/assets/img2.png"
            alt="Theatre Management"
            style={styles.image}
          />
          <h3 style={styles.heading}>Theatre Management</h3>
          <p style={styles.paragraph}>
            Manage theatre details, screens and locations
          </p>
          <button style={styles.primaryButton}>Manage Theatres</button>
        </div>
        <div style={styles.card}>
          <img
            src="../src/assets/img3.png"
            alt="Showtime Scheduling"
            style={styles.image}
          />
          <h3 style={styles.heading}>Showtime Scheduling</h3>
          <p style={styles.paragraph}>
            Assign movies to screens and schedule showtimes.
          </p>
          <button style={styles.primaryButton}>Schedule Shows</button>
        </div>
      </div>
    </div>
  );
}
