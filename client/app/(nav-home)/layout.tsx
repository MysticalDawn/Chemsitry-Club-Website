import "@/app/ui/global.css";
import { Poppins } from "next/font/google";
import NavbarCustom from "../components/desktop/navbar-custom";
import "bootstrap/dist/css/bootstrap.min.css";
import kfupm from "../../public/home/kfupm.jpeg";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <div
          className="main-nav po"
          style={{
            backgroundImage: `url(${kfupm.src})`,
            height: "100vh",
            width: "100vw",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginRight: "1rem",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
