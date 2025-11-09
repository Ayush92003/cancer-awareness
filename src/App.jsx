import React, { useEffect, useState } from "react";

const App = () => {
  const [quote, setQuote] = useState("Loading quote...");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [fade, setFade] = useState(true); 

  const fetchQuote = async () => {
    setIsLoading(true);
    setFade(false); 
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      if (!res.ok) throw new Error("Failed to load quote");
      const data = await res.json();

      setTimeout(() => {
        setQuote(data.quote || "Keep fighting — every day is a victory!");
        setAuthor(data.author || "Anonymous");
        setIsLoading(false);
        setFade(true); 
      }, 400);
    } catch (err) {
      console.error("Quote fetch failed:", err);
      setQuote("Stay strong — hope never fades.");
      setAuthor("Cancer Awareness Team");
      setIsLoading(false);
      setFade(true);
    }
  };
  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 20000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Your message has been received.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "#fff5f8",
        color: "#333",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(135deg, #e75480, #d63384)",
          color: "white",
          textAlign: "center",
          padding: "1.8rem 1rem",
          boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2.3rem",
            fontWeight: "700",
            marginBottom: "0.3rem",
          }}
        >
          Cancer Awareness & Support
        </h1>
        <p style={{ fontSize: "1.1rem", opacity: "0.9" }}>
          Together we can fight and overcome 💪
        </p>
      </header>

      {/* Banner */}
      <section
        style={{
          position: "relative",
          height: "70vh",
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1681398718759-f77c1d059141?ixlib=rb-4.1.0&auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(214, 51, 132, 0.6)",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            textAlign: "center",
            color: "white",
            zIndex: 2,
            maxWidth: "90%",
            padding: "1rem",
            animation: "fadeIn 1.2s ease-in-out",
          }}
        >
          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              lineHeight: "1.3",
              marginBottom: "1rem",
              textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
            }}
          >
            “Hope is Stronger Than Fear”
          </h2>
          <p style={{ fontSize: "1.2rem", opacity: "0.95" }}>
            Join hands to spread love, strength, and awareness 💖
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section
        style={{
          maxWidth: "950px",
          margin: "3rem auto",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#d63384",
            fontSize: "1.9rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          🌸 Join the Movement
        </h3>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#444" }}>
          Raise awareness, support those in need, and spread hope for a
          cancer-free future. Every message, every step, and every heart counts.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "white",
            padding: "2.5rem",
            marginTop: "2rem",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              color: "#d63384",
              marginBottom: "1.5rem",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            Contact Us 💌
          </h3>

          {["name", "email"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={`Your ${
                field.charAt(0).toUpperCase() + field.slice(1)
              }`}
              value={form[field]}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.9rem",
                marginBottom: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#d63384")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          ))}

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.9rem",
              marginBottom: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "1rem",
              resize: "none",
              transition: "border-color 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#d63384")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />

          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, #e75480, #d63384)",
              color: "white",
              border: "none",
              padding: "0.9rem 2rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1.1rem",
              fontWeight: "500",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Send Message
          </button>
        </form>

        {/* Motivational Quote */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2.2rem",
            background: "linear-gradient(135deg, #fff, #ffeaf4)",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              color: "#d63384",
              marginBottom: "1rem",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            🌟 Motivational Quote
          </h3>

          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80px",
              }}
            >
              <div
                style={{
                  border: "4px solid #f3f3f3",
                  borderTop: "4px solid #d63384",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  animation: "spin 1s linear infinite",
                }}
              ></div>
            </div>
          ) : (
            <>
              <p
                style={{
                  fontStyle: "italic",
                  color: "#555",
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                  minHeight: "60px",
                  opacity: fade ? 1 : 0,
                  transition: "opacity 0.8s ease-in-out",
                }}
              >
                “{quote}”
              </p>
              {author && (
                <p
                  style={{
                    fontWeight: "600",
                    color: "#d63384",
                    fontSize: "1rem",
                  }}
                >
                  - {author}
                </p>
              )}
            </>
          )}

          <button
            onClick={fetchQuote}
            disabled={isLoading}
            style={{
              marginTop: "1rem",
              background: "#d63384",
              color: "white",
              border: "none",
              padding: "0.7rem 1.5rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "transform 0.2s ease, background 0.3s ease",
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            {isLoading ? "Fetching..." : "Get New Quote"}
          </button>
          <p style={{ marginTop: "0.6rem", fontSize: "0.8rem", color: "#777" }}>
            (Auto-refreshes every 20 seconds)
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#222",
          color: "white",
          textAlign: "center",
          padding: "1.5rem",
          marginTop: "3rem",
          fontSize: "0.95rem",
        }}
      >
        © 2025 Cancer Awareness & Support | Made with 💖 to spread hope
      </footer>

      {/* Animations */}
      <style>
        {`
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        `}
      </style>
    </div>
  );
};

export default App;
