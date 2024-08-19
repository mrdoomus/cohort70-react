const MAX_DIGITS = 5;

function SecondsCounter({ seconds }) {
  const secondsToString = String(seconds).padStart(MAX_DIGITS, "0");
  const splittedSeconds = secondsToString.split("");

  return (
    <div style={{ display: "flex" }}>
      <i className="fa-solid fa-paint-roller"></i>
      {splittedSeconds.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
}

export default SecondsCounter;
