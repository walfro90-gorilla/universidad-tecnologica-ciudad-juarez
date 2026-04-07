export default function Footer() {
  return (
    <footer className="bg-slate-800 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>Contacto: contacto@utcj.edu.mx</p>
        <p>© {new Date().getFullYear()} Universidad Tecnológica de Ciudad Juárez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}