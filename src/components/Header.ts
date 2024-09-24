export default function Header() {
  const header: HTMLElement = document.createElement("header");
  header.innerHTML = `
   <div>Touch header</div>
  `;
  return header;
}
