import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <ul
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Link to="/">
        <li style={{listStyle: 'none', marginRight: '10px'}}>Home</li>
      </Link>
      <Link to="/about">
        <li style={{listStyle: 'none'}}>About</li>
      </Link>
    </ul>
  </div>
)

export default Header
