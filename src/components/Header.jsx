
const Header = ({ onSearch }) => {


  return (
    <header className="header">
      {/* Add your logo or website title here */}
      <span>Your Website Title</span>
      <div className="search-box">
        <input
          type="text"
          id="search-input"
          placeholder="Enter location"
        />
        <button>Search
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v15h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H8V7h11v10z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
