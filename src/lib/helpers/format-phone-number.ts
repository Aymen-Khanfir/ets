export const formatPhoneNumber = (value: string): string => {
  if (!value.startsWith('+216')) {
    value = '+216' + value.replace(/^\+216/, '');
  }
  value = value.replace(/[^\d+]/g, '');

  const phoneNumber = value.slice(4).replace(/\s+/g, '');

  const formattedNumber = phoneNumber
    .replace(/(\d{2})(\d{3})(\d{3})/, '$1 $2 $3')
    .trim();

  return '+216 ' + formattedNumber;
};

export const stripPhoneNumber = (value?: string) => {
  return value?.replace(/^\+216/, '').replace(/\s+/g, '');
};
