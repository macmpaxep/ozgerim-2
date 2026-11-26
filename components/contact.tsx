import { company } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="section section--deep">
      <div className="wrap">
        <h2 className="h2" style={{ maxWidth: "18em" }}>
          Инвестиции, совместные проекты, издательские и благотворительные инициативы
        </h2>
        <a href={`mailto:${company.email}`} className="contact__mail">
          {company.email}
        </a>
        <dl className="contact__rows">
          <div>
            <dt>Телефон</dt>
            <dd>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Офисы</dt>
            <dd>{company.city}</dd>
          </div>
          <div>
            <dt>Ответ</dt>
            <dd>в течение двух рабочих дней</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
