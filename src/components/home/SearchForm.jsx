import React from "react";

function SearchForm() {
    return (
        <div className="search-form">
            <input type="text" name="search-city" placeholder="City" />
            <input type="number" name="search-bed-number" placeholder="Beds" />
            <input type="number" name="search-price-limit" placeholder="Price limit" />
            <button>Search</button>
        </div>
    );
}

export default SearchForm;