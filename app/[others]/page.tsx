// To redirect a 404, or render a custom 404, use [others]. Any non-existant
// route will be served by the generic [others] route, which can be redirected
// to "/" or "/404". The latter will render the content of app/404/page.tsx,
// whose content you can design as you wish and will use layout.tsx. Here we
// just redirect home.

import { redirect } from "next/navigation";

/*
  simple 404 function to redirect bad URLs to home
*/
export default async function NotFound() {
  redirect("/"); // or "/404"
}
