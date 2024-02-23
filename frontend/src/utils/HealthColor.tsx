export const getHealthColor = (health: number): string => {
   if (health <= 33) {
      return 'red';
   } else if (health <= 66) {
      return 'yellow';
   } else {
      return 'green';
   }
};