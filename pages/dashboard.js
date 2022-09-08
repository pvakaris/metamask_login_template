import Head from "next/head";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { isAuthenticated, logout, user } = useMoralis();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/');
    }
  }, [isAuthenticated]);
  if (isAuthenticated) {
    return (
      <>
        <Head>
          <title>Dashboard</title>
        </Head>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
          bgGradient="linear(to-br, red.400, orange.300)"
        >
          <Text fontSize="5xl" fontWeight="bold" color="white">
            Dashboard
          </Text>
          <Text fontSize="md" color="white" pb="4">
            {" "}
            Your eth address is: {user.get("ethAddress")}
          </Text>
          <Button colorScheme="gray" onClick={logout}>
            Logout
          </Button>
        </Flex>
      </>
    );
  }
}
