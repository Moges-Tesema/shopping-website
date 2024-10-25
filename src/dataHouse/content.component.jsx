import { sections } from "./directory.data";
import ContentProducer from "./ContentProducer.jsx";
const Content = () => {
  return (
    <>
      {sections.map((section) => {
        let key = section.id;
        return <ContentProducer key={key} section={section} />;
      })}
    </>
  );
};
export default Content;
