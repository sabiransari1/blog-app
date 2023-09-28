import React, { useState } from "react";
import {
  Flex,
  Input,
  VStack,
  FormControl,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { loginUser } from "../redux/auth/action";
import { Link } from "react-router-dom";

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
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();

    let loginUserData = {
      email,
      password,
    };

    // dispatch(loginUser(loginUserData));
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
        <form onSubmit={handleLogin}>
          <FormControl>
            <VStack spacing={"1rem"}>
              <Flex w={"100%"} gap={"1rem"}>
                <Button w={"50%"} colorScheme={"blue"}>
                  <Link to={"/"}>Login</Link>
                </Button>
                <Button w={"50%"}>
                  <Link to={"/signup"}>Register</Link>
                </Button>
              </Flex>

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

              <Button w={"100%"} type={"submit"}>
                Login
              </Button>
            </VStack>
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
};
