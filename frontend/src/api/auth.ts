import { sileo } from "sileo";
import { supabase } from "../supabaseClient";
export const RegistrationForm = async (
  name: any,
  email: any,
  password: any,
) => {
  try {
    const mail = `${email}@gmail.com`;
    mail.trim().toLowerCase();
    const { data, error } = await supabase.auth.signUp({
      email: mail,
      password: password,
      options: {
        data: {
          display_name: name,
        },
      },
    });

    if (error) {
      sileo.error({
        description: error.message,
        title: "failed",
        styles: {
          description: "text-red-500!",
          title: "text-red-500!",
        },
      });
      return { stats: "failed" };
    } else {
      sileo.success({
        description: `successfully registered user ${data?.user?.user_metadata.display_name}`,
        title: "success",
      });
      return { stats: "success" };
    }
  } catch (e: any) {
    sileo.error({
      title: "failed",
      description: `error due to: ${e.message}`,
      styles: {
        description: "text-red-500!",
        title: "text-red-500!",
      },
    });
    return { stats: "failed" };
  }
};

export const LoginForm = async (name: any, password: any) => {
  if (!name && !password) {
    sileo.error({
      title: "failed",
      description: "input shouldn't be empty",
      styles: {
        description: "text-red-500! capitalize",
        title: "text-red-500!",
      },
    });
    return { stats: "failed" };
  }
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: name,
      password: password,
    });

    if (error) {
      sileo.error({
        description: "invalid username or password",
        title: "failed",
        styles: {
          description: "text-red-500! capitalize",
          title: "text-red-500!",
        },
      });
      return { stats: "failed" };
    } else {
      sileo.success({
        description: "successfully login",
        title: "success",
      });
      return { stats: "success" };
    }
  } catch (e: any) {
    sileo.error({
      title: "failed",
      description: `error due to: ${e.message}`,
      styles: {
        description: "text-red-500! capitalize",
        title: "text-red-500!",
      },
    });
    return { stats: "failed" };
  }
};
