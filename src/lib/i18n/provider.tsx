import './config';

type Props = {
  children: React.ReactNode;
};

export function I18nProvider({ children }: Props) {
  return children;
}
