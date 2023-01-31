import BacktoTop from "@/components/common/BacktoTop";
import { RouterTransition } from "@/components/common/RouterTransition";
import Layout from "@/components/layout";
import theme from "@/theme";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} withNormalizeCSS>
        <BacktoTop />
        <RouterTransition />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </QueryClientProvider>
  );
}
