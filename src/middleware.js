import { withAuth} from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(function middleware(request) {
    const token = request.nextauth.token
    const role = token.user.role
    if(role == "STUDENT" && !request.nextUrl.pathname.startsWith('/student')){
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/student`)
    }else if(role == "ADVISOR" && !request.nextUrl.pathname.startsWith('/advisor')){
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/advisor`)
    }else if(role == "PROCTOR" && !request.nextUrl.pathname.startsWith('/proctor')){
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/proctor`)
    }
});

export const config = { matcher: ['/proctor/:path*', '/student/:path*','/advisor/:path*','/:path*'] };