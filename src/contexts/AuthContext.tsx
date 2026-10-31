import { useEffect, useState, type ReactNode } from "react";

import type { Session } from "@supabase/supabase-js";

import { AuthService } from "../services";

import { AuthContext } from "./auth-context";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      const {
        data: { session },
      } = await AuthService.getSession();

      setSession(session);
      setLoading(false);
    }

    loadSession();

    const {
      data: { subscription },
    } = AuthService.onAuthStateChange((session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function signOut() {
    await AuthService.signOut();

    setSession(null);
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
