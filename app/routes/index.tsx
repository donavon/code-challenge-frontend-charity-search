import type { DataFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export async function loader(_: DataFunctionArgs) {
  return redirect("/charities");
}
