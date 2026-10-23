// ─── Private client presentations ─────────────────────────────────────────────
// Each entry is reachable at /p/<slug> — slugs are unguessable and the pages
// are excluded from search engines (robots.txt + noindex meta).
//
// Password protection: when `protected` is true, the slide folder under
// public/presentations/ is NOT the slug — it is the first 16 hex chars of
// sha256("<password>:<slug>"), so the files cannot be located without the
// password. The password itself is never stored anywhere in the site.
// To derive a folder name:
//   node -e "console.log(require('crypto').createHash('sha256')
//     .update('<password>:<slug>').digest('hex').slice(0,16))"
// Passwords are lowercased and trimmed before hashing, so clients can type
// them in any case.
export const PRESENTATIONS = {
  'am-nov27-fa21031f': {
    title:    'Vantage Africa × Aston Martin',
    subtitle: 'South Africa · November 2027 · Draft for discussion',
    slides:   16,
    enquirySubject: 'Aston Martin South Africa — November 2027',
    protected: true,
  },
}
