import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { META } from '../data/meta'

const SECTIONS = [
  {
    title: '1. About Vantage Travel',
    content: `Vantage Travel (Pty) Ltd, trading as Vantage Africa ("Vantage Travel"), is a bespoke travel planning and arrangement service specialising in personalised travel experiences and itineraries.

We work with clients to design and coordinate travel arrangements according to their individual requirements, preferences, travel dates and budget. These arrangements may include, but are not limited to, accommodation, flights, transfers, private transportation, tours, experiences, activities, guides, dining reservations and other travel-related services.

Because each itinerary is individually designed, Vantage Travel does not publish fixed package prices on its website. Pricing is provided to clients by individual quotation based on the specific arrangements requested.`,
  },
  {
    title: '2. Acceptance of These Terms',
    content: `By requesting a quotation, confirming a booking, making a payment or otherwise instructing Vantage Travel to proceed with travel arrangements, the client acknowledges that they have read, understood and accepted these Terms & Conditions.

These Terms & Conditions should be read together with any quotation, itinerary, invoice, booking confirmation and supplier-specific terms provided to the client.

Where specific terms provided by a third-party supplier differ from these Terms & Conditions, the supplier's terms may apply to that particular service.`,
  },
  {
    title: '3. Quotations',
    content: 'All quotations are prepared specifically for the individual client and itinerary. Unless otherwise stated in writing:',
    bullets: [
      'quotations are subject to availability;',
      'quoted arrangements are not confirmed until Vantage Travel has received the required confirmation and payment;',
      'prices may change before confirmation due to changes in supplier rates, availability, exchange rates, taxes, levies or other costs;',
      'quoted prices may be subject to specific validity periods;',
      'services requested after the original quotation may result in additional charges.',
    ],
    after: 'A quotation does not constitute a confirmed booking until the required payment has been received and Vantage Travel has confirmed the booking in writing.',
  },
  {
    title: '4. Booking Confirmation',
    content: 'A booking becomes confirmed once:',
    numbered: [
      'the client has accepted the applicable quotation;',
      'the required deposit or payment has been received; and',
      'Vantage Travel has confirmed the booking in writing.',
    ],
    after: 'Clients should not make non-refundable travel arrangements based solely on a quotation or provisional itinerary.',
  },
  {
    title: '5. Deposits and Payments',
    content: `Payment requirements vary according to the services included in each booking.

The required deposit, payment schedule and final payment date will be communicated to the client at the time of booking.

Certain suppliers require deposits or full payment that are non-refundable. Where such conditions apply, the client will be advised of the applicable cancellation and refund conditions as part of the booking process.

Once Vantage Travel has paid a non-refundable deposit or payment to a supplier on the client's behalf, that amount may not be recoverable from the supplier and may therefore be non-refundable to the client.

Final payment must be received by the date specified on the booking documentation. Failure to make payment by the required deadline may result in the cancellation of the booking, loss of availability, additional charges or loss of amounts already paid, depending on the applicable supplier terms.`,
  },
  {
    title: '6. Payment Processing',
    content: `Payments made through Vantage Travel's approved payment channels, including online payment facilities, are processed subject to the applicable payment provider's terms and conditions.

The client remains responsible for ensuring that the correct amount is paid by the applicable due date.

A payment receipt or transaction confirmation does not necessarily constitute confirmation of a booking unless Vantage Travel has separately confirmed the booking in writing.`,
  },
  {
    title: '7. Cancellation by the Client',
    content: 'Cancellation requests must be submitted to Vantage Travel in writing. Cancellation charges and refund eligibility will depend on:',
    bullets: [
      'the date on which the cancellation is received;',
      'the services booked;',
      'the terms imposed by the relevant supplier;',
      'whether deposits or payments are refundable or non-refundable; and',
      'any cancellation fees or penalties imposed by suppliers.',
    ],
    after: 'The cancellation conditions applicable to the client\'s specific booking will be communicated during the booking process. A booking may therefore carry cancellation charges of up to 100% of the amount paid, depending on the supplier\'s terms and the timing of cancellation.\n\nWhere a supplier permits a refund, Vantage Travel will assist with processing the applicable refund once the relevant amount has been received from the supplier.',
  },
  {
    title: '8. Refunds',
    content: `Vantage Travel does not guarantee that payments will be refundable.

Where a supplier has imposed a non-refundable deposit, cancellation fee or other non-refundable charge, Vantage Travel will not be able to refund that amount unless the supplier subsequently agrees to do so.

Where a refund is approved by the relevant supplier, Vantage Travel will process or arrange the refund to the client as applicable.

Refund processing times may depend on the supplier, payment provider and banking system and are therefore outside Vantage Travel's direct control.

Any applicable refund will be subject to the terms communicated to the client at the time of booking.`,
  },
  {
    title: '9. Changes to a Booking',
    content: `Requests to change an itinerary, accommodation, dates, flights, transfers, experiences or other arrangements must be made in writing.

Changes are subject to availability and may result in additional costs, amendment fees or cancellation charges imposed by the relevant supplier.

Vantage Travel will advise the client of any known additional costs before proceeding with a requested change.`,
  },
  {
    title: '10. Changes or Cancellation by Suppliers',
    content: `Vantage Travel works with independent third-party suppliers and cannot guarantee that a supplier will not change, amend or cancel a service.

This may occur due to operational requirements, weather, safety considerations, availability, government restrictions, unforeseen circumstances or other reasons outside Vantage Travel's control.

Where a supplier changes or cancels a service, Vantage Travel will use reasonable efforts to assist the client with alternative arrangements or any refund available under the supplier's applicable terms.`,
  },
  {
    title: '11. Third-Party Suppliers',
    content: `Vantage Travel acts as a travel planner and coordinator and arranges services provided by independent third-party suppliers.

These may include hotels, lodges, airlines, transport providers, guides, tour operators, restaurants, activity providers and other travel service providers.

The services supplied by these third parties are subject to their own terms, conditions, policies and limitations.

Vantage Travel is not responsible for the independent acts, omissions, delays, failures, changes or cancellations of third-party suppliers, except to the extent required by applicable law.`,
  },
  {
    title: '12. Travel Documents and Client Responsibilities',
    content: 'Clients are responsible for ensuring that they have all documentation required for their journey, including where applicable:',
    bullets: [
      'valid passports;',
      'visas and permits;',
      'vaccination or health documentation where required;',
      'travel insurance;',
      'airline or other transport documentation; and',
      'any other documentation required by the destination or service provider.',
    ],
    after: 'Clients are responsible for providing Vantage Travel with accurate and complete information necessary to arrange their travel.\n\nAny costs arising from incorrect, incomplete or late information supplied by the client may be for the client\'s account.',
  },
  {
    title: '13. Travel Insurance',
    content: `Vantage Travel strongly recommends that all clients obtain comprehensive travel insurance appropriate to their itinerary.

Insurance should, where appropriate, provide cover for cancellation, interruption, medical expenses, emergency assistance, baggage, delays and other risks associated with travel.

Vantage Travel is not an insurer and cannot provide insurance cover to clients.`,
  },
  {
    title: '14. Special Requests and Requirements',
    content: `Vantage Travel will make reasonable efforts to communicate special requests to the relevant suppliers.

Special requests may include dietary requirements, room preferences, accessibility requirements, celebrations, activities or other personal preferences.

A request cannot be regarded as guaranteed unless Vantage Travel has received written confirmation from the relevant supplier.`,
  },
  {
    title: '15. Passports, Visas and Entry Requirements',
    content: `Travel requirements vary by destination and nationality.

While Vantage Travel may provide general guidance or direct clients to appropriate resources, the client remains responsible for ensuring that they meet all applicable entry, visa, passport, immigration and health requirements.

Clients should verify requirements applicable to their individual circumstances before travelling.`,
  },
  {
    title: '16. Delivery and Provision of Services',
    content: `Vantage Travel provides a personalised travel planning and coordination service rather than a physical product.

Following confirmation and payment, Vantage Travel coordinates the travel services included in the client's agreed itinerary.

The timing of confirmations and travel documentation may vary depending on the suppliers involved, availability and the complexity of the itinerary.

Clients will be provided with relevant booking confirmations, itinerary information and travel documentation as these become available.`,
  },
  {
    title: '17. Force Majeure',
    content: 'Vantage Travel will not be responsible for delays, cancellations, losses, additional costs or changes resulting from circumstances beyond its reasonable control. Such circumstances may include, but are not limited to:',
    bullets: [
      'natural disasters;',
      'severe weather;',
      'pandemics or epidemics;',
      'war or civil unrest;',
      'strikes or industrial action;',
      'government restrictions;',
      'border closures;',
      'changes to immigration requirements;',
      'airline or transport disruptions;',
      'supplier failures; or',
      'other unforeseen circumstances.',
    ],
    after: 'Where such circumstances affect a booking, Vantage Travel will provide reasonable assistance in identifying available alternatives or communicating with suppliers. Any refunds will remain subject to the applicable supplier\'s terms.',
  },
  {
    title: '18. Liability',
    content: `Vantage Travel will exercise reasonable care in arranging and coordinating travel services.

However, Vantage Travel is not responsible for losses arising from circumstances outside its reasonable control or from the acts or omissions of independent third-party suppliers, except where liability cannot lawfully be excluded or limited.

Nothing in these Terms & Conditions is intended to exclude or limit any right or protection afforded to a consumer under applicable South African law.`,
  },
  {
    title: '19. Complaints',
    content: `Vantage Travel encourages clients to raise any concerns as soon as possible so that we have a reasonable opportunity to assist.

Complaints should be submitted in writing and should include the relevant booking information and details of the issue.

Where the issue relates to a third-party supplier, Vantage Travel will assist the client in communicating with the relevant supplier where reasonably possible.`,
  },
  {
    title: '20. Personal Information',
    content: `Vantage Travel collects and processes personal information in accordance with its Privacy Policy and applicable South African data-protection legislation.

Personal information may need to be shared with relevant travel suppliers and service providers where necessary to fulfil the client's booking.

By providing personal information for the purpose of arranging travel, the client acknowledges that such information may be processed and shared as reasonably necessary to provide the requested services and as otherwise permitted or required by law.`,
  },
  {
    title: '21. Website Information',
    content: `Information displayed on the Vantage Travel website is provided for general informational purposes.

Because Vantage Travel specialises in bespoke travel, availability, itineraries and pricing are subject to individual requirements and supplier availability.

Website content may be updated from time to time without notice.`,
  },
  {
    title: '22. Intellectual Property',
    content: `All content on the Vantage Travel website, including text, photographs, graphics, branding, logos and other materials, belongs to Vantage Travel or is used with appropriate permission.

Such content may not be copied, reproduced, modified or commercially used without prior written permission.`,
  },
  {
    title: '23. Governing Law',
    content: `These Terms & Conditions are governed by the laws of the Republic of South Africa.

Any dispute arising from or relating to the services provided by Vantage Travel will be dealt with in accordance with applicable South African law and the jurisdiction of the appropriate South African courts.`,
  },
  {
    title: '24. Amendments',
    content: `Vantage Travel reserves the right to update these Terms & Conditions from time to time.

The version applicable to a client's booking will be the version communicated to or accepted by the client at the time of the relevant booking, subject to applicable law.`,
  },
]

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-page__inner">
        <Link to="/" className="legal-page__back">← Back to Vantage Africa</Link>

        <h1 className="legal-page__title">Terms &amp; Conditions</h1>
        <p className="legal-page__meta">
          Effective date: 1 September 2026
        </p>

        {SECTIONS.map(s => (
          <section key={s.title} className="legal-page__section">
            <h2>{s.title}</h2>
            {s.content && s.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {s.bullets && (
              <ul>
                {s.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            )}
            {s.numbered && (
              <ol>
                {s.numbered.map(b => <li key={b}>{b}</li>)}
              </ol>
            )}
            {s.after && s.after.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>
        ))}

        <section className="legal-page__section">
          <h2>25. Contact Details</h2>
          <p><strong>{META.legalName}, trading as {META.name}</strong></p>
          <p>
            Website: <a href={`https://${META.website}`} target="_blank" rel="noopener noreferrer">{META.website}</a><br />
            Email: <a href={`mailto:${META.email}`}>{META.email}</a><br />
            Physical &amp; Postal Address: {META.address}<br />
            Company Registration Number: {META.regNumber}<br />
            VAT Number: {META.vatNumber}
          </p>
        </section>

        <Link to="/" className="legal-page__back legal-page__back--bottom">← Back to Vantage Africa</Link>
      </div>
    </div>
  )
}
