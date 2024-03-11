import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(function middleware(request) {
    const token = request.nextauth.token
    console.log(token.user);
    const role = token.user.role
    if(role == "STUDENT" && !request.nextUrl.pathname.startsWith('/student')){
        return NextResponse.redirect("http://localhost:3000/student")
    //     return NextResponse.rewrite(new URL('/student', request.url));
    }else if(role == "ADVISOR" && !request.nextUrl.pathname.startsWith('/student')){
        return NextResponse.redirect("http://localhost:3000/advisor")

    // //     return NextResponse.rewrite(new URL('/advisor', request.url));
    }else if(role == "PROCTOR" && !request.nextUrl.pathname.startsWith('/proctor')){
        return NextResponse.redirect("http://localhost:3000/proctor")
    // //     return NextResponse.rewrite(new URL('/proctor', request.url));
    }
    console.log(request.nextUrl.pathname.startsWith('/student'));
    // const url = request.nextUrl.clone()
    // url.pathname = '/student'
    // console.log(request.nextUrl.pathname !== "/student");
    // console.log(request.nextUrl.clone());
    // return NextResponse.rewrite(new URL('/', request.url));
    // if(request.nextUrl.pathname != '/student'){
        // return NextResponse.redirect("http://localhost:3000/student")
    // }
    // return NextResponse.rewrite(new URL('/student', request.url));


//   const token = request.nextauth.token;
  
});

export const config = { matcher: ['/proctor/:path*', '/student/:path*','/advisor/:path*'] };