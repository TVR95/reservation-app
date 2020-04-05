import React from "react";

function SearchForm() {
    return (
        <div className="banner__search">
            <form action="/search">
                <input type="text" name="search-city" placeholder="City" />
                <input type="number" name="search-bed-number" placeholder="Beds" />
                <input type="number" name="search-price-limit" placeholder="Price limit" />
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;