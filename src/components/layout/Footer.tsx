import Container from "../ui/Container";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-zinc-800 py-6 mt-20">
      <Container className="text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Korny. {t("footer.rights")}
      </Container>
    </footer>
  );
}
