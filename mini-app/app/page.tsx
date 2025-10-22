import { description, title, url } from "@/lib/metadata";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${url}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${url}/icon.png`,
        button: {
          title: "Launch Mini App",
          action: {
            type: "launch_miniapp",
            name: title,
            url: url,
            splashImageUrl: `${url}/icon.png`,
            iconUrl: `${url}/icon.png`,
            splashBackgroundColor: "#000000",
            description: description,
            primaryCategory: "utility",
            tags: [],
          },
        },
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground mb-8">{description}</p>
        <Button asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Launch Mini App
          </a>
        </Button>
      </section>
      <section className="max-w-3xl w-full">
        <Image
          src="/icon.png"
          alt="Mini App icon"
          width={200}
          height={200}
          className="mx-auto rounded-full"
        />
      </section>
    </main>
  );
}
