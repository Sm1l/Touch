export default function Header() {
  const header: HTMLElement = document.createElement("header");
  header.innerHTML = `
   <h1>Welcome to Our Touch Landing Page</h1>
  `;
  return header;
}
