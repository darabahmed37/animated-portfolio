import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Darab Ahmed - Software Developer Portfolio',
  description: 'Software Developer from Lahore, Pakistan specializing in Python, Django, React, Next.js, and AWS. 4+ years of experience building scalable web applications.',
  keywords: 'software developer, Python, Django, React, Next.js, AWS, TypeScript, portfolio, Lahore Pakistan',
  authors: [{ name: 'Darab Ahmed' }],
  creator: 'Darab Ahmed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://darabahmed.dev',
    title: 'Darab Ahmed - Software Developer Portfolio',
    description: 'Software Developer from Lahore, Pakistan specializing in Python, Django, React, Next.js, and AWS.',
    siteName: 'Darab Ahmed Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darab Ahmed - Software Developer Portfolio',
    description: 'Software Developer from Lahore, Pakistan specializing in Python, Django, React, Next.js, and AWS.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}