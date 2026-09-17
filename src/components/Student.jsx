function Student() {
  const imieNazwisko = "Jan Kowalski";
  const klasa = "3A";
  const specjalizacja = "Programowanie aplikacji internetowych";

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", maxWidth: "300px" }}>
      <h2>{imieNazwisko}</h2>
      <p><strong>Klasa:</strong> {klasa}</p>
      <p><strong>Specjalizacja:</strong> {specjalizacja}</p>
    </div>
  );
}

export default Student;