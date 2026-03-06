import { supabase } from "../supabaseClient";
export const RegistrationForm = async (name: any, password: any) => {
  try {
    console.log(name);
    const id = `${name}@gmail.com`;
    const signUp = await supabase.auth.signUp({
      email: id,
      password: password,
    });

    if (signUp) return { msg: "successfully created user", stats: "success" };
    return { msg: "failed to create user", stats: "failed" };
  } catch (e: any) {
    console.log(`error due to: ${e.message}`);
  }
};

export const LoginForm = async (name: any, password: any) => {
  try {
    console.log(name);
    const id = `${name}@gmail.com`;
    const login = await supabase.auth.signInWithPassword({
      email: id,
      password: password,
    });

    if (login) return { msg: `successfully sign in `, stats: "success" };
    return { msg: `invalid username or password! try again.`, stats: "failed" };
  } catch (e: any) {
    console.log(e.message);
  }
};
