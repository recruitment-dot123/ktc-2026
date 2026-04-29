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
    await sheet.addRow({
      ...registerValidator.data,
      date: new Date().toISOString(),
    });
    return Response.json("OK");
  } catch (error: any) {
    console.log(error.message);
    return Response.json("Something went wrong", {
      status: 500,
    });
  }
}
