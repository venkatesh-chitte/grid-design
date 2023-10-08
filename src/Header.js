

function Header() {
    return (
        <>
            <header className="header">
                <div className='left'>
                    <div>
                        <a id="logo">EDYODA</a>
                        <p id="logo-stories-text">Stories</p>
                    </div>
                    <div>
                        <span id="dropdown-text">Explore Catogiries  </span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                <div className='right'>
                    <p className="header-para">EdYoda is a learning and knowledge sharing platform for techies</p>
                    <button className="btn">Go To Main Website</button>
                </div>
            </header>
        </>
    )
}

export default Header;