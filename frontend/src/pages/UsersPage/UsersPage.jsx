import usePageAnimation from "../../hooks/usePageAnimation.js";
export const UsersPage = () => {
  const container = usePageAnimation();
  return(
    <section ref={container}>
      <h1>This is Users Page</h1>
    </section>
  )
};

export default UsersPage