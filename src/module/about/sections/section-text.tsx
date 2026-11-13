import { useTranslation } from 'lib/translations'

export default function SectionText() {
  const { t } = useTranslation()
  return (
    <div className="CONTAINER flex min-h-screen flex-col items-start justify-center">
      <p className="MENU-CHANGE-Y-200 font-poppins text-2xl text-white">{t('about_dont_be_shy')}</p>
      <a
        href="mailto:irfakmaulana05@gmail.com"
        aria-label="Contact me"
        className="transition-opacity hover:opacity-80"
      >
        <h2 className="MENU-CHANGE-Y-100 font-display text-7xl text-white md:text-8xl lg:text-9xl">
          {t('about_make_first_move')}
        </h2>
      </a>
    </div>
  )
}
