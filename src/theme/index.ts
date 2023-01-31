import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  primaryColor: "teal",
  components: {
    Anchor: {
      defaultProps: {
        underline: false,
      },
    },
  },
};

export default theme;
