import type { Metadata } from "next";
import { company, essOrderUrl } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EssForm } from "@/components/ess-form";

const title = "Обучение финансам в Турции — набор открыт";
const description =
  "Özgerim открывает набор на программу обучения финансам в Стамбуле и Измире. Полная стоимость $2000, половину оплачивает фонд Özgerim — участник платит $1000.";

export const metadata: Metadata = {
  title: "Обучение финансам в Турции",
  description,
  alternates: { canonical: `${company.site}/ess` },
  openGraph: { title, description, type: "website", locale: "ru_RU", url: `${company.site}/ess`,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Özgerim Holding" }],
  },
};

const included = [
  {
    title: "Обучение финансам",
    text: "На выбор в Стамбуле или Измире.",
  },
  {
    title: "Опыт учёбы и жизни за границей",
    text: "Вы не только учитесь, но и живёте в другой стране.",
  },
  {
    title: "Окружение, которое растёт в финансах",
    text: "Рядом люди с теми же целями.",
  },
];

export default function EssPage() {
  return (
    <>
      <Header action={{ href: "#form", label: "Подать заявку" }} />
      <main id="main">
        <section className="esshero">
          <div className="wrap">
            <div className="esshero__body" data-enter>
              <p className="small esshero__kicker">Özgerim · Программа обучения</p>
              <h1 className="h1">Обучение финансам в Турции</h1>
              <p className="body esshero__lead">
                Учёба проходит в Стамбуле и Измире. Программа рассчитана на тех, кто хочет
                разбираться в финансах, получить опыт обучения за рубежом и пожить в другой
                стране.
              </p>
              <div className="esshero__cta">
                <a href="#form" className="pill pill--glass">
                  Подать заявку
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--deep esscost" aria-label="Стоимость">
          <div className="wrap">
            <dl className="numbers esscost__grid">
              <div>
                <dt>$2000</dt>
                <dd>полная стоимость обучения</dd>
              </div>
              <div>
                <dt>−$1000</dt>
                <dd>оплачивает фонд Özgerim</dd>
              </div>
              <div>
                <dt>$1000</dt>
                <dd>платит участник</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2 className="h2" style={{ marginBottom: 56 }}>
              Что входит
            </h2>
            <div className="focus">
              {included.map((f, i) => (
                <div key={f.title}>
                  <span className="no">0{i + 1}</span>
                  <h3 className="h3">{f.title}</h3>
                  <p className="small">{f.text}</p>
                </div>
              ))}
            </div>
            <p className="body essnote">Количество мест ограничено.</p>
          </div>
        </section>

        <section id="form" className="section section--soft">
          <div className="wrap essform">
            <div className="essform__head">
              <h2 className="h2">Заявка на обучение</h2>
              <p className="body">
                Заполните форму, и мы свяжемся с вами. Можно также написать нам в{" "}
                <a href={essOrderUrl} target="_blank" rel="noopener noreferrer" className="essform__link">
                  WhatsApp
                </a>
                .
              </p>
            </div>
            <EssForm />
          </div>
        </section>
      </main>
      <Footer />
      <a href="#form" className="sticky-cta">
        Подать заявку
      </a>
    </>
  );
}
