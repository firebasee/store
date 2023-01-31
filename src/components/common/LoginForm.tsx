import {
  Anchor,
  Button,
  Divider,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

const LoginForm = () => {
  const matches = useMediaQuery("(max-width: 550px)");

  return (
    <form>
      <Title align="center">Login</Title>
      <Stack
        sx={(theme) => ({
          width: matches ? "90%" : 400,
          margin: "1rem auto",
          padding: matches ? "1.3rem" : "2rem",
          border: "1px solid",
          borderColor: theme.colors.gray[2],
          borderRadius: theme.radius.lg,
          boxShadow: theme.shadows.xl,
        })}
      >
        <TextInput label="Username" placeholder="johndoe123" />
        <PasswordInput label="Password" placeholder="******" />
        <Button type="submit">Login</Button>
        <Divider />
        <Anchor
          component={Link}
          href={"/auth/register"}
          weight={600}
          size="sm"
          sx={{ textTransform: "capitalize" }}
        >
          register
        </Anchor>
      </Stack>
    </form>
  );
};

export default LoginForm;
