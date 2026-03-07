import { sileo } from "sileo";
import { supabase } from "../supabaseClient";
export const RegistrationForm = async (
  name: any,
  email: any,
  password: any,
  role: string,
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
          role: role,
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
        description: `successfully registered user ${data?.user?.user_metadata.display_name} with the role of ${data?.user?.user_metadata.role}`,
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

export const LoginForm = async (name: any, password: any, role: any) => {
  if (!name && !password) {
    sileo.error({
      title: "failed",
      description: "input shouldn't be empty",
      styles: {
        description: "text-red-500! first-letter:uppercase",
        title: "text-red-500!",
      },
    });
    return { stats: "failed" };
  }
  try {
    const formattedName = `${name.trim().toLowerCase()}@gmail.com`;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formattedName,
      password: password,
    });

    if (error) {
      sileo.error({
        title: "failed",
        description: "invalid username or password",
        styles: {
          description: "text-red-500! first-letter:uppercase",
          title: "text-red-500! uppercase",
        },
      });
      return { stats: "failed" };
    }

    const userRole = data?.user?.user_metadata?.role;

    if (userRole !== role) {
      await supabase.auth.signOut();
      sileo.error({
        title: "failed",
        description: `Invalid username or password`,
        styles: {
          title: "text-red-500!",
          description: "text-red-500!",
        },
      });

      return { stats: "failed" };
    }

    sileo.success({
      title: "success",
      description: `Successfully logged in as a ${userRole}`,
    });

    return { stats: "success" };
  } catch (e: any) {
    sileo.error({
      title: "failed",
      description: `error due to: ${e.message}`,
      styles: {
        description: "text-red-500! first-letter:capitalize",
        title: "text-red-500!",
      },
    });
    return { stats: "failed" };
  }
};
