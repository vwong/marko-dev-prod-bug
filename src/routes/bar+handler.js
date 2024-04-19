import fragment from "./components/fragment.marko";

export const GET = (context) =>
  new Response(
    fragment.render({
      $global: context,
    }),
    {
      headers: {
        "Content-Type": "text/html",
        "page-number": context.url.searchParams.get("page") || "1",
      },
    },
  );
