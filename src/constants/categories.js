const alphaColor = 'ff';
const stdBgColor = '#fff';
const borderWidth = 2;
const incomeColors = [['#4479F8' + alphaColor, '#4479F8'], ['#6818F0' + alphaColor, '#6818F0'], ['#FF4351' + alphaColor, '#FF4351'], ['#FD7541' + alphaColor, '#FD7541'], ['#FFBF36' + alphaColor, '#FFBF36'], ['#00F7C9' + alphaColor, '#00F7C9'], ['#30BB4A' + alphaColor, '#30BB4A'], ['#00BBD2' + alphaColor, '#00BBD2'], ['#5F7B8A' + alphaColor, '#5F7B8A']];
const expenseColors = [['#F024E8' + alphaColor, '#F024E8'], ['#EFC117' + alphaColor, '#EFC117'], ['#17A5EC' + alphaColor, '#17A5EC'], ['#30BB4A' + alphaColor, '#30BB4A'], ['#00BBD2' + alphaColor, '#00BBD2'], ['#00F7C9' + alphaColor, '#00F7C9'], ['#FFBF36' + alphaColor, '#FFBF36'], ['#FD7541' + alphaColor, '#FD7541'], ['#FF4351' + alphaColor, '#FF4351'], ['#6818F0' + alphaColor, '#6818F0'], ['#4479F8' + alphaColor], '#4479F8'];

export const incomeCategories = [
    { type: 'Business', amount: 0, color: incomeColors[0][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Investments', amount: 0, color: incomeColors[1][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Extra income', amount: 0, color: incomeColors[2][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Deposits', amount: 0, color: incomeColors[3][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Lottery', amount: 0, color: incomeColors[4][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Gifts', amount: 0, color: incomeColors[5][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Salary', amount: 0, color: incomeColors[6][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Savings', amount: 0, color: incomeColors[7][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Rental income', amount: 0, color: incomeColors[8][0], border: stdBgColor, borderW: borderWidth },
];

export const expenseCategories = [
    { type: 'Bills', amount: 0, color: expenseColors[0][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Car', amount: 0, color: expenseColors[1][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Clothes', amount: 0, color: expenseColors[2][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Travel', amount: 0, color: expenseColors[3][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Food', amount: 0, color: expenseColors[4][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Shopping', amount: 0, color: expenseColors[5][0], border: stdBgColor, borderW: borderWidth },
    { type: 'House', amount: 0, color: expenseColors[6][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Entertainment', amount: 0, color: expenseColors[7][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Phone', amount: 0, color: expenseColors[8][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Pets', amount: 0, color: expenseColors[9][0], border: stdBgColor, borderW: borderWidth },
    { type: 'Other', amount: 0, color: expenseColors[10][0], border: stdBgColor, borderW: borderWidth },
];

export const resetCategories = () => {
    incomeCategories.forEach((c) => c.amount = 0);
    expenseCategories.forEach((c) => c.amount = 0);
};