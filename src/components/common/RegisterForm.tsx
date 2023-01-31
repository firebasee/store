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

const RegisterForm = () => {
  const matches = useMediaQuery("(max-width: 550px)");

  return (
    <form>
      <Title align="center">Register</Title>
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
        <PasswordInput label="Password" placeholder="***************" />
        <PasswordInput label="Confirm Password" placeholder="***************" />
        <Button type="submit">Register</Button>
        <Divider />
        <Anchor
          component={Link}
          href={"/auth/login"}
          weight={600}
          size="sm"
          sx={{ textTransform: "capitalize" }}
        >
          login
        </Anchor>
      </Stack>
    </form>
  );
};

export default RegisterForm;
