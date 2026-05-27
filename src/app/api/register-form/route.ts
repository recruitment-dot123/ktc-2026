import { registerPostSchema } from "@/lib/schemas";
import { doc } from "@/lib/spreadsheet";

export async function POST(request: Request) {
  const data = await request.json();
  const registerValidator = registerPostSchema.safeParse(data);
  if (!registerValidator.success)
    return Response.json("Invalid data", {
      status: 400,
    });
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const { utm_source, utm_medium, utm_campaign, utm_content, ...rest } =
      registerValidator.data;
    await sheet.addRow({
      ...rest,
      date: new Date().toISOString(),
      utm_source: utm_source ?? "",
      utm_medium: utm_medium ?? "",
      utm_campaign: utm_campaign ?? "",
      utm_content: utm_content ?? "",
    });
    return Response.json("OK");
  } catch (error: any) {
    console.log("ERROR MESSAGE:", error.message);
    return Response.json(error.message || "Something went wrong", {
      status: 500,
    });
  }
}
