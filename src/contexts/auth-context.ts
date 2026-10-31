import { createContext } from "react";

import type { Session } from "@supabase/supabase-js";

export interface AuthContextData {
  session: Session | null;

  loading: boolean;

  signOut(): Promise<void>;
}

export const AuthContext =
  createContext({} as AuthContextData);