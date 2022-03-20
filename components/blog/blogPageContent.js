export const BlogPageContent = (props) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </div>
  );
};
