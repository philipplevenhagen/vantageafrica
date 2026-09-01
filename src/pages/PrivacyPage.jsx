import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { META } from '../data/meta'

const SECTIONS = [
  {
    title: '1. Introduction',
    content: `Vantage Travel (Pty) Ltd, trading as Vantage Africa ("Vantage Travel", "we", "us", "our"), respects your privacy and is committed to protecting your personal information.

This Privacy Policy explains how we collect, use, store, share and protect personal information in connection with our travel planning and arrangement services and our website, in accordance with the Protection of Personal Information Act, 2013 (POPIA) and other applicable South African data-protection legislation.

By providing us with your personal information, or by using our website, you acknowledge that you have read and understood this Privacy Policy.`,
  },
  {
    title: '2. Information We Collect',
    content: 'We may collect the following categories of personal information, depending on the services you request:',
    bullets: [
      'identity information — full name, title, date of birth, nationality, passport or identity document details;',
      'contact information — email address, telephone number, postal and physical address;',
      'travel information — itinerary preferences, travel dates, destinations, loyalty programme details, dietary requirements, accessibility or medical requirements relevant to your travel;',
      'payment-related information — billing details and payment records (we do not store full card details; payments are processed by third-party payment providers);',
      'information about travelling companions that you provide to us on their behalf;',
      'communications — correspondence, enquiries and feedback you send to us; and',
      'website usage information — technical data such as browser type and pages visited, where analytics are in use.',
    ],
    after: 'Where you provide personal information about other travellers, you confirm that you are authorised to do so and that they have consented to their information being processed in accordance with this Privacy Policy.',
  },
  {
    title: '3. How We Use Your Information',
    content: 'We process personal information for the following purposes:',
    bullets: [
      'preparing quotations and designing personalised itineraries;',
      'making and managing bookings with hotels, lodges, airlines, transport providers, guides, restaurants and other travel suppliers;',
      'processing payments and issuing invoices and travel documentation;',
      'communicating with you about your enquiry, booking or trip;',
      'complying with legal and regulatory obligations;',
      'maintaining business records; and',
      'improving our services and website.',
    ],
  },
  {
    title: '4. Sharing of Personal Information',
    content: `We share personal information only where necessary to provide the services you have requested, or where required or permitted by law.

Your information may be shared with third-party travel suppliers — including hotels, lodges, airlines, transfer companies, guides, tour operators and activity providers — where this is necessary to arrange and fulfil your booking.

Some suppliers may be located outside South Africa. Where personal information is transferred across borders, we take reasonable steps to ensure it is processed in accordance with applicable data-protection requirements.

We do not sell personal information to third parties.`,
  },
  {
    title: '5. Retention of Information',
    content: `We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, including to meet legal, accounting, tax or reporting requirements.

When personal information is no longer required, we take reasonable steps to delete or de-identify it securely.`,
  },
  {
    title: '6. Security',
    content: `We implement reasonable technical and organisational measures to protect personal information against loss, misuse, unauthorised access, disclosure or alteration.

While we take security seriously, no method of transmission or storage is completely secure, and we cannot guarantee absolute security of information transmitted to us electronically.`,
  },
  {
    title: '7. Your Rights',
    content: 'Under POPIA, you have the right to:',
    bullets: [
      'request access to the personal information we hold about you;',
      'request correction or deletion of inaccurate, outdated or unlawfully obtained information;',
      'object to the processing of your personal information in certain circumstances;',
      'withdraw consent where processing is based on consent; and',
      'lodge a complaint with the Information Regulator of South Africa.',
    ],
    after: 'To exercise any of these rights, please contact us using the details below. We may need to verify your identity before acting on a request.',
  },
  {
    title: '8. Cookies and Website Analytics',
    content: `Our website may use cookies or similar technologies to ensure the website functions correctly and, where applicable, to understand how visitors use the site.

You can control or disable cookies through your browser settings; doing so may affect certain website functionality.`,
  },
  {
    title: '9. Third-Party Links',
    content: `Our website or communications may contain links to third-party websites, including supplier websites. We are not responsible for the privacy practices or content of those third parties. We encourage you to review their privacy policies before providing them with personal information.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. The current version will always be available on our website. Continued use of our services after an update constitutes acknowledgement of the revised policy, subject to applicable law.`,
  },
]

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-page__inner">
        <Link to="/" className="legal-page__back">← Back to Vantage Africa</Link>

        <h1 className="legal-page__title">Privacy Policy</h1>
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
            {s.after && s.after.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>
        ))}

        <section className="legal-page__section">
          <h2>11. Contact Us</h2>
          <p><strong>{META.legalName}, trading as {META.name}</strong></p>
          <p>
            Website: <a href={`https://${META.website}`} target="_blank" rel="noopener noreferrer">{META.website}</a><br />
            Email: <a href={`mailto:${META.email}`}>{META.email}</a><br />
            Physical &amp; Postal Address: {META.address}<br />
            Company Registration Number: {META.regNumber}<br />
            VAT Number: {META.vatNumber}
          </p>
          <p>
            Information Regulator of South Africa:{' '}
            <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">inforegulator.org.za</a>
          </p>
        </section>

        <Link to="/" className="legal-page__back legal-page__back--bottom">← Back to Vantage Africa</Link>
      </div>
    </div>
  )
}
