export const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <p>{`Blog React @${anoAtual}`}</p>
    </footer>
  );
};
