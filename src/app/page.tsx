import Image from "next/image";
import Link from "next/link"



export default function Home() {
  return (
    <main>
    <section className="text-xl">
        <p>Ciao sono Suleman e sono uo studente.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href="/posts/postId">Primo post</Link>
      </section>
    </main>
    );
}
