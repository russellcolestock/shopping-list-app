import stickFamily from "../assets/stick-family.png"

export default function Target() {
    return (
        <div className='list-container'>
            <img 
                src={stickFamily} 
                alt="stick family drawing of a dad, mom, and 4 daughters"
                className="stick-family-image" 
            />
            <h1>Target Shopping List</h1>
            <form className="shopping-list-form" style={{marginTop: "15px"}}>
                <div style={ {color: "#545454"} }>
                    <label htmlFor="new-target-item">Add new item:</label>
                    <input
                        type="text" 
                        id="new-target-item" 
                        name="new-target-item"
                        placeholder="Markers"
                    />
                </div>
                <button type="subimt">Add to cart</button>
            </form>
        </div>
    );
}