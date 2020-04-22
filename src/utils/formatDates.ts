const formatDate = (value: number): string =>
  Intl.DateTimeFormat('pt-BR').format(value);

export default formatDate;
