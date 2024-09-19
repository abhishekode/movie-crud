import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const cookies = request.cookies.get("user");

    const redirectIfNeeded = (role: string, path: string) => {
        const user = cookies ? JSON.parse(cookies?.value) : null;
        console.log('user', user)
        if (user && user?.role === role) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL(path, request.url));
        }
    };

    const path = request.nextUrl.pathname;

    if (path.startsWith('/')) {
        return redirectIfNeeded("admin", '/auth');
    }


}
