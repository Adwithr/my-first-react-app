function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
}

function ButtonList() {
  return (
    <>
      <Button text="click me!" color="red" fontSize="12" />
      <Button text="Dont click me!" color="blue" fontSize="26" />
    </>
  );
}

export default ButtonList;
