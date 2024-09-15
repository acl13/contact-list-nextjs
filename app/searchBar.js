"use client";
import { useState } from "react";

export const SearchBar = ({ onSearchTermChange }) => {
  const [term, setTerm] = useState("");
  return (
    <>
      <form>
        <input
          type="text"
          value={term}
          className="full-width vertical-margin-10 padding-2"
          placeholder="Search Contacts"
          onChange={(e) => {
            setTerm(e.target.value);
            onSearchTermChange(e.target.value);
          }}
        ></input>
      </form>
    </>
  );
};
