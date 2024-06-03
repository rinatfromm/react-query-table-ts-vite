import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." className={styles.searchInput} />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;