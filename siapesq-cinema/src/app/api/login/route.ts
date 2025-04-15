import { generateToken } from "@/constants/auth";
import { users } from "@/constants/users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json(
      { message: "Usuário e senha são obrigatórios." },
      { status: 400 }
    );
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return NextResponse.json(
      { message: "Credenciais inválidas." },
      { status: 401 }
    );
  }
  const token = generateToken({ username });

  return NextResponse.json(
    { message: "Login realizado com sucesso!", token: token },
    { status: 200 }
  );
}
