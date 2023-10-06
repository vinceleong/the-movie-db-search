export const BackToTopButton = () => (
  <div
    style={{
      position: "fixed",
      background: "white",
      width: "100px",
      height: "40px",
      color: "black",
      right: 40,
      bottom: 20,
      borderRadius: "1rem",
      cursor: "pointer",
    }}
    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
  >
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>Back to top</div>
    </div>
  </div>
);
