export { default } from "../welcome";

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/welcome",
      permanent: false,
    },
  };
}
