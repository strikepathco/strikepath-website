import type { NextRequest } from 'next/server'

// pass-through — add rewrite/redirect/auth logic here in later phases
export function proxy(_request: NextRequest) {}

export const config = {
  matcher: [],
}
