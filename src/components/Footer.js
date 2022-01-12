function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-0.5 bg-gray-300 text-center fixed inset-x-0 bottom-0 opacity-30">
      <div>
        <p className="text-black-500 font-semibold">
          Copyright&copy; {footerYear} by{" "}
          <a
            href="https://alfiofedericodp.netlify.app/"
            className="underline hover:text-gray-700 "
            target="_blank"
            rel="noreferrer"
            
          >
            Federico
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer
