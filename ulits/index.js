export const cutString = (text, maxLetters = 90) => {
  try {
    const str = String.prototype.toString.call(text)

    if (str.length <= maxLetters) return str

    return str.substring(0, maxLetters - 1).trim() + "…"
  }
  catch (e) {
    return ""
  }
}

export function timeFormat(date) {
  return (new Date(date)).toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow', hour: '2-digit', minute: '2-digit' })
}

export function dateFormat(date) {
  return (new Date(date)).toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow', day: '2-digit', month: '2-digit', year: 'numeric' })
}


export function yyyymmdd(d) {
  const date = new Date(d)

  const mm = date.getMonth() + 1
  const dd = date.getDate()

  return `${date.getFullYear()}-${mm > 9 ? mm : `0${mm}`}-${dd > 9 ? dd : `0${dd}`}`
}

export const flattenObject = (obj) =>
  Object.keys(obj).reduce((acc, k) =>
    typeof obj[k] === 'object'
      ? {
        ...acc,
        ...flattenObject(obj[k])
      }
      : { ...acc, [k]: obj[k] }, {})

export const formatPoster = ({
  id,
  play: {
    slug,
    text,
    title,
    preview:
    {
      formats:
      {
        small:
        {
          url
        }
      }
    }
  },
  adress,
  date,
  price
}
) => ({
  id,
  slug: `/plays/${slug}`,
  text: cutString(text),
  title,
  url,
  adress,
  startDate: date,
  date: dateFormat(date),
  time: timeFormat(date),
  price
})

export const createPosterJsonLD = ({ name, url, slug, startDate, description, price, address }) => ({
  "@context": "https://schema.org/",
  "@type": "Event",
  name,
  url: slug,
  startDate: yyyymmdd(startDate),
  image: url,
  description,
  offers: {
    "@type": "Offer",
    url: slug,
    category: "primary",
    availability: "https://schema.org/InStock",
    price,
    "priceCurrency": "RUB"
  },
  location: {
    "@context": "https://schema.org/",
    "@type": "Place",
    url: process.env.THEATER,
    name: "Театр-студия «Старый Арбат»",
    address
  }
})

export const contactsJsonLD = {
  "@context": "http://schema.org/",
  "@type": "Organization",
  logo: `${process.env.THEATR}staryiarbat.jpg`,
  address: {
      "@type": "PostalAddress",
      addressCountry: "Россия",
      addressLocality: "Москва",
      postalCode: "119019",
      streetAddress: "Филипповский переулок, дом 11, стр. 2"
  },
  telephone: "+7 (495) 691-15-46",
  name: "Театр-студия «Старый Арбат»",
  url: process.env.THEATR
}