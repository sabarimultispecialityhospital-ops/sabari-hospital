import { useState } from 'react';

export function useNavbarTheme() {
  const [theme] = useState('light');
  return {
    theme,
    isDark: false
  };
}
