function Footer({ studentName, studentNim }) {
  return (
    <footer className="footer">
      <p>
        TO DO LIST • Dikembangkan oleh <strong>{studentName}</strong> ({studentNim})
      </p>
    </footer>
  );
}

export default Footer;