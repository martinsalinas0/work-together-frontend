export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Your dashboard nav/sidebar/header */}
      <nav>Dashboard Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
