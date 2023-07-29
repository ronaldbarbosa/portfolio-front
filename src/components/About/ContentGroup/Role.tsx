import { useTranslation } from 'next-i18next'

export default function Role() {
  const { t } = useTranslation()
  return (
    <h2 className="text-xl text-green">{ t('index:dev_title') }</h2>
  );
}
