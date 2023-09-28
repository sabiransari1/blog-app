import React, { useState } from "react";
import {
  Box,
  Flex,
  Input,
  VStack,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { loginUser } from "../redux/auth/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError, errMessage, isAuth } = useSelector(
    (store) => ({
      isLoading: store.authReducer.isLoading,
      isError: store.authReducer.isError,
      errMessage: store.authReducer.errMessage,
      isAuth: store.authReducer.isAuth,
    }),
    shallowEqual
  );

  const handleLogin = (e) => {
    e.preventDefault();

    let loginUserData = {
      email,
      password,
    };

    // dispatch(loginUser(loginUserData));
  };

  return (
    <Box minW={"100wh"} minH={"100vh"}>
      <Flex justify={"center"} align={"center"}>
        <VStack spacing={"1rem"} w={"50%"}>
          <form onSubmit={handleLogin}>
            <FormControl>
              <Input
                type={"email"}
                placeholder={"Email"}
                variant={"filled"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type={"password"}
                placeholder={"Password"}
                variant={"filled"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button type={"submit"}>Login</Button>
            </FormControl>
          </form>
        </VStack>
      </Flex>
    </Box>
  );
};
