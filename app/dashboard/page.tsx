import { auth } from "../../auth";
import { redirect } from "next/navigation";

export default async function DashboardRedirect() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const role = (session.user as any).role;

  if (role === "STUDENT") redirect("/dashboard/student");
  if (role === "TEACHER") redirect("/dashboard/teacher");
  if (role === "PRINCIPAL") redirect("/dashboard/principal");
  if (role === "RECEPTION") redirect("/dashboard/reception");
  if (role === "COORDINATOR") redirect("/dashboard/coordinator");
  
  redirect("/dashboard/parent"); 
}