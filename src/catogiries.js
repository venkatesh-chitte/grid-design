
function Catogiries() {
    return (
        <>
            <h1>Treanding posts</h1>
            <i className="fa-solid fa-filter" ></i>
            <span id="filter-text">Filter by Category</span><br></br><br></br>
            <button className="button active-category">All</button>
            <button className="button">Artificial Intelligence</button>
            <button className="button">Cloud Computing</button>
            <button className="button">DevOps</button>
            <button className="button">Programming Languages</button>
            <button className="button">Mobile Application Development</button>
            <button className="button">Technology and Tools</button>
            <button className="button">Get a Job in a Tech Company</button>
            <button className="button">Others</button>
        </>
    )
}

export default Catogiries;