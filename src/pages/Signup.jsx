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
import { registerUser } from "../redux/auth/action";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
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

  const handleRegister = (e) => {
    e.preventDefault();

    let registerUserData = {
      username,
      avatar,
      email,
      password,
    };

    console.log(registerUserData);
    // dispatch(registerUser(registerUserData));
  };

  return (
    <Box minW={"100wh"} minH={"100vh"}>
      <Flex>
        <form onSubmit={handleRegister}>
          <VStack spacing={"1rem"}>
            <FormControl>
              <Input
                type={"text"}
                placeholder={"Username"}
                variant={"filled"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <Input
                type={"text"}
                placeholder={"Avatar"}
                variant={"filled"}
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />

              <Input
                type={"email"}
                placeholder={"Email"}
                variant={"filled"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type={"password"}
                placeholder={"password"}
                variant={"filled"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button type={"submit"}>Register</Button>
            </FormControl>
          </VStack>
        </form>
      </Flex>
    </Box>
  );
};
