import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { User, fetchUser } from "./utils";
import { useDebounce } from "./hooks";
import { SearchBar } from "./SearchBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Demo() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const res = await fetchUser(debouncedSearch);
      console.log(res);
      setUsers(res);

      setLoading(false);
    };
    getUser();
  }, [debouncedSearch]);

  return (
    <Box>
      <SearchBar onChange={setSearch} />
      {loading && <div>Loading...</div>}
      {/* {!loading && users.map((user) => {
            return <div key={user.id}>{user.name}</div>
        })} */}
      {!loading && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                   <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
