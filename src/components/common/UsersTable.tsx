import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Filter from "./Filter";
import { useState} from "react";
import { SkeletonCard } from "./Loader";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UsersTableProps {
  data: User[];
  isLoading: boolean;
}

const UsersTable: React.FC<UsersTableProps> = ({ data, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredData = data.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <div className="loader w-full">
          <SkeletonCard />
        </div>
      ) : (
        <>
          {filteredData.length === 0 ? (
            <div className="no-data">No data found</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-sidebarColor">ID</TableHead>
                  <TableHead className="text-sidebarColor">Name</TableHead>
                  <TableHead className="text-sidebarColor">Email</TableHead>
                  <TableHead className="text-sidebarColor">Phone</TableHead>
                  <TableHead className="text-sidebarColor">Website</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map(({ id, name, email, phone, website }) => (
                  <TableRow key={id}>
                    <TableCell className="font-medium">{id}</TableCell>
                    <TableCell className="font-medium">{name}</TableCell>
                    <TableCell className="font-medium">{email}</TableCell>
                    <TableCell className="font-medium">{phone}</TableCell>
                    <TableCell className="font-medium">{website}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </>
      )}
    </>
  );
};

export default UsersTable;
