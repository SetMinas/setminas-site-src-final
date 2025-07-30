import { google } from "googleapis";
import { JWT } from "google-auth-library";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { values } = await req.json() as { values: string[] }; // ex: ["Tiago", "tiago@email.com"]

    const auth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL!,
      key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID!,
      range: "Newsletter!A3", // Começa a partir da linha 3
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS", // Adiciona nova linha
      requestBody: {
        values: [values],
      },
    });

    return NextResponse.json({
      message: "Linha adicionada com sucesso",
      updatedRange: response.data.updates?.updatedRange,
    });
  } catch (error: any) {
    console.error("Erro ao adicionar linha:", error);
    return NextResponse.json(
      { error: "Erro interno", detalhe: error.message },
      { status: 500 }
    );
  }
}
