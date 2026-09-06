import { useEffect, useState } from "react";
import { siteConfig } from "./site.config";

const imagePath = (filename: string) => `${import.meta.env.BASE_URL}assets/images/${filename}`;

const services = [
  {
    number: "01",
    title: "Accepter Bitcoin en commerce",
    text: "Mise en place d’un encaissement simple en euros, via Lightning ou sur le réseau principal, avec Swiss Bitcoin Pay ou une solution adaptée. Configuration, essais réels et procédure pour l’équipe.",
    tags: ["Point de vente", "Lightning", "Suivi des paiements"],
  },
  {
    number: "02",
    title: "Garder ses bitcoins soi-même",
    text: "Choix et prise en main d’un portefeuille matériel, création hors ligne, sauvegardes, passphrase si elle est pertinente et exercice complet de récupération.",
    tags: ["Portefeuille matériel", "Sauvegardes", "Plan de récupération"],
  },
  {
    number: "03",
    title: "Sécuriser une organisation",
    text: "Architecture multisig, séparation des rôles et des lieux, règles de signature, documentation et simulations avant tout dépôt significatif.",
    tags: ["Multisig", "Gouvernance", "Continuité"],
  },
  {
    number: "04",
    title: "Comprendre et utiliser Bitcoin",
    text: "Portefeuilles, adresses, frais, transactions, Lightning, UTXO et bonnes pratiques de confidentialité : une formation construite autour de votre usage réel.",
    tags: ["Débutants", "Transactions", "Autonomie"],
  },
  {
    number: "05",
    title: "Prendre en main une plateforme",
    text: "Accompagnement technique sur une plateforme choisie par le client, notamment Bull Bitcoin : création du compte, compréhension de l’interface et retrait vers son propre portefeuille.",
    tags: ["Achat / vente", "Retrait", "Vous restez aux commandes"],
  },
  {
    number: "06",
    title: "Cadrer un projet de trésorerie",
    text: "Atelier de compréhension, cartographie des risques et cadrage technique. Toute décision d’allocation reste celle de l’entreprise et de ses professionnels habilités.",
    tags: ["Formation", "Processus", "Coordination"],
  },
];

const steps = [
  ["Écouter", "Un premier échange pour comprendre l’usage, le niveau, les contraintes et les risques à traiter."],
  ["Concevoir", "Un parcours proportionné : le dispositif le plus simple qui réponde vraiment au besoin."],
  ["Faire ensemble", "Vous manipulez vos appareils et validez chaque action. Je guide, j’explique et je vérifie avec vous."],
  ["Tester", "Petite transaction, contrôle de réception puis exercice de récupération avant de considérer le dispositif comme prêt."],
  ["Transmettre", "Une procédure claire et personnalisée pour refaire les opérations sans dépendre de moi."],
];

const faqs = [
  ["Dois-je déjà connaître Bitcoin ?", "Non. L’accompagnement part de votre niveau et de votre usage. L’objectif n’est pas de vous noyer dans la technique, mais de vous rendre autonome."],
  ["Faut-il acheter un terminal de paiement ?", "Pas nécessairement. Pour un petit commerce, un smartphone ou une tablette peut suffire. Les besoins d’une boutique en ligne ou de plusieurs points de vente demandent une architecture différente."],
  ["Aurez-vous accès à mes bitcoins ou à ma phrase de récupération ?", "Jamais. Je ne demande, ne photographie, ne saisis et ne conserve aucune phrase de récupération, passphrase, clé privée, code PIN ou moyen d’accès. Vous effectuez vous-même les manipulations sensibles."],
  ["Multisig ou passphrase : est-ce toujours plus sûr ?", "Non. Une sécurité trop complexe peut augmenter le risque de perte. Le choix dépend des montants, des personnes impliquées, des lieux de sauvegarde et de la capacité à maintenir le dispositif dans le temps."],
  ["Pouvez-vous me dire combien acheter ?", "Non. Je forme à Bitcoin et j’accompagne les usages techniques. Je ne fournis pas de recommandation personnalisée d’investissement, de rendement ou d’allocation."],
  ["L’accompagnement est-il possible à distance ?", "Oui pour la plupart des besoins. Les interventions auprès de commerces et d’équipes peuvent aussi être organisées sur place autour de Saint-Brieuc et en Bretagne."],
  ["Comment se déroule le premier échange ?", "Vous réservez gratuitement un créneau de 30 minutes. Cet échange sert à comprendre votre situation, votre niveau et votre objectif, puis à déterminer si un accompagnement est pertinent et sous quelle forme."],
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" /></svg>;
}

function ShieldIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.8 2.8 8.2 7 10 4.2-1.8 7-5.2 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5" /></svg>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("hashchange", close);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const bookingReady = Boolean(siteConfig.bookingUrl);
  const bookingHref = bookingReady ? siteConfig.bookingUrl : siteConfig.xUrl;

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Kêr Riek, accueil">
          <img className="brand-logo" src={imagePath("logo-horizontal.webp")} alt="Kêr Riek" width="900" height="181" />
        </a>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">{menuOpen ? "Fermer" : "Ouvrir"} le menu</span>
          <span /><span />
        </button>
        <nav id="navigation" className={menuOpen ? "nav open" : "nav"} aria-label="Navigation principale">
          <a href="#accompagnements">Accompagnements</a>
          <a href="#methode">Méthode</a>
          <a href="#engagements">Engagements</a>
          <a href="#questions">Questions</a>
          <a className="nav-cta" href={bookingHref} target="_blank" rel="noreferrer" aria-label="Réserver un premier échange de 30 minutes sur Cal.com">Réserver 30 min</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Accompagnement Bitcoin pratique et indépendant</p>
            <h1>Acceptez, utilisez et sécurisez Bitcoin. <em>Gardez-en le contrôle.</em></h1>
            <p className="hero-lead">Que vous soyez commerçant, entreprise ou particulier, je vous accompagne du premier paiement à l’autogarde avancée — avec une méthode claire, testée et sans jamais accéder à vos fonds.</p>
            <div className="hero-actions">
              <a className="button primary" href={bookingHref} target="_blank" rel="noreferrer">Réserver un échange de 30 min <ArrowIcon /></a>
              <a className="button secondary" href="#accompagnements">Découvrir les accompagnements</a>
            </div>
            <p className="location">{siteConfig.area}</p>
          </div>
          <div className="hero-visual">
            <picture>
              <source media="(max-width: 800px)" srcSet={imagePath("domaine-souverain-960.webp")} />
              <img src={imagePath("domaine-souverain-1600.webp")} alt="Forteresse bretonne ouverte sur la mer, symbole d’un domaine souverain" width="1600" height="1067" fetchPriority="high" />
            </picture>
            <div className="hero-panel" aria-label="Principes de l’accompagnement">
              <div className="panel-top">
                <span>PROTOCOLE D’AUTONOMIE</span>
                <span className="live-dot">EN PRATIQUE</span>
              </div>
              <div className="proof">
                <span className="proof-index">01</span>
                <div><strong>Vos clés</strong><small>restent entre vos mains</small></div>
                <span className="proof-state">SANS GARDE</span>
              </div>
              <div className="proof">
                <span className="proof-index">02</span>
                <div><strong>Chaque geste</strong><small>est compris puis testé</small></div>
                <span className="proof-state">VÉRIFIÉ</span>
              </div>
              <div className="proof">
                <span className="proof-index">03</span>
                <div><strong>La complexité</strong><small>reste proportionnée au risque</small></div>
                <span className="proof-state">SUR MESURE</span>
              </div>
              <div className="panel-footer"><ShieldIcon /><span>Pas de phrase de récupération partagée. Pas de fonds confiés. Pas de dépendance créée.</span></div>
            </div>
          </div>
        </section>

        <section className="signal-bar" aria-label="Positionnement">
          <span>BITCOIN UNIQUEMENT</span><i />
          <span>COMMERÇANTS · ENTREPRISES · PARTICULIERS</span><i />
          <span>SUR PLACE & À DISTANCE</span>
        </section>

        <section className="section services" id="accompagnements">
          <div className="section-heading">
            <p className="eyebrow"><span /> Un besoin concret, un parcours adapté</p>
            <h2>Vous repartez avec quelque chose <em>que vous savez utiliser.</em></h2>
            <p>L’accompagnement va de la première transaction à une architecture de sécurité documentée. Les outils ne sont jamais une fin : ils servent votre usage, votre autonomie et votre capacité à récupérer.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="card-head"><span>{service.number}</span><span className="corner-arrow">↗</span></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section custody">
          <figure className="custody-visual">
            <picture>
              <source media="(max-width: 800px)" srcSet={imagePath("autogarde-960.webp")} />
              <img src={imagePath("autogarde-1600.webp")} alt="Accompagnement à la prise en main d’un portefeuille matériel" width="1600" height="1067" loading="lazy" />
            </picture>
            <figcaption>Vous gardez le contrôle de chaque manipulation sensible.</figcaption>
          </figure>
          <div className="custody-copy">
            <p className="eyebrow"><span /> Autogarde accompagnée</p>
            <h2>La sécurité n’est réelle que si vous savez <em>récupérer.</em></h2>
            <p>Un portefeuille bien configuré ne suffit pas. Nous construisons ensemble une méthode compréhensible, documentée et testée, adaptée à vos montants, à vos proches ou à votre organisation.</p>
            <ul>
              <li><b>01</b><span>Choisir et initialiser le matériel sans exposer vos secrets</span></li>
              <li><b>02</b><span>Organiser les sauvegardes et les lieux de conservation</span></li>
              <li><b>03</b><span>Tester la récupération avec un petit montant avant l’usage réel</span></li>
            </ul>
          </div>
        </section>

        <section className="section merchant">
          <div className="merchant-copy">
            <p className="eyebrow light"><span /> Spécial commerçants</p>
            <h2>Encaisser un paiement Bitcoin peut tenir en quelques gestes.</h2>
            <p>Nous configurons ensemble le parcours complet : montant saisi en euros, QR code Lightning ou sur le réseau principal, confirmation du paiement, destination des fonds et suivi utile à la comptabilité.</p>
            <ul>
              <li><b>01</b> Choisir entre conservation en bitcoin et conversion selon le service retenu</li>
              <li><b>02</b> Tester avec l’équipe dans les conditions réelles du comptoir</li>
              <li><b>03</b> Préparer une procédure courte pour les ventes, remboursements et contrôles</li>
            </ul>
            <a className="text-link" href="#rendez-vous">Évaluer mon point de vente <ArrowIcon /></a>
          </div>
          <figure className="merchant-visual">
            <picture>
              <source media="(max-width: 800px)" srcSet={imagePath("commerce-lightning-700.webp")} />
              <img src={imagePath("commerce-lightning-1000.webp")} alt="Paiement Lightning dans un commerce de proximité" width="1000" height="1250" loading="lazy" />
            </picture>
            <figcaption><span /> Un parcours testé avec l’équipe, dans les conditions réelles du comptoir.</figcaption>
          </figure>
        </section>

        <section className="section method" id="methode">
          <div className="section-heading compact">
            <p className="eyebrow"><span /> La méthode</p>
            <h2>Comprendre. Faire. <em>Savoir refaire.</em></h2>
          </div>
          <div className="steps">
            {steps.map(([title, text], index) => (
              <article className="step" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section commitments" id="engagements">
          <div className="commitment-title">
            <p className="eyebrow light"><span /> La sécurité commence par des limites claires</p>
            <h2>Je vous accompagne.<br /><em>Je ne me substitue jamais à vous.</em></h2>
          </div>
          <div className="commitment-list">
            <div><strong>01</strong><p><b>Aucune garde</b><br />Vos bitcoins ne transitent jamais par moi.</p></div>
            <div><strong>02</strong><p><b>Aucun secret confié</b><br />Phrases de récupération, passphrases et codes PIN ne sont ni vus ni conservés.</p></div>
            <div><strong>03</strong><p><b>Aucune promesse</b><br />Pas de trading, de rendement annoncé ou de pari sur le prix.</p></div>
            <div><strong>04</strong><p><b>Aucune dépendance</b><br />La documentation et les tests visent votre autonomie.</p></div>
          </div>
        </section>

        <section className="section tools">
          <div className="section-heading compact">
            <p className="eyebrow"><span /> Des outils choisis, jamais imposés</p>
            <h2>Le bon dispositif dépend <em>du bon diagnostic.</em></h2>
            <p>Selon le contexte : solution de paiement prête à l’emploi, BTCPay Server, portefeuille mobile, portefeuille matériel Bitcoin-only, Sparrow, passphrase ou multisig. La simplicité reste une propriété de sécurité.</p>
          </div>
          <div className="tool-line" aria-label="Exemples d’outils">
            <a href="https://swiss-bitcoin-pay.ch/" target="_blank" rel="noreferrer">Swiss Bitcoin Pay <span>↗</span></a>
            <a href="https://btcpayserver.org/" target="_blank" rel="noreferrer">BTCPay Server <span>↗</span></a>
            <a href="https://sparrowwallet.com/" target="_blank" rel="noreferrer">Sparrow Wallet <span>↗</span></a>
            <a href="https://www.bullbitcoin.com/" target="_blank" rel="noreferrer">Bull Bitcoin <span>↗</span></a>
          </div>
        </section>

        <section className="section faq" id="questions">
          <div className="section-heading compact">
            <p className="eyebrow"><span /> Questions fréquentes</p>
            <h2>Avant de <em>commencer.</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<i>+</i></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="booking" id="rendez-vous">
          <div>
            <p className="eyebrow light"><span /> Premier échange</p>
            <h2>Commençons par votre besoin, <em>pas par un produit.</em></h2>
            <p>Réservez 30 minutes pour me présenter votre situation. Nous clarifierons votre objectif, le périmètre utile et la meilleure prochaine étape.</p>
            <div className="booking-notes"><span>30 minutes</span><span>Sans engagement</span><span>Besoin cadré avant devis</span></div>
          </div>
          <a className="booking-card" href={bookingHref} target="_blank" rel="noreferrer">
            <div className="calendar-icon"><img src={imagePath("logo-mark.webp")} alt="" /><b>RDV</b></div>
            <div>
              <small>{bookingReady ? "AGENDA EN LIGNE" : "CONTACT DIRECT"}</small>
              <strong>{bookingReady ? "Réserver mon premier échange" : "Écrire à Scuba Wizard"}</strong>
              <p>{bookingReady ? "Consultez les disponibilités sur Cal.com et choisissez l’horaire qui vous convient." : "L’agenda sera connecté avant la mise en ligne. En attendant, contactez-moi sur X."}</p>
            </div>
            <ArrowIcon />
          </a>
        </section>

        <section className="regulatory-note" id="cadre">
          <strong>Un périmètre transparent.</strong>
          <p>Les prestations présentées sont des actions de formation, d’assistance technique et d’intégration. Elles n’incluent ni conservation ou transfert de fonds pour compte de tiers, ni exécution d’ordres, ni recommandation personnalisée d’achat, de vente ou d’allocation de crypto-actifs. Les sujets juridiques, fiscaux, comptables et d’investissement doivent être validés par des professionnels habilités.</p>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#accueil"><span className="footer-mark"><img src={imagePath("logo-mark.webp")} alt="" /></span><span>{siteConfig.brand}</span></a>
        <p>Accepter · utiliser · sécuriser Bitcoin</p>
        <div><a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Réserver un échange ↗</a><a href={siteConfig.xUrl} target="_blank" rel="noreferrer">X / Twitter ↗</a><a href="#cadre">Cadre d’intervention</a><a href="#accueil">Retour en haut ↑</a></div>
        <small>© {new Date().getFullYear()} {siteConfig.brand}. Bitcoin uniquement.</small>
      </footer>
    </>
  );
}
