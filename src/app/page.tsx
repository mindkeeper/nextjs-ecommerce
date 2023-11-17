import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-4 py-6 text-center">
        <h1 className="text-4xl font-bold">Shadcn? More Like Chadcn</h1>
        <p className="text-2xl text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          earum hic similique corrupti et eaque voluptatem dolore molestias,
          soluta nihil aliquam ex molestiae quo placeat incidunt officiis ipsam
          dolorum dignissimos.
        </p>
      </section>
      <div className="flex items-center justify-center gap-6 py-6">
        <Button>Learn More</Button>
        <Button>Enroll</Button>
      </div>
    </>
  );
}
