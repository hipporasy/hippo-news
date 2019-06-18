import Link from './ActiveLink.js';

const Header = (props) => {

  const { routes } = props;
  return (<div className="topnav">
    <a href="/" style={{ height: "40", float: "left", marginLeft: "10%", marginTop: 10, padding: "0!important" }}>
      <img
        height="40"
        src="../static/white_logo.png"
      />
    </a>
    {Object.keys(routes).map((eachKey) => (
      <Link activeClassName='active' href={routes[eachKey].path}>
        <a className='nav-link' href={routes[eachKey].path}>{routes[eachKey].name}</a>
      </Link>
    ))}
    <style jsx global>{
      `
      @import url('https://fonts.googleapis.com/css?family=Martel+Sans&display=swap');
      .topnav {
          width:100%;
          font-family: 'Martel Sans', sans-serif;
          padding: 0;
          margin: 0;
          background-image: linear-gradient(to right, #606c88 , #3f4c6b);
          overflow: hidden;
        }
        .topnav a {
          text-decoration: none;
          float: left;
          color: #f2f2f2;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }
        .topnav a:hover {

          color: black;
        }
        .topnav a.active {
          color: black;
        }`
    }
    </style>
  </div>)
}

export default Header
