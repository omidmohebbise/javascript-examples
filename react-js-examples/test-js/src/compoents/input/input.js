export const DSInput = (props) => {
  return (
    <div id={"ds-input" + props?.id}>
      <input {...props} />
    </div>
  );
};
