export default function HomePage() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#faf7f3",
        color: "#333",
        lineHeight: 1.6,
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          background: "#7B4B2A",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Kipekee 🚀</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          DIY Smart Menu & Ordering System for Restaurants
        </p>
        <a
          href="mailto:support@kipekee.app"
          style={{
            background: "#FF6F20",
            padding: "1rem 2rem",
            borderRadius: "8px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Join the Waitlist
        </a>
      </section>

      {/* Features Section */}
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>
          Why Kipekee?
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "220px" }}>
            <h3>📱 Digital Menu</h3>
            <p>Easy QR-based menus accessible from any phone.</p>
          </div>
          <div style={{ maxWidth: "220px" }}>
            <h3>👩‍🍳 Real-time Orders</h3>
            <p>Orders flow instantly to staff and kitchen.</p>
          </div>
          <div style={{ maxWidth: "220px" }}>
            <h3>💳 Smart Payments</h3>
            <p>Bill splitting & cashless checkout made simple.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          background: "#f0e6df",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.8rem" }}>
          Ready to try Kipekee?
        </h2>
        <a
          href="mailto:support@kipekee.app"
          style={{
            background: "#7B4B2A",
            padding: "1rem 2rem",
            borderRadius: "8px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Join the Waitlist
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          fontSize: "0.9rem",
          background: "#333",
          color: "#fff",
        }}
      >
        © {new Date().getFullYear()} Kipekee ·{" "}
        <a
          href="mailto:support@kipekee.app"
          style={{ color: "#FF6F20", textDecoration: "none" }}
        >
          Contact
        </a>
      </footer>
    </main>
  );
}
