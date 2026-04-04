export const metadata = { robots: { index: false, follow: false } };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div style={{ scrollBehavior: "smooth" }}>{children}</div>;
}
