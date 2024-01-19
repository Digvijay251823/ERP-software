import "../globals.css";
import MDSideNav from "@/components/MDSideNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="md:flex ">
      <div className={`md:w-[20vw] hidden md:flex justify-center`}>
        <MDSideNav />
      </div>
      <div className="md:w-[80vw] bg-gray-50 min-h-screen p-3">{children}</div>
    </section>
  );
}
