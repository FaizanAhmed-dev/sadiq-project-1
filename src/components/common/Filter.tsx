import React from "react";
import { Input } from "@/components/ui/input";

interface FilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Filter: React.FC<FilterProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-end my-4">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;
