import { AppShell, Container } from "@mantine/core";
import Navbar from "./Navbar";
type Props = {
  children: React.ReactNode;
};
const index: React.FC<Props> = ({ children }) => {
  return (
    <AppShell header={<Navbar />}>
      <Container size={"lg"}>{children}</Container>
    </AppShell>
  );
};

export default index;
