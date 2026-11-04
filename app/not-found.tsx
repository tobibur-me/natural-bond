import LinkButton from "@/Components/Ui/LinkButton";
import notFoundCopy from "@/Data/NotFoundCopy";

const NotFound = () => (
  <main className="flex min-h-dvh flex-col items-center justify-center gap-5 p-6 text-center">
    <h1 className="text-section text-forest">{notFoundCopy.title}</h1>
    <p className="max-w-[50ch] text-lg">{notFoundCopy.text}</p>
    <LinkButton href="/">{notFoundCopy.cta}</LinkButton>
  </main>
);

export default NotFound;
