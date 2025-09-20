"use client";

import { useState } from "react";

export default function MenuPage() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Starters",
      items: [
        { id: 1, name: "Spring Rolls", price: 120 },
        { id: 2, name: "Garlic Bread", price: 90 },
      ],
    },
    {
      id: 2,
      name: "Main Course",
      items: [
        { id: 3, name: "Grilled Chicken", price: 250 },
        { id: 4, name: "Pasta Alfredo", price: 200 },
      ],
    },
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [newItem, setNewItem] = useState({ categoryId: "", name: "", price: "" });

  // Add category
  const addCategory = () => {
    if (!newCategory.trim()) return;
    setCategories([...categories, { id: Date.now(), name: newCategory, items: [] }]);
    setNewCategory("");
  };

  // Delete category
  const deleteCategory = (categoryId: number) => {
    setCategories(categories.filter((cat) => cat.id !== categoryId));
  };

  // Add dish
  const addItem = () => {
    if (!newItem.name || !newItem.price || !newItem.categoryId) return;
    setCategories(
      categories.map((cat) =>
        cat.id === parseInt(newItem.categoryId)
          ? {
              ...cat,
              items: [
                ...cat.items,
                { id: Date.now(), name: newItem.name, price: parseFloat(newItem.price) },
              ],
            }
          : cat
      )
    );
    setNewItem({ categoryId: "", name: "", price: "" });
  };

  // Delete dish
  const deleteItem = (categoryId: number, itemId: number) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, items: cat.items.filter((item) => item.id !== itemId) }
          : cat
      )
    );
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
      <h1 style={{ color: "#7B4B2A" }}>📖 Menu Editor</h1>
      <p>Manage categories and dishes for your digital menu.</p>

      {/* Categories & Items */}
      <div style={{ marginTop: "2rem" }}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            style={{
              background: "#fff",
              padding: "1rem",
              borderRadius: "8px",
              marginBottom: "1.5rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h2>
              {cat.name}{" "}
              <button
                onClick={() => deleteCategory(cat.id)}
                style={{
                  marginLeft: "1rem",
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
            </h2>
            <ul>
              {cat.items.map((item) => (
                <li key={item.id} style={{ marginBottom: "0.5rem" }}>
                  {item.name} — <strong>฿{item.price}</strong>{" "}
                  <button
                    onClick={() => deleteItem(cat.id, item.id)}
                    style={{
                      marginLeft: "1rem",
                      background: "#c0392b",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "0.2rem 0.6rem",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    style={{
                      marginLeft: "0.5rem",
                      background: "#f39c12",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "0.2rem 0.6rem",
                      cursor: "pointer",
                    }}
                  >
                    Edit (WIP)
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Add Category */}
      <div
        style={{
          marginTop: "2rem",
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Add Category</h3>
        <input
          type="text"
          placeholder="Category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          style={{
            padding: "0.5rem",
            marginRight: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addCategory}
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

      {/* Add Dish */}
      <div
        style={{
          marginTop: "2rem",
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Add Dish</h3>
        <select
          value={newItem.categoryId}
          onChange={(e) => setNewItem({ ...newItem, categoryId: e.target.value })}
          style={{
            padding: "0.5rem",
            marginRight: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Dish name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          style={{
            padding: "0.5rem",
            marginRight: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          style={{
            padding: "0.5rem",
            marginRight: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "100px",
          }}
        />
        <button
          onClick={addItem}
          style={{
            background: "#7B4B2A",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add Dish
        </button>
      </div>
    </main>
  );
}
