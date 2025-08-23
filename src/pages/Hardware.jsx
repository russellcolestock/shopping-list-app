import stickFamily from "../assets/stick-family.png"

export default function Hardware() {
    return (
        <div className='list-container'>
            <img 
                src={stickFamily} 
                alt="stick family drawing of a dad, mom, and 4 daughters"
                className="stick-family-image" 
            />
            <h1>Menards/Home Depot List</h1>
            <form className="shopping-list-form" style={{marginTop: "15px"}}>
                <div style={ {color: "#545454"} }>
                    <label htmlFor="new-hardware-item">Add new item:</label>
                    <input
                        type="text" 
                        id="new-hardware-item" 
                        name="new-hardware-item"
                        placeholder="Screws"
                    />
                </div>
                <button type="subimt">Add to cart</button>
            </form>
        </div>
    );
}