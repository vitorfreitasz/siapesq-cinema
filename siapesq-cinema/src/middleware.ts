import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/login";
const publicRoutes = ["/", "/login", "/register"];

export async function middleware(request: NextRequest) {
  console.log("--Middleware--");
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => path == route);
  const token = request?.cookies?.get("token");
  console.log(publicRoute);
  if (!token && publicRoute) {
    //  Rota pública, sem token
    //  Deixa passar
    return NextResponse.next();
  }

  if (!token && !publicRoute) {
    //  Rota privada e sem token
    //  Redireciona ele para rota de login.
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if (token && publicRoute) {
    //  Rota pública, e com token.
    //  Impede ele de ir para cadastro, login ou root, se já estiver logado.
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/home";
    return NextResponse.redirect(redirectUrl);
  }

  if (token && !publicRoute) {
    //  Rota privada, e com token.
    // Verificar validade do token, se for válido deixa passar, se não, manda pro login.
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!); // Pega chave da .env, e transforma de string para o tipo que a lib jose usa.
    const validToken = jwtVerify(token?.value, secret);

    if (!validToken) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
