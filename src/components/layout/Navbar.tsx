import { Anchor, Flex, Group, Header } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

const Navbar = () => {
  const links: { href: string; title: string }[] = [
    { href: "/auth/login", title: "Login" },
    { href: "/auth/register", title: "Register" },
  ];
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <Header height={60}>
      <Group
        position="apart"
        sx={(theme) => ({
          height: "100%",
          padding: matches ? "0 3rem" : "0 14rem",
        })}
      >
        <Flex>
          <Anchor
            component={Link}
            href={"/"}
            size={matches ? "lg" : "xl"}
            weight={matches ? 600 : 700}
          >
            Store
          </Anchor>
        </Flex>
        <Flex columnGap={"md"}>
          {links.map((link) => (
            <Anchor
              key={link.href}
              component={Link}
              href={link.href}
              size={matches ? "md" : "xl"}
              weight={600}
            >
              {link.title}
            </Anchor>
          ))}
        </Flex>
      </Group>
    </Header>
  );
};

export default Navbar;
