"use client";

import { useState } from "react";

export default function StaffPage() {
  // Example staff list
  const [staff, setStaff] = useState([
    { id: 1, name: "Alice", role: "Waiter" },
    { id: 2, name: "Bob", role: "Cashier" },
    { id: 3, name: "Charlie", role: "Kitchen" },
  ]);

  const [newStaff, setNewStaff] = useState({ name: "", role: "" });

  // Add staff
  const addStaff = () => {
    if (!newStaff.name || !newStaff.role) return;
    setStaff([
      ...staff,
      { id: Date.now(), name: newStaff.name, role: newStaff.role },
    ]);
    setNewStaff({ name: "", role: "" });
  };

  // Delete staff
  const deleteStaff = (id: number) => {
    setStaff(staff.filter((s) => s.id !== id));
  };

  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        background: "#faf7f3",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#7B4B2A" }}>🧑‍🤝‍🧑 Staff Manager</h1>
      <p>Invite and assign Waiter, Cashier, and Kitchen roles.</p>

      {/* Staff List */}
      <div style={{ marginTop: "2rem" }}>
        {staff.map((member) => (
          <div
            key={member.id}
            style={{
              background: "#fff",
              padding: "1rem",
              borderRadius: "8px",
              marginBottom: "1rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              <strong>{member.name}</strong> — {member.role}
            </span>
            <button
              onClick={() => deleteStaff(member.id)}
              style={{
                background: "#c0392b",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "0.3rem 0.8rem",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Add Staff */}
      <div
        style={{
          marginTop: "2rem",
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Add Staff Member</h3>
        <input
          type="text"
          placeholder="Name"
          value={newStaff.name}
          onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
          style={{
            padding: "0.5rem",
            marginRight: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <select
          value={newStaff.role}
          onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
          style={{
            padding: "0.5rem",
            marginRight: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Role</option>
          <option value="Waiter">Waiter</option>
          <option value="Cashier">Cashier</option>
          <option value="Kitchen">Kitchen</option>
        </select>
        <button
          onClick={addStaff}
          style={{
            background: "#7B4B2A",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
    </main>
  );
}
