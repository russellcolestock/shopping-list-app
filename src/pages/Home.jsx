import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='list-container'>
            <h1>My Stores</h1>
            <ul className='home-menu'>
                <li><Link to="aldi">Aldi</Link></li>
                <li><Link to="costco">Costco</Link></li>
                <li><Link to="menards">Hardware</Link></li>
                <li><Link to="target">Target</Link></li>
            </ul>
        </div>
    );
}

