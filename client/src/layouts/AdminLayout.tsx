import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { Menu } from "lucide-react";
import { baseApi } from "@/app/api/baseApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { logout } from "@/features/auth/authSlice";

const links = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/orders", label: "Sifarişlər" },
  { to: "/admin/products", label: "Məhsullar" },
  { to: "/admin/categories", label: "Kateqoriyalar" },
  { to: "/admin/users", label: "İstifadəçilər" },
];

export default function AdminLayout() {
  const [open, setOpen] = useState(false);
  const user = useAppSelector((s) => s.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
    navigate("/login");
  }

  return (
    <div className="flex min-h-screen bg-paper">
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-60 transform bg-forest p-5 text-cream transition-transform md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8">
          <p className="font-display text-3xl">savor.</p>
          <p className="text-xs font-bold uppercase tracking-widest text-saffron">
            Admin
          </p>
        </div>
        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-3 py-2.5 text-sm ${
                  isActive
                    ? "bg-saffron font-bold text-russet"
                    : "text-cream hover:bg-cream/10"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-cream bg-paper px-4 py-3">
          <button
            className="flex items-center gap-2 rounded-md bg-cream px-3 py-1.5 text-sm font-bold text-russet md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Menyunu aç"
          >
            <Menu size={16} /> Menyu
          </button>
          <div className="ml-auto flex items-center gap-4 text-sm">
            <Link to="/" className="font-bold text-fire underline">
              Sayta qayıt
            </Link>
            <span className="hidden text-russet sm:inline">{user?.name}</span>
            <button
              onClick={handleLogout}
              className="rounded-md border border-russet px-3 py-1.5 font-bold text-russet"
            >
              Çıxış
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 text-russet md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}