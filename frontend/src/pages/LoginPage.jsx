export default function LoginPage() {
  const styles = {
    mainDiv: {
      display: "flex",
      gap: "32rem",
      padding: "0.5rem",
    },
    textLeft: {
      padding: "1rem",
    },
    logo: {
      marginBottom: "1rem",
    },
    centerText: {
      marginLeft: "12rem",
      marginTop: "3rem",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    imageRight: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      display: "flex",
      gap: "3rem",
      // padding: "0.75rem 1.5rem",
      borderRadius: "8px",
      fontSize: "1.5rem",
      cursor: "pointer",
      width: "25rem",
      height: "5rem",
      // backgroundColor: "#007BFF",
      border: "0.1rem solid #898888",
      backgroundColor: "#fff",
      color: "#626262",
      // color: "#fff",
      // transition: "background-color 0.3s ease",
    },
    para: {
      marginTop: "16rem",
      color: "#626262",
    },
    txt: {
      color: "#626262",
    },
  };

  return (
    <div>
      <div className="main-div" style={styles.mainDiv}>
        <div className="text-left" style={styles.textLeft}>
          <div className="logo" style={styles.logo}>
            <img src="../src/assets/logo.png" alt="company logo" />
          </div>
          <div className="center-text" style={styles.centerText}>
            <h1 style={styles.txt}>Welcome 👋</h1>
            <div>
              <button style={styles.button}>
                <img src="../src/assets/google_icon.png" alt="company logo" />
                <p>Continue with Google</p>
              </button>
            </div>
            <div>
              <button style={styles.button}>
                <img src="../src/assets/mail_icon.png" alt="company logo" />
                <p>Continue with Email</p>
              </button>
            </div>
            <h2 style={styles.txt}>OR</h2>
            <div>
              <button style={styles.button}>Continue with Mobile Number</button>
            </div>
            <p style={styles.para}>
              I agree to the Terms & Conditions & Privacy Policy
            </p>
          </div>
        </div>
        <div className="image-right" style={styles.imageRight}>
          <div>
            <img src="../src/assets/theatre.png" alt="theatre" />
          </div>
        </div>
      </div>
    </div>
  );
}
