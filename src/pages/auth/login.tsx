import LoadingIndicator from "@/components/common/LoadingIndicator";
import dynamic from "next/dynamic";
import Head from "next/head";

const LoginForm = dynamic(() => import("@/components/common/LoginForm"), {
  ssr: true,
  loading() {
    return <LoadingIndicator />;
  },
});

const login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <LoginForm />
    </>
  );
};

export default login;
