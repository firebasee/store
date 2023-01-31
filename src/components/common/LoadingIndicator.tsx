import { Center, Loader } from "@mantine/core";

const LoadingIndicator = () => {
  return (
    <Center mx="auto">
      <Loader variant="bars" />
    </Center>
  );
};

export default LoadingIndicator;
