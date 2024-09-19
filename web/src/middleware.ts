import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookies = request.cookies.get("user");
  const user = cookies ? JSON.parse(cookies.value) : null;

  const path = request.nextUrl.pathname;

  // Check for home page
  if (path === '/') {
    if (!user) {
      return NextResponse.redirect(new URL('/auth', request.url));
    }
    return NextResponse.next();
  }

  // Check for admin routes
  if (path.startsWith('/admin')) {
    if (user && user.role === 'admin') {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/auth', request.url));
    }
  }

  // For all other paths, allow the request to proceed
  return NextResponse.next();
}