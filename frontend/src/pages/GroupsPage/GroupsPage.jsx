import usePageAnimation from "../../hooks/usePageAnimation.js";



const GroupsPage = () => {

  const container = usePageAnimation();

  return(
    <section ref={container}>
      <h1>This is groups page</h1>

    </section>
  )
}

export default GroupsPage