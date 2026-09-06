import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { LogoMark } from "@/components/brand/logo";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container>
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <LogoMark withTrail={false} className="h-14 w-14 text-line-strong" />
          <h1 className="mt-8 font-display text-4xl font-medium text-ink">Nothing out here</h1>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved somewhere else.
          </p>
          <ButtonLink href="/" className="mt-8">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
