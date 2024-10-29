"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect ke /dashboard/landing-pages saat halaman utama dibuka
    router.push("pages/dashboard/landing-pages");
  }, [router]);

  return null; // Tidak menampilkan apa-apa karena halaman ini hanya digunakan untuk redirect
}
