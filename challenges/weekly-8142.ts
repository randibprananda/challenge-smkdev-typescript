export const printCubeOfNumbers = (inputNumber: number): void => {
  for (let i = 1; i <= inputNumber; i++) {
    console.log(`Current Number is : ${i} and the cube is ${i * i * i}`);
  }
};
