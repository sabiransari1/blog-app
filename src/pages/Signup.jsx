import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Input,
  VStack,
  FormControl,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { registerUser } from "../redux/auth/action";
import { Link } from "react-router-dom";

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
  const toast = useToast();

  useEffect(() => {
    {
      isLoading
        ? toast({
            title: `Loading...`,
            status: "loading",
            isClosable: true,
            position: "top",
            duration: 500,
          })
        : isError
        ? toast({
            title: `${errMessage}`,
            status: "error",
            isClosable: true,
            position: "top",
            duration: 1000,
          })
        : "";
    }
  }, [isLoading, isError]);

  const handleRegister = (e) => {
    e.preventDefault();

    let registerUserData = {
      username,
      avatar,
      email,
      password,
    };

    dispatch(registerUser(registerUserData)).then(() => {
      toast({
        title: `New User Registered Successfully`,
        status: "success",
        isClosable: true,
        position: "top",
        duration: 1000,
      });
    });
  };

  return (
    <Flex minW={"100wh"} minH={"100vh"} justify={"center"} align={"center"}>
      <Flex
        justify={"center"}
        align={"center"}
        w={"50%"}
        h={"50vh"}
        border={"2px"}
      >
        <form onSubmit={handleRegister}>
          <FormControl>
            <VStack spacing={"1rem"}>
              <Flex w={"100%"} gap={"1rem"}>
                <Button w={"50%"}>
                  <Link to={"/"}>Login</Link>
                </Button>
                <Button w={"50%"} colorScheme={"blue"}>
                  <Link to={"/signup"}>Register</Link>
                </Button>
              </Flex>

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

              <Button w={"100%"} type={"submit"}>
                Register
              </Button>
            </VStack>
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
};
