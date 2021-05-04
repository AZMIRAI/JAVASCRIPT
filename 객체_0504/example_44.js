function topSalary(salaries) {
  let gtMoney = 0;
  let gtMoneyName = null;
  for(const [name, salary] of Object.entries(salaries)) {
    if (gtMoney < salary) {
      gtMoney = salary;
      gtMoneyName = name;
    }
  }
  return gtMoneyName;
}
