import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const token = request.cookies.get('token');

  const isTokenValid = token && token?.value !== 'undefined';

  const guestRoutes = ['/'];

  if (guestRoutes.includes(url)) {
    if (isTokenValid) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  if (!isTokenValid) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // '/home',
    '/login',
    '/register',
    '/dashboard',
    '/appointment-scheduler',
    '/events/:path*',
    '/appointment/:path*',
    '/interested-attendees/:path*',
    '/seat-organization/:path*',
    '/sites/:path*',
    '/users/:path*',
    '/questions/:path*',
  ],
};