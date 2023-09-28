import React, { useState } from "react";
import { Box, Input, Button, HStack, Select } from "@chakra-ui/react";

export const Homepage = () => {
  const [query, setQuery] = useState("");

  return (
    <Box>
      {/* 1 */}
      <HStack>
        <Button>CREATE BLOG</Button>
        <Button>RESET PASSWORD</Button>
      </HStack>

      {/* 2 */}
      <HStack>
        <Input
          type={"text"}
          placeholder={"Search..."}
          variant={"filled"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Select>
          <option>Filter By Category</option>
          <option></option>
        </Select>

        <Select>
          <option value={""}>Sort By Date</option>
          <option value={"asc"}>Ascending</option>
          <option value={"desc"}>Descending</option>
        </Select>
      </HStack>

      {/* 3 */}
      <BlogList />
    </Box>
  );
};
