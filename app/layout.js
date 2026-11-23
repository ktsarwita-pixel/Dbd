import './styles.css';

export const metadata = {
  title: 'Dead by Daylight — Trial',
  description: 'Enter the trial. Survive the hunt.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
