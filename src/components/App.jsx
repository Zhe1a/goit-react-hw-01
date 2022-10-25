import Main from "./main/main";

export const App = () => {
  return (
    <div style={alertStyles}>
    <Main/>
  </div>
  );
};


const alertStyles = {
  margin: "auto",
  display: "flex",
  padding: "12px 16px",
  justifyContent: "center",
};