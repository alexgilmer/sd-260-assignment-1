import React from 'react';

const Header = (props) => {
  return ( 
    <header className="header">
      <a href="index.html">
        <img
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
          border="0"
        />
      </a>
      <form id="search" className="search" onSubmit={props.handleSubmitCB}>
        <input
          type="search"
          placeholder="Search for a title..."
          onChange={props.handleInputCB}
          value={props.inputText}
        />
      </form>
    </header>
   );
}
 
export default Header;
