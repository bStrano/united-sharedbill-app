const MonthName = ({ monthNumber }: { monthNumber: number }) => {
  const getMonthName = (number: number) => {
    const monthNames = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    if (number >= 1 && number <= 12) {
      return monthNames[number - 1];
    } else {
      return "Mês inválido";
    }
  };

  return getMonthName(monthNumber);
};

export default MonthName;
