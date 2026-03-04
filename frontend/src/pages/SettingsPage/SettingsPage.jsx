import usePageAnimation from "../../hooks/usePageAnimation.js";



export const SettingsPage = () => {

  const container = usePageAnimation();

  return(
    <section ref={container}>
      <h1>This is Settings Page</h1>
    </section>
  )
};

export default SettingsPage;