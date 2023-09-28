import React from "react";
import { Box, Input, Button, HStack, Select, Img } from "@chakra-ui/react";

export const BlogCard = () => {
  return (
    <Box>
      {/* 1 */}
      <HStack>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </HStack>

      {/* 2 */}
      <HStack>
        <Box>
          <Img src={"img"} />
        </Box>

        <Box>
          <Text>username</Text>
          <Text>category</Text>
          <Text>date</Text>
        </Box>
      </HStack>

      {/* 3 */}
      <Heading>title</Heading>

      {/* 4 */}
      <Text>content</Text>

      {/* 5 */}
      <Flex>
        <Box>
          <Box>likes</Box>
          <Box>comments</Box>
        </Box>

        <Button>Add Comment</Button>
      </Flex>

      {/* 6 */}
      <Box>
        {comment?.Map((el) => (
          <Box>
            <Flex>
              <Img />
              <Text>username</Text>
            </Flex>

            <Text>content</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
