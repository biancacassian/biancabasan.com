import { ReactNode } from 'react';

export interface FolderProps {
  className?: string;
  children: ReactNode;
  header?: string;
  subheader?: string;
  bokiLogo?: boolean;
}
