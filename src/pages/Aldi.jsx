import { useState } from "react";
import stickFamily from "../assets/stick-family.png"

export default function Aldi() {
    const [items, setItems] = useState({
    produce: [],
    bakery: [],
    dairy: [],
    frozen: [],
    boxed: [],
    misc: []
  });

  const [newItem, setNewItem] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!newItem.trim()) return; // prevent empty adds

    setItems(prevItems => ({
      ...prevItems,
      [category]: [...prevItems[category], newItem] // add item into right category
    }));

    setNewItem(""); // reset input

    setCategory(""); // reset category
  }

    return (
        <div className='list-container'>
            <img 
                src={stickFamily} 
                alt="stick family drawing of a dad, mom, and 4 daughters"
                className="stick-family-image" 
            />
            <h1>Aldi Shopping List</h1>

            <div className="form-and-lists">
                <form 
                    className="shopping-list-form" 
                    style={{ marginTop: "15px" }} 
                    onSubmit={handleSubmit}
                >
                    <div style={{ color: "#545454" }}>
                        <label htmlFor="new-aldi-item">Add new item:</label>
                        <input
                            type="text"
                            id="new-aldi-item"
                            value={newItem}
                            onChange={e => setNewItem(e.target.value)}
                            placeholder="e.g. Milk"
                        />

                        <div className="select-group">
                            <label htmlFor="category">Category:</label>
                            <select
                                id="category"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            >
                                <option value="">Select an option</option>
                                <option value="produce">Produce</option>
                                <option value="bakery">Baked Goods</option>
                                <option value="dairy">Dairy</option>
                                <option value="boxed">Boxed/Canned</option>
                                <option value="frozen">Frozen</option>
                                <option value="misc">Miscellaneous</option>
                            </select>

                        </div>
                    </div>
                    <button type="submit">Add to cart</button>
                </form>

                {/* Render categories */}
                <div className="shopping-lists">
                    {Object.entries(items).map(([cat, catItems]) => 
                    catItems.length > 0 && (
                    <div key={cat} className="category">
                        <h2 className="category-title">
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </h2>
                        <ul className="item-list">
                        {catItems.map((item, idx) => (
                            <li key={idx} className="item">{item}</li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
            </div>

        </div>
    );
}