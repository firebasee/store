import LoadingIndicator from "@/components/common/LoadingIndicator";
import dynamic from "next/dynamic";
import Head from "next/head";

const RegisterForm = dynamic(() => import("@/components/common/RegisterForm"), {
  ssr: true,
  loading() {
    return <LoadingIndicator />;
  },
});

const register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <RegisterForm />
    </>
  );
};

export default register;
