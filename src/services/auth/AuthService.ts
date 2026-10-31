import { supabase } from "../supabase";

export class AuthService {
  static getSession() {
    return supabase.auth.getSession();
  }

  static signIn(
  email: string,
  password: string
) {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}

  static signOut() {
    return supabase.auth.signOut();
  }

  static onAuthStateChange(
  callback: (
    session: import("@supabase/supabase-js").Session | null
  ) => void
) {
  return supabase.auth.onAuthStateChange(
    (_event, session) => {
      callback(session);
    }
  );
}
}