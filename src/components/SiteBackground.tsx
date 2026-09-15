export default function SiteBackground() {
  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ zIndex: -2, backgroundImage: "url(/bg-construction.jpg)" }}
      ></div>
      <div className="fixed inset-0 bg-mastertop-dark/50 backdrop-blur-sm" style={{ zIndex: -1 }}></div>
    </>
  );
}
