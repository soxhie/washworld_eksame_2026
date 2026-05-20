import { SubscriptionPlan } from "../data/membershipTypes";

interface MembershipCreateProps {
  onBack: () => void;
  plans: SubscriptionPlan[];
  onPlanClick: (plan: SubscriptionPlan) => void;
  isLoading: boolean;
  error: string | null;
}

export default function MembershipCreate({
  onBack,
  plans,
  onPlanClick,
  isLoading,
  error,
}: MembershipCreateProps) {
  return (
    <section className="membershipCreate" aria-label="Opret medlemskab">
      <button type="button" className="profileBackButton" onClick={onBack}>
        <span aria-hidden="true">‹</span>
        Tilbage
      </button>

      <h1 className="membershipCreateTitle">Medlemskab</h1>
      <p className="membershipCreateSubtitle">Vælg dit medlemskab</p>

      <h2 className="membershipCreateSectionTitle">
        <span aria-hidden="true">∞</span>
        Ubegrænset bilvask
      </h2>

      <div className="membershipCreateCards">
        {isLoading && (
          <article className="membershipCreateCard">
            <div className="membershipCreateCardAction" aria-live="polite">
              <span className="membershipCreateCardDescription">Henter medlemskaber...</span>
            </div>
          </article>
        )}

        {!isLoading && error && (
          <article className="membershipCreateCard">
            <div className="membershipCreateCardAction" aria-live="polite">
              <span className="membershipCreateCardDescription">Kunne ikke hente medlemskaber lige nu.</span>
              <span className="membershipCreateReadMore">Prøv igen senere</span>
            </div>
          </article>
        )}

        {!isLoading && !error && plans.length === 0 && (
          <article className="membershipCreateCard">
            <div className="membershipCreateCardAction" aria-live="polite">
              <span className="membershipCreateCardDescription">Ingen medlemskaber fundet.</span>
            </div>
          </article>
        )}

        {plans.map((plan) => (
          <article key={plan.name} className="membershipCreateCard">
            <button
              type="button"
              className="membershipCreateCardAction"
              aria-label={`Vaelg ${plan.name}`}
              onClick={() => onPlanClick(plan)}
            >
              <span className="membershipCreateCardTopLine">
                <strong>{plan.name}</strong> - {plan.price}kr./md.
              </span>
              <span className="membershipCreateCardDescription">{plan.shortDescription || "Læs mere om planen"}</span>
              <span className="membershipCreateReadMore">Læs mere</span>
              <span className="membershipCreateChevron" aria-hidden="true">›</span>
            </button>
          </article>
        ))}
      </div>

      <h2 className="membershipCreateSectionTitle">
        <span aria-hidden="true">✧</span>
        Betal pr. vask
      </h2>

      <article className="membershipCreateCard membershipCreatePayAsYouGoCard">
        <button type="button" className="membershipCreateCardAction" aria-label="Vælg betal pr. vask">
          <span className="membershipCreateCardDescription membershipCreatePayAsYouGoText">
            Du betaler automatisk hver gang du vasker.
          </span>
          <span className="membershipCreateReadMore">Læs mere</span>
          <span className="membershipCreateChevron" aria-hidden="true">›</span>
        </button>
      </article>
    </section>
  );
}
