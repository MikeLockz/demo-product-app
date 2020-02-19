import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Flex,
  Input,
  Form,
  Field,
  Button,
  Heading,
  Text,
  Card
} from "rimble-ui";
// import CodefiButton from "@rimble/codefi-button";
import Accordion from "@rimble/codefi.accordion";
import theme from "@rimble/codefi-themes";

const GradientBox = styled(Box)`
  background-image: ${props => props.theme.colors.gradient1};
`;

const GradientButton = styled(Button)`
  background-image: ${props => props.theme.colors.gradient1};
`;

const GradientCircle = styled(Box)`
  background-image: ${props => props.theme.colors.gradient1};
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin-top: -135px;
`;

const WhiteCard = styled(Card)`
  background-color: #fff;
`;

function App() {
  console.log("theme", theme);
  return (
    <ThemeProvider theme={theme}>
      <Flex alignItems={"stretch"} height={"100%"}>
        <GradientBox width={"500px"} />
        <Flex justifyContent={"center"} flex="1" bg={"gray100"}>
          <Flex flexDirection={"column"} justifyContent={"center"}>
            <WhiteCard maxWidth={"400px"} bg={"white"} p={6}>
              <Flex flexDirection={"column"}>
                <Flex justifyContent={"center"}>
                  <GradientCircle mb={4} />
                </Flex>
                <Heading>Welcome,</Heading>
                <Text>Sign in to your account to view your assets.</Text>
                <Form mt={5}>
                  <Field label={"Email"} width="100%">
                    <Input width="100%" type="text" required />
                  </Field>
                  <Field label={"Password"} width="100%">
                    <Input width="100%" type="password" required />
                  </Field>
                  <Accordion
                    heading={<Text>View Terms and Conditions</Text>}
                    content={
                      <>
                        <Text>I am the content line 1.</Text>
                        <Text>I am the content line 2.</Text>
                        <Text>I am the content line 3.</Text>
                        <Text>I am the content line 4.</Text>
                      </>
                    }
                  />
                  <GradientButton width={"100%"} bg={"primary"} mt={4}>
                    Sign in
                  </GradientButton>
                </Form>
              </Flex>
            </WhiteCard>
          </Flex>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
