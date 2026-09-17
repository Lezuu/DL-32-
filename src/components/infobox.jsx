function InfoBox() {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", maxWidth: "400px" }}>
      <h2>Ważne Informacje</h2>
      
      <p>
        Witaj w naszym systemie! Poniżej znajdziesz kluczowe wskazówki dotyczące
        korzystania z aplikacji.
      </p>
      
      <p>
        Upewnij się, że zapoznałeś się ze wszystkimi punktami przed przejściem
        do kolejnych kroków.
      </p>

      <ul>
        <li>Pierwsza zasada korzystania z systemu</li>
        <li>Druga zasada – pamiętaj o regularnym zapisywaniu zmian</li>
        <li>Trzecia zasada – w razie pytań skontaktuj się z pomocą</li>
      </ul>
    </div>
  );
}

export default InfoBox;