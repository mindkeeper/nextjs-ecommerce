import Nav from '@/components/Navbar';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="p-10">
      <Nav />
      <section className="py-6 flex flex-col gap-4 items-center text-center">
        <h1 className="text-4xl font-bold">Shadcn? More Like Chadcn</h1>
        <p className="text-2xl text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          earum hic similique corrupti et eaque voluptatem dolore molestias,
          soluta nihil aliquam ex molestiae quo placeat incidunt officiis ipsam
          dolorum dignissimos.
        </p>
      </section>
      <div className="gap-6 flex py-6 items-center justify-center">
        <Button>Learn More</Button>
        <Button>Enroll</Button>
      </div>
    </main>
  );
}
