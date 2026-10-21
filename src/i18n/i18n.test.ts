import { describe, it, expect } from 'vitest';
import { changeLanguage, useTranslations } from './i18n.ts';

describe('useTranslations', () => {
  it('should return the translation for the given key in the target language', () => {
    const t = useTranslations('en');
    expect(t('Debug-1')).toBe('Hello, World');
  });

  it('should replace placeholders with actual values in the translation', () => {
    const t = useTranslations('en');
    expect(t('Debug-2', { name: 'Joe' })).toBe('Hello, Joe');
  });

  it('should fallback to English translation if the target language is not found', () => {
    const t = useTranslations();
    expect(t('Debug-1')).toBe('Hello, World');
  });
});

describe('changeLanguage', () => {
  it('should remove a legacy language prefix for the unprefixed English locale', () => {
    const path = '/zh-cn/about';
    const newPath = changeLanguage('en', path);
    expect(newPath).toBe('/about');
  });

  it('should add the English prefix when explicitly requested', () => {
    const path = '/about';
    const newPath = changeLanguage('en', path, true);
    expect(newPath).toBe('/en/about');
  });

  it('should not add the language prefix to the path if prefixDefaultLocale is false and targetLocale is defaultLocale', () => {
    const path = '/zh-tw/about';
    const newPath = changeLanguage('en', path);
    expect(newPath).toBe('/about');
  });
});
