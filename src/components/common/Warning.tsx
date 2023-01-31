import { Alert } from "@mantine/core";

type Props = { title?: string; description: string };

const Warning = ({ description, title = "Error!" }: Props) => {
  return (
    <Alert title={title} color="red" sx={{ width: "70%", margin: "auto" }}>
      {description}
    </Alert>
  );
};

export default Warning;
