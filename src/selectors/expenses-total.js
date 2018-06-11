export default (expenses) => {
  switch(expenses.length){
    case(0):
      return 0;
    case(1):
      return expenses[0].amount;
    default:
      return expenses.map((expense) => {
              return expense.amount
          }).reduce((acc, current) => {
              return acc + current
            });
  };
};
