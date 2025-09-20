"use client";

import { useState } from "react";
import QRCode from "qrcode.react"; // correct import

export default function QRPage() {
  const [url, setUrl] = useState("https://kipekee.app/diner");

  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        background: "#faf7f3",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#7B4B2A" }}>📱 QR Generator</h1>
      <p>Generate QR codes for diners to scan and access the menu.</p>

      {/* Input URL */}
      <div style={{ marginTop: "2rem" }}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "60%",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* QR Code Preview */}
      <div style={{ marginTop: "2rem" }}>
        <QRCode value={url} size={200} />
      </div>

      <p style={{ marginTop: "1rem" }}>
        This QR links to: <strong>{url}</strong>
      </p>
    </main>
  );
}
